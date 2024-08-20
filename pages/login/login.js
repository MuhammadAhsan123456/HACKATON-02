// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl7Y9gWDII9QUOY73UdndyCK1lTuJE6gQ",
    authDomain: "hackaton-bb671.firebaseapp.com",
    projectId: "hackaton-bb671",
    storageBucket: "hackaton-bb671.appspot.com",
    messagingSenderId: "286754102966",
    appId: "1:286754102966:web:72ef85c07ff4e024fe1017",
    measurementId: "G-9L0599MDV2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let email = document.getElementById("email");
let password = document.getElementById("password");

window.loginUser = () => {
  let obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  
  
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(async (res) => {
      const id = res.user.uid;
      const reference = doc(db, "users", id);
      const snap = await getDoc(reference);
      if (snap.exists()) {
        localStorage.setItem("user", JSON.stringify(snap.data()));
        alert("Login successful!"); // Show alert on successful login
      } else {
        alert("Data Not Found");
      }
    })
    .catch((err) => {
      alert(err.message);
    });
};


// window.location.replace("../../index.html");