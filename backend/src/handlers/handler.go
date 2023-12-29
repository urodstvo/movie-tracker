package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/urodstvo/movie-tracker/src/service"
)

type Handler struct {
	service *service.Service
}

func NewHandler(service *service.Service) *Handler {
	return &Handler{service}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	// auth := router.Group("/auth")
	// {
	// 	 auth.POST("/signup", h.SignUp)
	// 	 auth.POST("/signin", h.SignIn)
	// }

	return router
}