The Post App
The Blog Post App is a web application that allows users to create, read, update, and delete blog posts. The app also includes user authentication to ensure that only authorized users can perform CRUD operations. Additionally, the app incorporates a profanity filter to prevent the posting of offensive content.

Table of Contents
Introduction
Features
Technologies Used
Installation
Usage
Authentication
Profanity Filter
License
Introduction
The Blog Post App is a full-stack web application that provides a platform for users to write and share blog posts with the community. Users can create accounts, log in, and perform CRUD operations on their blog posts. The app also ensures that offensive language is filtered out using a profanity filter.

Features
User Registration: New users can create accounts by providing a unique email and a secure password.

User Login: Registered users can log in using their credentials.

Create a Blog Post: Authenticated users can create new blog posts by providing a title, content, and optional tags.

Read Blog Posts: All users can read blog posts without authentication.

Update Blog Post: Users who have created a blog post can edit the content, title, or tags of their own posts.

Delete Blog Post: Users can delete their own blog posts.

Authentication: The app ensures that only authenticated users can access protected routes for creating, updating, and deleting blog posts.

Profanity Filter: The app utilizes a profanity filter to prevent the posting of content containing offensive language.

Technologies Used
The Blog Post App is built using the following technologies:

Front-end:

HTML, CSS, JavaScript
React.js: A popular JavaScript library for building user interfaces.
Axios: A library for making HTTP requests to the backend server.
Back-end:

Node.js: A server-side JavaScript runtime.
Express.js: A web application framework for Node.js.
MongoDB: A NoSQL database for storing blog posts and user information.
Mongoose: An Object Data Modeling (ODM) library for MongoDB, used for interacting with the database.
Authentication:

JSON Web Tokens (JWT): Used for user authentication and session management.
Installation
To run the Blog Post App locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/blog-q.git
cd blog-post-app
Install the dependencies:
bash
Copy code
cd backend
npm install

cd ../frontend
npm install
Set up the environment variables:

Create a .env file in the backend directory and configure the following variables:

makefile
Copy code
PORT=3001
MONGODB_URI=your_mongodb_uri
SECRET_KEY=your_secret_key_for_jwt
Start the development server:

bash
Copy code
cd backend
npm start

cd ../frontend
npm start
The app should now be running on http://localhost:3000.

check deployment at
https://thepost.vercel.app/

Usage
Home Page: The home page displays a list of all blog posts, along with their titles and preview content. Users can click on a post to view its full content.

Register: To create a new account, users can navigate to the register page and provide a unique email and secure password.

Login: After registering, users can log in using their credentials on the login page.

Create a Blog Post: Authenticated users can navigate to the "Create Post" page and fill in the required details to create a new blog post.

Update/Delete a Blog Post: Users can view their own blog posts on the "My Profile" page. From there, they can edit or delete a specific post.

Authentication
The Blog Post App uses JSON Web Tokens (JWT) for user authentication. When a user logs in, the server generates a token, which is then included in subsequent requests as an Authorization header. This token is used to verify the user's identity and grant access to protected routes.

Profanity Filter
To maintain a friendly and respectful environment, the app incorporates a profanity filter that scans the content of new blog posts for offensive language. If the filter detects any inappropriate words, it prevents the post from being saved and notifies the user about the violation.

Contributing
Contributions to the Blog Post App are welcome! If you find any bugs or have ideas for improvements, feel free to submit issues or pull requests. Please follow the project's code of conduct and guidelines for contributing.

License
The Blog Post App is open-source and licensed under the MIT License. You are free to use, modify, and distribute the code as per the terms of the license.
