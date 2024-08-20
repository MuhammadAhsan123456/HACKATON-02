

 // Import the Firebase libraries
 import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
 import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

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
 const db = getFirestore(app);

 // Handle form submission
 document.getElementById('registrationForm').addEventListener('submit', async (e) => {
     e.preventDefault(); // Prevent the form from submitting the traditional way

     // Get form data
     const username = document.getElementById('username').value;
     const cnic = document.getElementById('cnic').value;
     const contact = document.getElementById('contact').value;
     const dob = document.getElementById('dob').value;
     const address = document.getElementById('address').value;

     // Add data to Firestore
     try {
         await addDoc(collection(db, 'students'), {
             username: username,
             cnic: cnic,
             contact: contact,
             dob: dob,
             address: address
         });
         alert('Registration successful!');
         document.getElementById('registrationForm').reset(); // Reset form after submission
     } catch (error) {
         console.error('Error adding document: ', error);
         alert('An error occurred. Please try again.');
     }
 });