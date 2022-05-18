"use strict";



window.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    typingAnimation("p1", "Hi, I'm Adam.", 100);
  }, 1000);

  setTimeout(() => {
    typingAnimation("p2", "I'm looking for a change.", 100);
  }, 3500);

  setTimeout(() => {
    typingAnimation("header1", "Are you looking", 100);
  }, 7500);
  
  setTimeout(() => {
    typingAnimation("header2", "for a developer?", 100);
    
  }, 9500);

  setTimeout(() => {
    document.getElementById("portrait").classList.add("revealed");
  }, 11500);
  
  setTimeout(() => {
    document.getElementById("cta").classList.add("revealed");
  }, 11800);
  
  setTimeout(() => {
    document.getElementById("desktop").classList.add("revealed");
  }, 12100);

  setTimeout(() => {
    let h2 = document.getElementById("header2");
    h2.innerHTML = h2.innerHTML
                     .replace("developer", 
                              "<span id='developer'>developer</span>");
  }, 13000);

  setTimeout(() => {
    developerWordAnimation();
    desktopAnimation();
  }, 14000);
});


function typingAnimation(id, text, speed) {
  let element = document.getElementById(id);
  let textPosition = 0;
  element.textContent = "";
  
  writingFunc();
  
  function writingFunc() {
    element.textContent = text.substring(0, textPosition);
    if(textPosition++ !== text.length) {
      setTimeout(writingFunc, speed);
    }
  }
}

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
