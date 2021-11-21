const [main, menu1, menu2] = [...document.querySelectorAll("canvas")];
menu1.style.display = "none";
menu2.style.display = "none";
//for typing effect
function animatedHeader(i) {
  i++
  const nameContainer = document.querySelector("#name-container");
  nameContainer.innerHTML=''
  const spans = "Ryan Tucker".split("").map((letter) => {
    if (!letter) return `<span class='main-name-letter'>&nbsp;</span>`;
    return `<p class='main-name-letter name initial effect'>${letter}</p>`;
  });
  for (let i = 0; i < spans.length; i++) {
    setTimeout(() => {
      nameContainer.innerHTML += spans[i];
    }, 100 * i);
  }
  setTimeout(() => {
    const letters = [...document.querySelectorAll(".main-name-letter")];
    letters.splice(4, 1);
    letters.forEach((letter) => {
      nameContainer.classList.remove("initial");
      nameContainer.classList.add("loaded");
      const handleEvent = () => {
        letter.classList.remove("initial");
        letter.style.textShadow = "none";
        if (
          letters.every((letter) => ![...letter.classList].includes("initial"))
        ) {
          setTimeout(() => {
            nameContainer.innerHTML = `<p class='main-name-letter name initial effect'>${i}x... again?</p>`;
            setTimeout(()=>animatedHeader(i), 2500)
          }, 1000);
        }
      };
      letter.addEventListener("click", handleEvent);
    });
  }, 1150);
}
animatedHeader(0);
