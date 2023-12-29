package service

import (
	"github.com/urodstvo/movie-tracker/src/repo"
	"github.com/urodstvo/movie-tracker/src/service/auth"
)

type Authorization interface {
	
}

type Service struct {
	Authorization
}

func NewService(repo *repo.Repository) *Service {
	return &Service{
		Authorization: auth.NewAuthService(repo.UsersCollection),
	}
}