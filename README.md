# Ecommerce Skelleton

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Ecommerce skeleton is a skeleton template for anyone who wants to use vuejs to start an ecommerce store. This Skeleton has firebase and stripe payments built right in so all you need to do is setup a firebase account and a stripe account, add the API keys and start selling! 

# Features

- Firebase Cloud Firestore
- Firebase Auth
- Firebase functions
- firebase hosting
- Stripe Payments
- Vuetify
- Vuejs

### Included
- Database CSV Uploader

### Plugins
- Firebase
- Vuetify
- Vuex
- Vue-router
- Vuefire
- Vue-stripe-checkout

### Installation
    yarn install
    yarn run serve

### Config Folder
Create a config folder in src so the path is src/config

Create 2 files firebase.js and stripe.js

firebase.js File structure:

```
    const firebase_config = {
        apiKey: "YOUR API KEY",
        authDomain: "YOUR AUTH DOMAIN",
        databaseURL: "YORU DATABSE URL",
        projectId: "YOUR PROJECT ID",
        storageBucket: "",
        messagingSenderId: "YOUR MESSAGE SENDER ID",
        appId: "YOUR APP ID",
    };

    export default firebase_config;

```

stripe.js file structure: 

```
    const stripe_config = {
        stripePublishableKey: "YOUR STRIPE PUBLISHABLE API KEY"
    }

    export default stripe_config
```
## Firebase setup
Follow the directions on setting up a firebase project then once you have a project follow the steps below to integrate. 

- In your firebase console go to the gear Icon and click "Project Settings"
- Scroll down and get the firebase keys from FIrebase SDK snippet

```
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGE_SENDER_ID",
    appId: "YOUR_APP_ID"
```

Once you have found these go back to your project and copy the lines into the firebase.js file in the config folder (src/config/firebase.js)

Once that is complete, your application should now be able to communicate with firebase. 

### Setup Authentication

- In the firebase console click on authentication and enable email authentication. 
- You should now be able to create users through the front end application

### Upload Items to DB

- Through the terminal navigate to the backend folder and install the dependencies
    
    
    npm install

- you will need to get the admin access token from your firebase database to upload items to the database. 
- Go to the firebase console, click on the gear icon and Project Settings
- Click on the Service Accounts tab and "Generate a new provate key"
- save this file in your uploader folder
- In the index.js file change User Variables on line 2 and 3 to:


    const serviceAccount = require("./your-project-firebase-admin-sdk.json")
    const databaseURL = "https://YOUR_DATABASE_URL.firebaseio.com"
    
- The collectionKey can be either "items", "categories" if you want to work with the base template. You are free to add more collections for your store. :) 
- Please keep in mind you will need to create the store modules for each collection you add.

#### Upload file
- In the backend/data folder you will find a UploadItems.csv file. This will be the file you will need to add items to the store. 
- Please do not change the headers in this file because they are directly linked to the item page. 
- If you do want to add more headers then you are welcome to do so.
- Please keep in mind you will need to update the item page to accommodate your new headers

Once that is complete you should now be able to upload items to the data base by navigating to backend/uploader and running:
    
    node index.js

If all items were successfully uploaded, the output should be:

    Document --- successfully written!
    
## Stripe Payments Setup
First you will need to create a stripe payments account from stripe.com. 
Follow the instructions on stripe to get a secret key and public key. 
Once you have those then follow the instructions below to integrate: 

- If you have not already then you will want to install firebase CLI
- Follow the instructions here to install Firebase CLI https://firebase.google.com/docs/cli/
- Once you've installed the Firebase CLI, create a shell app by running 
    
    
    firebase init
    
- Select Database, Functions, and Hosting. Then, select your Firebase project from the project list.

### Test that it works
- To deploy your shell app, run 


    firebase deploy
- Check that your app is running.

### Configure Stripe

- Once you have your client API Key 
- Go to the Config folder in src/config and update the file stripe.js
- Update the stripePublishableKey with your key

One that is done then you can configure  your stripe server key.
- run the following command from backend/firebase:


    firebase functions:config:set stripe.token="your-test-secret-key"
    
- Push your new changes by running


    firebase deploy

Once you have that setup you can add hosting to your application's front end. 

## Cofigure Firebase Hosting

Go to your main project folder and run: 
    
    firebase init
    
- Select your project and select "hosting"
- Then run:


    firebase deploy

Visit your payments app's URL at your-firebase-project-id.firebaseapp.com and check that the following features work:

- Your Name and Email is displayed on the profile page.
- You can enter a credit card and Add it.
- You can create a new Charge.
- You can sign out. 

# Done! 
Congratulations! You have completed the setup of the ecommerce skeleton! 
We hope you enjoy this skeleton application and we can't wait to see what else you will create with this!

#### Good luck!
