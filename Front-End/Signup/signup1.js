// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

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

// Wait for DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit"); // Fix the typo in the ID

  submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values when the button is clicked
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Debugging output
    console.log("Email:", email);
    console.log("Password:", password);

    // Alert as a placeholder for further processing
    alert(`Email: ${email}, Password: ${password}`);
  });
});
