package mongoDB

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func NewMongoDB(ctx context.Context) *mongo.Database {
	uri := os.Getenv("MONGO_URI")
	if uri == "" {
		log.Fatal("No 'MONGO_URI' in .env")
	}

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		panic(err)
	}

	return client.Database("cloud")
}