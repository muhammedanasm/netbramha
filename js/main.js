// toggle submenu
const overview = document.querySelector(".overview");
overview.addEventListener("click", () => {
  overview.classList.toggle("active");
});

// graph
const ctx = document.getElementById("nbScoreChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "NB Score",
        data: [null, null, 520, 580, null, 493, null, 510],
        borderColor: "#2a9df4",
        backgroundColor: "#2a9df4",
        tension: 0.4,
        fill: false,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#2a9df4",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 300,
        max: 900,
        ticks: {
          stepSize: 100,
        },
        title: {
          display: true,
          text: "NB Score",
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Score: ${context.raw}`;
          },
        },
      },
    },
  },
});

// toggle sidebar
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});
