package repo

import (
	"github.com/urodstvo/movie-tracker/src/models"
	"github.com/urodstvo/movie-tracker/src/repo/mongo/collections"
	"go.mongodb.org/mongo-driver/mongo"
)

type UsersCollection interface {
	CreateUser(user models.User) (models.User, error)
	GetUser(id uint) (models.User, error)
	DeleteUser(id uint) error
}

type Repository struct {
	UsersCollection
}

func NewRepository(db *mongo.Database) *Repository {
	return &Repository{
		UsersCollection: collections.NewUsersCollection(db),
	}
}