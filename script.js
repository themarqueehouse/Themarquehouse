// Force the loading screen to stay for a minimum time
window.addEventListener("load", function () {
  const loader = document.getElementById("loading-screen");
  setTimeout(function () {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 1s ease";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000); // Wait for the fade to complete
  }, 8000); // Force 8 seconds regardless of load speed
});
