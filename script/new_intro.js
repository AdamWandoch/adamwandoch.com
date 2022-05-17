window.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    developerWordAnimation();
    desktopAnimation();
  }, 3000);
});

function developerWordAnimation() {
  const developer = document.getElementById("developer");
  developer.classList.add("gradient-initial")
  setInterval(() => {
    developer.classList.toggle("gradient-change");
  }, 1200);
}

function desktopAnimation() {
  const desktop = document.getElementById("desktop");
  setInterval(() => {
    desktop.classList.toggle("desktop-change");
  }, 1200);
}


