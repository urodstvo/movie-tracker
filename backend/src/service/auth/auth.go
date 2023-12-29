package auth

import "github.com/urodstvo/movie-tracker/src/repo"

type AuthService struct {
	repo repo.UsersCollection
}

func NewAuthService(repo repo.UsersCollection) *AuthService {
	return &AuthService{repo}
}