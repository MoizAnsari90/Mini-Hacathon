import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
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


  const lEmail = document.getElementById('lEmail');
  const lPassword = document.getElementById('lPassword');


  const lbtn =  document.getElementById('lbtn');

  lbtn.addEventListener('click' , ()=>{
      alert("Pakistan");

            const auth = getAuth(app);
      signInWithEmailAndPassword(auth, lEmail.value, lPassword.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("Sign In Account" ,user)
          window.location.href = "../dashboard/dashboard.html";
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode" ,errorCode)
          console.log("errorMessage" ,errorMessage)
        });
  })