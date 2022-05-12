window.addEventListener("DOMContentLoaded", function() {
    const words = [
      "create",
      "software",
      "Help",
    ]

    for (let i = 0; i < words.length; i++) {
      const element = words[i];
      applyAccent(element);
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
    const element = spans[i];
    if (element) {
      element.classList.toggle("invert");
      // setTimeout(element.classList.toggle("invert"), 100);
    }
  }
}