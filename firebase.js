// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAt65YeKYi0esZ_o1XuRLQz_JmxJxxy-s",
  authDomain: "fir-auth-d443f.firebaseapp.com",
  projectId: "fir-auth-d443f",
  storageBucket: "fir-auth-d443f.appspot.com",
  messagingSenderId: "321441322005",
  appId: "1:321441322005:web:7d1cd8d3288038d0b8ea1c",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
