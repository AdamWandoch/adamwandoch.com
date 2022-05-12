window.addEventListener("click", function() {
  location.href = "https://github.com/AdamWandoch/";
});

window.addEventListener("DOMContentLoaded", function() {
    const words = [
      "create",
      "software",
      "to",
      "Help",
    ]

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      applyAccent(word);
    }

    setInterval(toggle, 3000);

  }) 

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

function toggle() {
  const spans = document.getElementsByClassName("accent");
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if (span) {
      span.classList.toggle("invert");
    }
  }
}