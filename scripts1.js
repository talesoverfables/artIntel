document.addEventListener("DOMContentLoaded", () => {
  // Interact with "Log in" button in NFT Minting Section
  const loginButton = document.querySelector(".btn-login");
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecting to Login Page!");
    window.location.href = "login.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const museums = [
    {
      name: "Dr. Bhau Daji Lad Mumbai City Museum",
      description: "Journey through the history of art",
      image:
        "https://4.bp.blogspot.com/-PDbn67fk_fk/WcgB0pJt19I/AAAAAAAAFLo/lvMTJ2xjp2ABd2nCwjMuCCVKFRBEGIrgwCLcBGAs/s1600/DSC_0655.jpg",
      tourLink: "https://g.co/arts/UX11pSTMTcGLKauc8",
    },
    {
      name: "The National Museum of Modern Art, Tokyo",
      description: "Discover artworks created by artificial intelligence",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ef/24/15/caption.jpg?w=1200&h=-1&s=1",
      tourLink: "https://g.co/arts/6YWj4C1gfJfaUQFu9",
    },
    {
      name: "Singapore Art Museum",
      description:
        "An immersive experience where every exhibit whispers tales of culture, passion, and innovation.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/fb/37/2a/singapore-art-museum.jpg?w=1200&h=-1&s=1",
      tourLink:
        "https://artsandculture.google.com/streetview/singapore-biennale-2016-%E2%80%93-level-1-singapore-art-museum/iAF92nI2XAj1Hg?sv_lng=103.85099474217898&sv_lat=1.2972067076170353&sv_h=148.46684804514945&sv_p=-0.9028332210973247&sv_pid=7isrwQacJYt-EspcnrNImw&sv_z=1",
    },
    {
      name: "National Galleries Scotland: Portrait",
      description:
        "Wander through halls adorned with works that reflect the essence of human emotion and ingenuity.",
      image:
        "https://media.cntraveler.com/photos/55d37055c47ae13868ae716e/master/pass/national-gallery-of-art-cr-alamy.jpg",
      tourLink: "https://g.co/arts/KrDUzjKBsHFkGYfAA",
    },
    {
      name: "Salar Jung Museum",
      description:
        "Discover masterpieces that transcend time, offering a glimpse into the minds of history’s greatest creators.",
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/50382227093c4ae17ef1ab_20220523165700.jpeg",
      tourLink: "https://g.co/arts/P4oSnSEiKZvQ1g8x6",
    },
  ];

  const museumGrid = document.querySelector(".museum-grid");

  museums.forEach((museum, index) => {
    const card = document.createElement("div");
    card.className = "museum-card animate-on-scroll";
    card.style.transitionDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="museum-card-image">
          <img src="${museum.image}" alt="${museum.name}">
        </div>
        <div class="museum-card-content">
          <h3>${museum.name}</h3>
          <p>${museum.description}</p>
          <a href="#" class="tour-button">Take a Tour</a>
        </div>
      `;
    museumGrid.appendChild(card);

    // Add click event for tour button
    const tourButton = card.querySelector(".tour-button");
    tourButton.href = museum.tourLink; // Assign the virtual tour link to the button's href
    tourButton.target = "_blank"; // Open the link in a new tab
    tourButton.addEventListener("click", function (e) {
      alert(`Redirecting to the virtual tour of ${museum.name}`);
    });
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe all animate-on-scroll elements
  document
    .querySelectorAll(".animate-on-scroll, .museum-card")
    .forEach((el) => {
      observer.observe(el);
    });

  // Hover effect for museum cards
  museumGrid.addEventListener("mousemove", function (e) {
    const cards = document.querySelectorAll(".museum-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});
