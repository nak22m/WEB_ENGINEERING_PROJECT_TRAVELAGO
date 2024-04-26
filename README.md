# WEB_ENGINEERING_PROJECT_TRAVELAGO
Web Engineering Project for 6th semester 
<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>


> Travelago is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/nak22m/WEB_ENGINEERING_PROJECT_TRAVELAGO.git

## Client side usage(PORT:5173)
```terminal
$ cd client         
$ yarn # or npm i    
$ npm run dev        

// deployment for client app
$ npm run build 
$ npm run start 


## Server-side usage(PORT: 4000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env


### Start

```terminal
$ cd backend   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
lodash: ^3.10.1 | cors: ^2.8.1
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
   express: ^4.18.2 |  fs: ^0.0.1-security                                   
   image-downloader: ^4.3.0 | jsonwebtoken: ^9.0.1
react-router-dom: ^4.2.2 | mongoose: ^4.7.4
