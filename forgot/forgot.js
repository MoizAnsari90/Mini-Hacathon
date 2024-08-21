




import { getAuth , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
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



const vEmail = document.getElementById('v-email');
const vBtn = document.getElementById('v-btn');

vBtn.addEventListener('click' , ()=>{
    alert("Hello Pakistan");
    const auth = getAuth(app);
    sendPasswordResetEmail(auth, vEmail?.value)
        .then(() => {
            console.log("Password reset email sent!");
            
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode , "Password reset email Not sent")
            console.log(errorMessage , "Password reset email Not sent")
        });
})



