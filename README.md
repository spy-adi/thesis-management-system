# Thesis Management System

Thesis Management System is a web application built with React.js, Node.js, and MySQL, using Sequelize as the ORM. It provides a platform to streamline the entire PhD student life-cycle, specifically focusing on thesis submission and evaluation processes.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Language**: JavaScript

## Folder Structure

The project follows a client-server architecture with the following folder structure:

```plaintext
thesis-management-system
│
├── client
│   ├── public
│   │   ├── index.html
│   │   └── ...
│   ├── src
│   │   ├── components
│   │   │   └── ...
│   │   ├── containers
│   │   │   └── ...
│   │   ├── services
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── server
│   ├── config
│   │   └── ...
│   ├── controllers
│   │   └── ...
│   ├── models
│   │   └── ...
│   ├── routes
│   │   └── ...
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── .gitignore
├── package.json
└── README.md
```
- **client**: Contains the frontend code written in React.js.
- **server**: Contains the backend code written in Node.js.
  - **config**: Configuration files.
  - **controllers**: Business logic.
  - **models**: Database models using Sequelize.
  - **routes**: API routes.
  - **index.js**: Entry point for the server.

## Getting Started

To get started with the development, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/spy-adi/thesis-management-system.git
   cd thesis-management-system
   ```

2. **Install dependencies for both client and server:**

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Configure the database connection in the `server/config` folder.**

4. **Start the development server for both client and server:**

   ```bash
   cd client
   npm start
   ```

   ```bash
   cd server
   npm start
   ```

5. **Open your browser and navigate to `http://localhost:3000` to access the application.**

```
