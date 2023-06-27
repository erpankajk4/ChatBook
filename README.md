# CHATBOOK
The project is a web application built using Node.js and Express.js for user authentication and profile management.
## Deployed Link

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [DEMOS](#demos)

## NodeJS, ExpressJS, MongoDB, EJS have been used for the development of this App.

## Description
The project is a user authentication and profile management web application. It allows users to sign up, sign in, update their profile information, and view their profile. The application uses sessions and cookies for user authentication and stores user data in a MongoDB database.
It has sign in / sign up by Google Feature too.

## Dependencies

The project uses the following major dependencies and tools:

- bcryptjs: Library for hashing and salting passwords.
- body-parser: Middleware for parsing request bodies.
- connect-flash: Flash messages middleware for displaying notifications.
- connect-mongo: MongoDB session store for Express.js.
- cookie-parser: Middleware for parsing cookies.
- crypto: Library for cryptographic functions.
- dotenv: Loads environment variables from a .env file.
- ejs: Template engine for rendering views.
- express: Web application framework for Node.js.
- express-ejs-layouts: Middleware for layout support in Express.js.
- express-session: Session middleware for Express.js.
- mongoose: MongoDB object modeling for Node.js.
- nodemon: Utility for auto-restarting the server during development.
- passport: Authentication middleware for Node.js.
- passport-google-oauth: Google OAuth strategy for Passport.js.
- passport-jwt: JWT strategy for Passport.js.
- passport-local: Local strategy for Passport.js.

## Features
The key features of the application include:
- User registration: Allows users to sign up with a username, email, and password.
- User authentication: Provides user authentication using local strategy (username and password) and Google OAuth2.
- User profile: Users can view and update their profile information, including username and password.
- Session management: Uses express-session and connect-mongo for session management and storing session data in MongoDB.
- Flash messages: Displays flash messages for success and error notifications.
- Layout support: Utilizes express-ejs-layouts for creating reusable layouts for views.
- Middleware: Implements various middleware for request parsing, cookie handling, static file serving, etc.

## Installation
1. Clone the repository:
```
git clone <repository-url>
```
2. Navigate to the project directory:
```
cd <project-directory>
```
3. Set up a MongoDB database and update the MongoDB connection URL in the `.env` file.
4. Install the dependencies:
```
npm install
```
5. Start the server:
```
npm start
```
6. Access the application in a web browser:
```
http://localhost:<port>
```

Make sure to replace `<port>` with the actual port number specified in the `.env` file or the default port `8000`.

## Folder Structure
📦ChatBook
 ┣ 📂assets
 ┃ ┗ 📂css
 ┃ ┃ ┗ 📜layout.css
 ┣ 📂config
 ┃ ┣ 📜middleware.js
 ┃ ┣ 📜mongoose.js
 ┃ ┣ 📜passport-google-oauth2-strategy.js
 ┃ ┗ 📜passport.js
 ┣ 📂controllers
 ┃ ┣ 📜dashBoardController.js
 ┃ ┗ 📜userController.js
 ┣ 📂DEMO
 ┃ ┣ 📜login.png
 ┃ ┣ 📜signup.png
 ┃ ┗ 📜update.png
 ┣ 📂models
 ┃ ┗ 📜user.js
 ┣ 📂routes
 ┃ ┣ 📜index.js
 ┃ ┗ 📜users.js
 ┣ 📂views
 ┃ ┣ 📜dashboard.ejs
 ┃ ┣ 📜layout.ejs
 ┃ ┣ 📜signin.ejs
 ┃ ┣ 📜signup.ejs
 ┃ ┣ 📜user_profile.ejs
 ┃ ┣ 📜_footer.ejs
 ┃ ┣ 📜_header.ejs
 ┃ ┗ 📜_signupForm.ejs
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

[ISC License](LICENSE)

## DEMO

