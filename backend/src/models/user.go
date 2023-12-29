package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id       primitive.ObjectID 	`json:"id" bson:"_id,omitempty"`
	Username string             	`json:"username" bson:"username"`
	Password string             	`json:"password" bson:"password"`
	Email    string             	`json:"email" bson:"email,omitempty"`
	RegisteredAt primitive.DateTime `json:"registered_at" bson:"registered_at"`
}

type CreateUserDTO struct {
	Username string `json:"username"`
	Password string `json:"password"`
}