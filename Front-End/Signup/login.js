// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import {
  getAuth, // GoogleAuthProvider
  signInWithEmailAndPassword, //GoogleAuthProvider,
  //signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app); // Initialize the auth instance here
/*auth.languageCode = 'it'; 

const provider1 = new GoogleAuthProvider(); 
const googlelogin = document.getElementById("googleSignUp");
googlelogin.addEventListener("click", function{
  alert(5);
}); */
// Wait for DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit"); // Reference the correct button ID

  submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values when the button is clicked
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        alert("Account Loggedin successfully! Welcome!");
        console.log("User Info:", user); // Log user information for debugging
        window.location.href = "nft-part/nft.html";
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
        console.error("Error Code:", errorCode); // Log error code for debugging
      });
  });
});
