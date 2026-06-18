# URL Shortener API

## Project Overview

A full-stack URL Shortener application built using Node.js, Express.js, and MongoDB. The application allows users to convert long URLs into short links, redirect users to the original URL, and track the number of clicks for each shortened URL.

---

## Features

* Shorten long URLs into unique short links
* Redirect users to the original URL
* Track click counts for each shortened URL
* Store URL data in MongoDB Atlas
* REST API architecture
* Simple frontend interface for testing

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Frontend

* HTML
* JavaScript

### Tools

* VS Code
* Postman
* Git
* GitHub

---

## Project Structure

url-shortener/

├── models/

│   └── Url.js

├── routes/

│   └── urlRoutes.js

├── public/

│   └── index.html

├── .gitignore

├── package.json

├── package-lock.json

├── server.js

└── README.md

---

## Installation

### Clone Repository

git clone https://github.com/Kalibaranwal/url-shortener-api.git

### Move into Project Folder

cd url-shortener-api

### Install Dependencies

npm install

### Create .env File

PORT=5000

MONGO_URI=your_mongodb_connection_string

BASE_URL=http://localhost:5000

### Run Application

npm run dev

---

## API Endpoints

### Create Short URL

POST /shorten

Request Body:

{
"originalUrl": "https://www.google.com"
}

Response:

{
"shortUrl": "http://localhost:5000/abc123"
}

---

### Redirect to Original URL

GET /:code

Example:

GET /abc123

Redirects user to the original URL.

---

### Get Analytics

GET /analytics/:code

Example:

GET /analytics/abc123

Response:

{
"originalUrl": "https://www.google.com",
"shortCode": "abc123",
"clicks": 5
}


---

## Author

Kali Baranwal

GitHub: https://github.com/Kalibaranwal
