
# Happy Shop - MERN E-Commerce Website

Welcome to Happy Shop - your one-stop destination for all your shopping needs! Whether you're looking for clothing, electronics, beauty products, or more, Happy Shop has got you covered. This README file provides an overview of the project and instructions for setting up and running the website.

Admin login credentials: 
```plaintext
email: admin@test.com
password: Admin123
```

To view the server-side code for the Happy Shop project, you can visit the GitHub repository at the following link:

[Happy Shop Server Repository](https://github.com/jakariamasum/Happy-Shop-server)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
  - [Client](#client)
  - [Server](#server)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Happy Shop is an e-commerce website developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers a user-friendly interface, secure payment options, and a wide range of products across various categories.

## Features

- User authentication and authorization
- Product browsing and searching
- Adding products to cart
- Secure checkout process
- User profile management
- Admin dashboard for managing products and orders
- Responsive design for optimal viewing on different devices

## Installation

### Client

To run the client side of Happy Shop locally on your machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/jakariamasum/Happy-Shop-Client
   ```

2. Navigate to the client directory:

   ```bash
   cd Happy-Shop/Client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the client:

   ```bash
   npm run dev
   ```

   The client should now be running on `http://localhost:5173`.

### Server

To run the server side of Happy Shop locally on your machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/jakariamasum/Happy-Shop-server
   ```

2. Navigate to the server directory:

   ```bash
   cd Happy-Shop/server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the server directory and add the following variables:

   ```plaintext
   DB_USER= choloBazar
   DB_PASS= vXk6QDCz60HOO76I
   SSLCOMMERZ_STORE_ID= test659261714931e
   SSLCOMMERZ_STORE_PASS= test659261714931e@ssl
   ```

5. Start the server:

   ```bash
   nodemon index.js
   ```
   or 
   ```bash
   node index
   ```

   The server should now be running on `http://localhost:8000`.

## Usage

Once both the client and server are running, you can access Happy Shop by navigating to `http://localhost:5173` in your web browser. From there, you can start using the website to browse products, add items to your cart, and complete purchases.

## Contributing

Contributions are welcome! If you'd like to contribute to Happy Shop, please follow the same steps outlined above for both the client and server sides.
