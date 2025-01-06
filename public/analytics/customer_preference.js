$(document).ready(function () {
  // Age Distribution Chart
  const ageCtx = document
    .getElementById("ageDistributionChart")
    .getContext("2d");
  new Chart(ageCtx, {
    type: "bar",
    data: {
      labels: ["18-25", "26-35", "36-45", "46-55", "56+"],
      datasets: [
        {
          label: "Age Distribution",
          data: [500, 800, 600, 700, 400], // Replace with actual data
          backgroundColor: "skyblue",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Age Distribution",
        },
      },
    },
  });

  // Preference Chart
  const preferenceCtx = document
    .getElementById("preferenceChart")
    .getContext("2d");
  new Chart(preferenceCtx, {
    type: "pie",
    data: {
      labels: ["Painting", "Sculpture", "Photograph"],
      datasets: [
        {
          data: [50, 30, 20], // Replace with actual data
          backgroundColor: ["red", "green", "blue"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Art Preferences",
        },
      },
    },
  });

  // Views vs Likes Chart
  const viewsLikesCtx = document
    .getElementById("viewsLikesChart")
    .getContext("2d");
  new Chart(viewsLikesCtx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Views vs Likes",
          data: [
            // Replace with actual data
            { x: 200, y: 15 },
            { x: 300, y: 20 },
            { x: 400, y: 30 },
            { x: 500, y: 40 },
          ],
          backgroundColor: "purple",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Views vs Likes",
        },
      },
      scales: {
        x: { title: { display: true, text: "Views" } },
        y: { title: { display: true, text: "Likes" } },
      },
    },
  });

  // Feedback Sentiment Chart
  const feedbackCtx = document
    .getElementById("feedbackSentimentChart")
    .getContext("2d");
  new Chart(feedbackCtx, {
    type: "doughnut",
    data: {
      labels: ["Positive", "Neutral", "Negative"],
      datasets: [
        {
          data: [60, 30, 10], // Replace with actual data
          backgroundColor: ["lightgreen", "yellow", "red"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Feedback Sentiment",
        },
      },
    },
  });
});
