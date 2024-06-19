# Netflix Backend

This project is a backend server for a Netflix-like application, built using Node.js, Express.js, and MongoDB.

## Table of Contents

* Installation

* Configuration

* Running the Application

* API Endpoints

* Technologies Used

* Project Structure

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Lovenoelkujur/Netflix-Backend.git
cd netflix-backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```makefile
PORT = <your_port>
MONGO_URI = <your_mongodb_uri>
```

## Configuration

* `PORT`: The port on which the server will run.

* `MONGO_URI`: The connection string for your MongoDB database.

## Running the Application

1. Start the server:

```bash
npm start
```

The server should now be running and listening for requests on the specified port.

## API Endpoints

### User Authentication

* Register a new user:

    ```bash
        POST :- /api/v1/user/register
    ```
    Request body:

    ```json
    {
        "fullName": "John Doe",
        "email": "johndoe@example.com",
        "password": "yourpassword"
    }
    ```

    Response:
    ```json
    {
        "success": true,
        "message": "Account Created Successfully."
    }
    ```

* Login a user:

    ```bash
        POST :- /api/v1/user/login
    ```

    Request body:

    ```json
    {
        "email": "johndoe@example.com",
        "password": "yourpassword"
    }
    ```

    Response:

    ```json
    {
        "success": true,
        "message": "Welcome back John Doe.",
        "user": {
            "_id": "userId",
            "fullName": "John Doe",
            "email": "johndoe@example.com"
        }
    }
    ```

* Logout a user:

    ```bash
        GET :- /api/v1/user/logout
    ```

    Response:

    ```json
    {
        "success": true,
        "message": "User Logout Successfully."
    }
    ```

## Technologies Used

```json
{
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.4.1"
}
```

* `Node.js`: JavaScript runtime.

* `Express.js`: Web framework for Node.js.

* `MongoDB`: NoSQL database.

* `Mongoose`: ODM for MongoDB.

* `bcryptjs`: Library to hash passwords.

* `jsonwebtoken`: Library to generate and verify JSON Web Tokens.

* `cookie-parser`: Middleware to parse cookies.

* `dotenv`: Module to load environment variables from a .env file.

* `cors`: Middleware to enable Cross-Origin Resource Sharing.

## Project Structure

```bash
netflix-backend
│   .env
│   .gitignore
│   package.json
│   server.js
└───controllers
│       userController.js
└───models
│       userModel.js
└───routes
│       userRoute.js
└───utils
        database.js
```

* `server.js`: The main entry point of the application.

* `controllers`: Contains the logic for handling requests and responses.

* `models`: Contains the schema definitions for the MongoDB collections.

* `routes`: Contains the route definitions and mappings to controllers.

* `utils`: Contains utility functions such as the database connection setup.

## License

This project is licensed under the MIT License. See the LICENSE file for details.