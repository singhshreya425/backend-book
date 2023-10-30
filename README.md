# backend-book


# Bookstore API

Bookstore API is a simple Node.js application that provides CRUD (Create, Read, Update, Delete) operations for managing a collection of books.

It uses Express for routing, MongoDB for data storage, and Mongoose as an Object Data Modeling (ODM) library.

# Table of Contents

Features

Prerequisites

Getting Started

API Endpoints

# Usage

Contributing

# Features

The following features are implemented:

Create, Read, Update, and Delete books with title, author, and summary.

View a list of all available books.

View details of a specific book by its unique ID.

# Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your system.

MongoDB database installed and running locally or at the specified connection URL.


# Getting Started
Clone the repository to your local machine:


git clone :https://github.com/singhshreya425/backend-book.git


Install the project dependencies:

npm install

Start the application:

# npm start

The server will start on http://localhost:3000 (by default).

 Make sure your MongoDB database is running and accessible.

# API Endpoints

POST /books: Create a new book with title, author, and summary.

GET /getbooks: Retrieve a list of all books.

GET /books/:id: Retrieve details of a specific book by its ID.

PUT /updatebooks/:id: Update a book's details.

DELETE /deletebooks/:id: Delete a book.

# Usage

You can interact with the API using tools like Postman or by integrating it with your front-end application.

Here's an example of creating a new book using Postman:

Request Method: POST

URL: http://localhost:3000/books

Request Body (in JSON format):

json


{
  "title": "Book Title",
  "author": "Author Name",
  "summary": "Book Summary"
}


Contributing

Contributions are welcome