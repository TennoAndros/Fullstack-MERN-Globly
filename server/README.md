# 📖 Globly API

---

## 📋 PROJECT SUMMARY

This Globly project API is a RESTful API built using Node.js, Express, and Mongoose, designed to power a social media platform. With MongoDB as the underlying database, the API enables users to perform a variety of actions, from user authentication and registration to post creation and interaction.

### Available endpoints:

## Authentication

- **POST /auth/login**: Log in a user using username and password.
- **POST /auth/register**: Register a new user.

## User Operations

- **GET /users/:id**: Retrieve information about a specific user.
- **GET /users/:id/friends**: Retrieve information about a specific users friends.
- **PATCH /users/:id/:friendId**: Add a user as a friend or remove the user from friend list.

## Post Operations

- **POST /posts**: Create a new post.
- **GET /posts**: Retrieve posts.
- **GET /:userId/posts**: Retrieve posts from a specific user .
- **PATCH /posts/:id/like**: Change the reaction (like or dislike) of a post.

The Globly API offers a comprehensive set of endpoints for building a social media platform, allowing users to connect, interact, and share content.

---

## 🛠️ How to clone repo, install dependencies.

### 1. Clone the repo

HTTP link to clone the repository:

```
https://github.com/TennoAndros/Fullstack-MERN-Globly
cd ./server
```

After clone and cd to server folder is finished follow the next step.

### 2. Install dependencies

Navigate to that directory in your terminal and run the below command to install all of the dependencies needed as found in the package.json file.
The install command is: `npm i` .

This repo was created using:

**-Dependencies-**

| Package                          | Version   | Usage                                   |
| :------------------------------- | :-------- | :-------------------------------------- |
| <sub>bcrypt</sub>                | `^5.1.0`  | _Password hashing and authentication_   |
| <sub>body-parser</sub>           | `^1.20.2` | _Parsing incoming request bodies_       |
| <sub>cors</sub>                  | `^2.8.5`  | _Cross-origin resource sharing_         |
| <sub>dotenv</sub>                | `^16.3.1` | _Managing environment variables_        |
| <sub>express</sub>               | `^4.18.2` | _Web application framework for routing_ |
| <sub>gridfs-stream</sub>         | `^1.1.1`  | _MongoDB GridFS stream support_         |
| <sub>helmet</sub>                | `^7.0.0`  | _HTTP header security_                  |
| <sub>jsonwebtoken</sub>          | `^9.0.1`  | _JWT creation and verification_         |
| <sub>mongoose</sub>              | `^7.4.3`  | _ODM library for MongoDB interactions_  |
| <sub>morgan</sub>                | `^1.10.0` | _HTTP request logging middleware_       |
| <sub>multer</sub>                | `^1.4.4`  | _File uploading middleware_             |
| <sub>multer-gridfs-storage</sub> | `^5.0.2`  | _GridFS storage engine for Multer_      |

---

## ⚙️ System Setup

The project was created using the listed versions of Node, MongoDB and npm:

- [Node](https://nodejs.org/en/) (version v18.17.0)
- [MongoDB](https://www.mongodb.com/) (version 6.0)
- [npm](https://www.npmjs.com/) (version 9.6.7)

It might work with other versions but they haven't been tested.

**More functionality will be added in the future.**
