const hackerMan = document.querySelector(".hacker-man");

function animateHackerMan() {
  hackerMan.classList.add("hacker-man-animate");
  setTimeout(() => {
    hackerMan.classList.remove("hacker-man-animate");
  }, 1000);
}

setInterval(animateHackerMan, 2000);