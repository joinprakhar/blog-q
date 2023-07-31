The Post App
The Blog Post App is a web application that allows users to create, read, update, and delete blog posts. The app also includes user authentication to ensure that only authorized users can perform CRUD operations. Additionally, the app incorporates a profanity filter to prevent the posting of offensive content.

<img width="700" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/9b606a99-583e-4df4-96a7-a6edb87136d6">

Table of Contents
Introduction
Features
Technologies Used
Installation
Usage
License


Introduction
The Blog Post App is a full-stack web application that provides a platform for users to write and share blog posts with the community. Users can create accounts, log in, and perform CRUD operations on their blog posts. The app also ensures that offensive language is filtered out using a profanity filter.

Features
User Registration: New users can create accounts by providing a unique email and a secure password.

<img width="285" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/f75f5b09-43b9-4848-b3ce-94dc2b75876c">

User Login: Registered users can log in using their credentials.

<img width="279" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/619b4a7d-14b4-4f27-934f-b7bde7c5bb8e">

Create a Blog Post: Authenticated users can create new blog posts by providing a title, content, and optional tags.

<img width="599" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/79e93504-1238-4d0a-9aa9-3545ca503edc">

Read Blog Posts: All users can read blog posts without authentication.

<img width="310" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/42d731c1-6344-4d5c-bce6-affbe713b0ca">

Update Blog Post: Users who have created a blog post can edit the content, title, or tags of their own posts.

<img width="334" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/6aa245ed-1d3f-4bb2-a88d-00e49e719cb7">

Delete Blog Post: Users can delete their own blog posts.

<img width="281" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/de5f9e70-2ba1-4f59-bf79-1e0f796fd0e6">
<img width="608" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/6c1b4a19-3c31-4bd5-a683-7ed3e9354369">

Authentication: The app ensures that only authenticated users can access protected routes for creating, updating, and deleting blog posts.

<img width="165" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/4b76b6ac-3609-45aa-9da1-8a9396f403f7">
<img width="165" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/f8c15f47-e0fa-4172-887b-7b8ad6453640">

Profanity Filter: The app utilizes a profanity filter to prevent the posting of content containing offensive language.

<img width="404" alt="image" src="https://github.com/joinprakhar/blog-q/assets/118005176/27bfbe3c-1302-471b-acd5-cb0e9744a1a1">

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

git clone https://github.com/joinprakhar/blog-q/

cd api

Install the dependencies:

npm install

cd client

npm install

run both frontend and backend

make sure to be in root directory 

npm run dev

The app should now be running on http://localhost:3000.

Set up the environment variables:

Create a .env file in the backend directory and configure the following variables:


PORT=3001
MONGODB_URI=your_mongodb_uri
SECRET_KEY=your_secret_key_for_jwt






check deployment at
https://thepost.vercel.app/



Contributing
Contributions to the Blog Post App are welcome! If you find any bugs or have ideas for improvements, feel free to submit issues or pull requests. Please follow the project's code of conduct and guidelines for contributing.

License
The Blog Post App is open-source and licensed under the ISC License. You are free to use, modify, and distribute the code as per the terms of the license.
