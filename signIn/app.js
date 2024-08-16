import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyBUbZ88zgaNkJzoU9q-hyGMC-KZxWkj9hg",
    authDomain: "login-setup-01.firebaseapp.com",
    projectId: "login-setup-01",
    storageBucket: "login-setup-01.appspot.com",
    messagingSenderId: "28839056147",
    appId: "1:28839056147:web:a73f01fee56e63efd5c0e6",
    measurementId: "G-NJ2E1P27J6"
  };
  
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);



const email = document.getElementById('email');
const password = document.getElementById('password');

const btn = document.getElementById('btn');

btn.addEventListener('click' , ()=>{
    alert("Hello");
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("New ID sign Up" ,user)
    window.location.href = "../login/login.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorCode" ,errorCode)
    console.log("errorMessage" ,errorMessage)
    // ..
  });
})