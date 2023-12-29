package collections

import (
	"github.com/urodstvo/movie-tracker/src/models"
	"go.mongodb.org/mongo-driver/mongo"
)

type UsersCollection struct {
	db *mongo.Collection
}

func NewUsersCollection(db *mongo.Database) *UsersCollection {
	return &UsersCollection{
		db: db.Collection("users"),
	}
}

func (c *UsersCollection) CreateUser(user models.User) (models.User, error) {
	return models.User{}, nil
}

func (c *UsersCollection) GetUser(id uint) (models.User, error) {
	return models.User{}, nil
}

func (c *UsersCollection) DeleteUser(id uint) error {
	return nil
}