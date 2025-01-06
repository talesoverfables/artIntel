document.addEventListener("DOMContentLoaded", () => {
  console.log("Analytics Dashboard loaded successfully.");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "#f0e6ff";
    });
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "#fff";
    });
  });
});
