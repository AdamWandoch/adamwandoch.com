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