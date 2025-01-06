// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASCCfQxslTnb2eXTT30ofaanwJHA19K0w",
  authDomain: "artintel-app.firebaseapp.com",
  projectId: "artintel-app",
  storageBucket: "artintel-app.firebasestorage.app",
  messagingSenderId: "227628984562",
  appId: "1:227628984562:web:769b40dbbdbb9c756d086b",
  measurementId: "G-5LGFJ6XSWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Google Auth Provider instance

document.addEventListener("DOMContentLoaded", () => {
  // Handle email-password login
  const submit = document.getElementById("submit");
  submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        alert(`Welcome back, ${user.email}!`);
        console.log("User Info:", user); // Debugging
        window.location.href = "nft-part/nft.html"; // Redirect after login
      })
      .catch((error) => {
        // Handle errors
        const errorMessage = error.message;
        alert(`Login failed: ${errorMessage}`);
      });
  });

  // Handle Google Sign-In
  const googleSignInButton = document.getElementById("googleSignIn");
  googleSignInButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    signInWithPopup(auth, provider)
      .then((result) => {
        // Successful Google login
        const user = result.user;
        alert(`Welcome, ${user.displayName}!`);
        console.log("User Info:", user); // Debugging
        window.location.href = "nft-part/nft.html"; // Redirect after login
      })
      .catch((error) => {
        // Handle errors
        const errorMessage = error.message;
        alert(`Google Sign-In failed: ${errorMessage}`);
      });
  });
});
