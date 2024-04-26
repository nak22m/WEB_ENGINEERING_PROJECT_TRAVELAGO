# Setting Up the Travelago app 

## Contributed and created by : UI21CS34(Nakul Mantri) & UI21CS23(Jaydip Bawane)

This guide will walk you through the process of setting up the MERN Booking App on your local machine.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system.

## Cloning the Repository
```bash
git clone https://github.com/nak22m/WEB_ENGINEERING_PROJECT_TRAVELAGO.git
```

## Backend Configuration

1. **JWT_SECRET_KEY**:
    - This just needs to be any long, random string. You can google "secret key generator".

2. **Frontend URL**:
    - The `FRONTEND_URL` should point to the URL where your frontend application is running (typically `http://localhost:5173` if you're running it locally).

## Running the Application

1. **Backend**:
    - Navigate to the `backend` directory.
    - Install dependencies: `npm install`.
    - Start the server: `npm start`.

2. **Frontend**:
    - Open a new terminal and navigate to the `frontend` directory.
    - Install dependencies: `npm install`.
    - Start the frontend application: `npm run dev`.
    - The application should now be running on `http://localhost:5173` but verify this in your command line terminal
  
## List of dependencies 
1. **Frontend**
   ***Importing tailwindcss for usage***
```bash
npm install tailwindcss
npm tailwindcss init
```

***Using tailwindcss***
```bash
@import 'tailwindcss/base';
@import 'tailwindcss/components'
@import 'tailwindcss/utilities'
```

2. **Backend**
   ```bash
   npm install axios bcyrpt cookie-parser cors express mongoose multer nodemailer-sendgrid-transport nodemon fs image-downloader
   ```

## About
**TRAVELAGO**

Travelago is the name of our full stack web development that we’ve created, which is a vacation home renting website having a plethora of functionalities. It’s basically a site where people willing to rent their villas and farmhouses can easily post about the various amenities about their house and the vicinity it possess. It also aids them to make it possible for people searching to spend their holidays lavishly with their families without much issues. It enables them to have an access to the location where the house is situated. It’s an initiative took to have a source of income for those people as well. It serves as an efficient medium between the buyers and renters. It encompasses numerous components ranging from a user-friendly homepage to display of pictures of the vacation home. It allows users from any corner of the world to check if they have any vacation home available in their surroundings. It’s prototype which does have a future scope of improvement to implement the feature of payment via back account and also the tracking of location where the user is. Its database can also be made more vast so as to have an immense amount of entries so as to have maximum number of options. Thus, due to an exponential increase in the demand of masses to spend their vacation in a homely environment and to have a warm hospitality with reasonable prices per night, as well are aware of the fact that resorts charge an exorbitantly high amount just to spend an entire week there and the hospitality isn’t upto the mark as well. Therefore, in order to allow people to help people the tale of this website began.  
