// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9tT4YFmCo-NQJ7UQoMrN4j0o5XtKjFzY",
    authDomain: "restaurant-app-e93ae.firebaseapp.com",
    databaseURL: "https://restaurant-app-e93ae-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-e93ae",
    storageBucket: "restaurant-app-e93ae.firebasestorage.app",
    messagingSenderId: "392156690557",
    appId: "1:392156690557:web:84d8ec971ca48eaa22d914",
    measurementId: "G-NK9NF5DSBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);