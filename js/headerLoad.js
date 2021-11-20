const [main, menu1, menu2] = [...document.querySelectorAll("canvas")];
menu1.style.display = "none";
menu2.style.display = "none";
//for typing effect
function animatedHeader() {
  const nameContainer = document.querySelector("#name-container");
  const spans = "Ryan Tucker".split("").map((letter) => {
    if (!letter) return `<span class='initial'>&nbsp;</span>`;
    return `<p class='main-name-letter name initial'>${letter}</p>`;
  });
  for (let i = 0; i < spans.length; i++) {
    setTimeout(() => {
      nameContainer.innerHTML += spans[i];
    }, 100 * i);
  }
  setTimeout(() => {
    const letters = [...document.querySelectorAll(".main-name-letter")];
    letters.forEach((letter) => {
      nameContainer.classList.remove("initial");
      nameContainer.classList.add("loaded");
      letter.addEventListener("mouseenter", (e) => {
        letter.classList.remove("initial");
        letter.style.textShadow = "none";
        if (
          letters.every((letter) => ![...letter.classList].includes("initial"))
        ) {
          setTimeout(() => {
            letters.forEach((letter) => nameContainer.removeChild(letter));
            animatedHeader();
          }, 1000);
        }
      });
    });
  }, 1150);
}
animatedHeader();
