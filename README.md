<h1 align="center">
  <p align="center">
      <img src="https://github.com/SheriefMohamed/MedMate/assets/78177060/c0fbef95-a233-4cf0-aa0d-b96e4da72270" alt="MedMate Logo" width="200">
  </p>MedMate
  <h3 align="center">Medicine reminder app for elder people for Graduation Project.</h3>
</h1>

# Main Features

  • 3 different users (patient, caregiver, admin).
  
  • User registration with ``` JWT ```.
  
  • Send emails in reset password by ``` Nodemailer ```.
  
  • Uploading pictures on ``` Cloudinary ```.
  
  • ``` FCM ``` for sending notifications.
  
  • Real-time chat with ``` Socket.io ```.

# Architecture

  MVC (Model–View–Controller).

# Built With 🛠

  • <a href="https://nodejs.org/en/docs">Nodejs</a> : Is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.
 
  • <a href="https://expressjs.com/en/5x/api.html">Express</a> : Is a minimalistic and flexible web application framework for Node.js. It is one of the most popular and widely used frameworks for building web applications and APIs using Node.js.

  • <a href="https://www.mongodb.com/docs">Mongodb</a> : Is a popular open-source, NoSQL database management system. It falls under the category of document-oriented databases, which means it stores and retrieves data in a flexible and schema-less format known as BSON (Binary JSON).
  
  • <a href="https://developer.android.com/docs">Android</a> : Powerful platform to create a wide range of applications and services that can run on various Android-powered devices.

  • <a href="https://angular.io/docs">Angular</a> : Is a popular open-source web application framework maintained by Google. It is primarily used for building dynamic, single-page web applications (SPAs) and is written in TypeScript. 

# Environment variables
  Add your config variables values in the .env file in root folder.
  
  ```
  DATABASE_LINK = ""
  PORT = 8080
  JWT_SECRET = ""
  SENGRID_PASSWORD = ""
  CLOUDINARY_USER_NAME = ""
  CLOUDINARY_API_KEY = ""
  CLOUDINARY_API_SECRET = ""
  FCM_SERVER_KEY = ""
  ```

# How to run

  • ``` git clone https://github.com/SheriefMohamed/MedMate.git ```.
  
  • Check .env file above and prepare your own one.

  • Add .env file in root bath of project.
  
  • Install dependencies``` npm install ```.
  
  • Run the server``` npm start ```.

# Collaborators

  • Thanks to <a href="https://github.com/Amira-9">ENG.Amira</a> who helped me to produce server side the project.

# Client side and Dashboard

  • Android app developed by <a href="https://github.com/EL-MANCY">ENG.Abdelrahman</a> & <a href="https://github.com/Ayaats">ENG.Ayat</a>.

  • Dashboard developed by <a href="https://github.com/devkarim10">ENG.Karim</a> & <a href="https://github.com/basmareda">ENG.Basma</a>.
  
  Our source <a href="https://github.com/EL-MANCY/oldPeopleCare">code</a>.
