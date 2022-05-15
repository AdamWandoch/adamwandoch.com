window.addEventListener("click", function() {
  togglePageVisibility(0);
  setTimeout(() => {
    location.href = this.location.href.replace("intro", "index");
  }, 2000);
});

window.addEventListener("DOMContentLoaded", function() {
  const words = [
    "create",
    "software",
    "to",
    "Help",
    "people!"
  ]

  togglePageVisibility(1000);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    applyAccent(word);
  }
  
  setInterval(() => {
  const spans = document.getElementsByClassName("accent");
  animateWords(spans, 200);
  }, 3000);

  setTimeout(() => {
    let anywhere = document.getElementById("anywhere");
    anywhere.style.filter = "opacity(100%)";
  }, 5000);

});

function togglePageVisibility(timeout) {
  // reveal the page
  const main = document.querySelector("main");
  setTimeout(() => {
    main.classList.toggle("filter-unset");
  }, timeout);
}

function applyAccent(searchString) {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    let paragraph = paragraphs[i];
    if (paragraph.innerHTML.includes(searchString)) {
      let newString = paragraph.innerHTML.replace(
                      searchString,
                      "<span class=\"accent\">" + searchString + "</span>");
      paragraph.innerHTML = newString;
    }
  }
}
  
function animateWords(spans, delay) {
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    const timeout = (i + 1) * delay;
    setTimeout(() => {
      span.classList.toggle("animation-effect");
    }, timeout);
  }
}
