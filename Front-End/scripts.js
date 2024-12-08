document.addEventListener("DOMContentLoaded", () => {
  // Interact with "Log in" button in NFT Minting Section
  const loginButton = document.querySelector(".btn-login");
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecting to Login Page!");
    window.location.href = "login.html";
  });
});
