// Show loading screen immediately (keep it visible for 15 seconds)
document.addEventListener("DOMContentLoaded", function () {
  // Start the timer right away
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
  }, 15000); // 15 seconds
});
