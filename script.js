// This runs as soon as the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const loader = document.getElementById("loading-screen");
    if (loader) loader.style.display = "none";
  }, 8000); // Force 8 seconds no matter how fast page loads
});
