package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/joho/godotenv"
	server "github.com/urodstvo/movie-tracker"
	"github.com/urodstvo/movie-tracker/src/handlers"
	"github.com/urodstvo/movie-tracker/src/repo"
	mongoDB "github.com/urodstvo/movie-tracker/src/repo/mongo"
	"github.com/urodstvo/movie-tracker/src/service"
)

func main() {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatal("Error loading .env file")
	}

	db := mongoDB.NewMongoDB(context.TODO())
	defer func() {
		if err := db.Client().Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	

	repo := repo.NewRepository(db)
	service := service.NewService(repo)
	router := handlers.NewHandler(service)

	server := new(server.Server)
	go func() {
		if err := server.Run("8000", router.InitRoutes()); err != nil {
			log.Fatalf("Error occured while running http server: %s", err.Error())
		}
	}()

	log.Println("APP Started")

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGTERM, syscall.SIGINT)
	<-quit

	if err := server.Shutdown(context.Background()); err != nil {
		log.Printf("Error occured on server shutting down: %s", err.Error())
	}
}