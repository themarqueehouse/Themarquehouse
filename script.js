// Force the loading screen to stay for a minimum time
window.addEventListener("load", function () {
  const loader = document.getElementById("loading-screen");
  setTimeout(function () {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 2s ease";
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000); // Wait for the fade to complete
  }, 15000); // Force 15 seconds regardless of load speed
});
