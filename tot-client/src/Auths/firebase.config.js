// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3PeAxcD1YAej7xv9RgOIB31lt-1qnvw0",
  authDomain: "time-on-task.firebaseapp.com",
  projectId: "time-on-task",
  storageBucket: "time-on-task.appspot.com",
  messagingSenderId: "643492325800",
  appId: "1:643492325800:web:9058d0b7035ee25c3cd59d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
