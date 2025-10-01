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

// filter account details tab
const tabs = document.querySelectorAll(".tab");
const accounts = document.querySelectorAll(".acc_2");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    accounts.forEach((acc) => {
      if (filter === "all") {
        acc.style.display = "flex"; // show all
      } else {
        acc.style.display = acc.dataset.type === filter ? "flex" : "none";
      }
    });
  });
});

// Function to calculate progress percentage based on score
function calculateProgress(score) {
  const minScore = 300;
  const maxScore = 900;

  // Calculate percentage (score - min) / (max - min) * 100
  let percentage = ((score - minScore) / (maxScore - minScore)) * 100;

  // Ensure percentage is between 0 and 100
  percentage = Math.max(0, Math.min(100, percentage));

  return percentage;
}

// Function to update the progress bar and score display
function updateProgressBar(score) {
  const progressBar = document.getElementById("progressBar");
  const scoreValue = document.getElementById("scoreValue");
  const scorePercentile = document.getElementById("scorePercentile");

  // Update score display
  scoreValue.textContent = score;

  // Calculate and set progress percentage
  const progressPercentage = calculateProgress(score);
  progressBar.style.width = `${progressPercentage}%`;

  // Update percentile text based on score
  if (score >= 300 && score <= 722) {
    scorePercentile.textContent =
      "Your NB Score lies in the top 70% in All Of India.";
  } else if (score >= 723 && score <= 747) {
    scorePercentile.textContent =
      "Your NB Score lies in the top 50% in All Of India.";
  } else if (score >= 748 && score <= 764) {
    scorePercentile.textContent =
      "Your NB Score lies in the top 30% in All Of India.";
  } else if (score >= 765 && score <= 777) {
    scorePercentile.textContent =
      "Your NB Score lies in the top 15% in All Of India.";
  } else if (score >= 778 && score <= 900) {
    scorePercentile.textContent =
      "Your NB Score lies in the top 5% in All Of India.";
  }
}

// Initialize with default score
document.addEventListener("DOMContentLoaded", function () {
  updateProgressBar(767); // Default score from your example
});

// Example: Update score dynamically (you can call this function with any score)
// updateProgressBar(750);
