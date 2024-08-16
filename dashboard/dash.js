import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore , collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";


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
  const db = getFirestore(app);


let title = document.getElementById('title');
// console.log(title)
let description = document.getElementById('description');
let btn = document.getElementById('add-blog-btn');

btn.addEventListener('click', async () => {
    event.preventDefault()
    alert("Hello");
    console.log(title.value , description.value)
    try {
        const docRef = await addDoc(collection(db, "blogs"), {
            title: title.value,
            description: description.value,
            name: "karachi",
            country: "Pakistan"
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

