// Login form submission handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Get form data
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Basic validation
  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  // Add your form submission logic here, such as sending data to a backend server for verification
  alert("Login successful!");

  // Redirect to a dashboard or home page
  window.location.href = "dashboard.html"; // Replace with your actual redirect page
});
