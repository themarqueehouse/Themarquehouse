// Show loading screen immediately (keep it visible for 8 seconds)
document.addEventListener("DOMContentLoaded", function () {
  // Start the timer right away
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
  }, 8000); // 8 seconds
});
