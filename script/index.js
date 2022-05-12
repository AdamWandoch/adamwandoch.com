window.addEventListener("click", function() {
  location.href = "https://github.com/AdamWandoch/";
});

window.addEventListener("DOMContentLoaded", function() {
    const words = [
      "create",
      "software",
      "to",
      "Help",
      "people!"
    ]

    // reveal the page
    const main = document.querySelector("main");
    setTimeout(() => {
      main.classList.add("filter-unset");
    }, 1000);

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      applyAccent(word);
    }
    
    setInterval(() => {
    const spans = document.getElementsByClassName("accent");
    animateWords(spans, 200);
  }, 3000);
});

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
