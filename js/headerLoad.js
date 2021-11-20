const [main, menu1, menu2] = [...document.querySelectorAll("canvas")];
menu1.style.display = "none";
menu2.style.display = "none";
//for typing effect
let letters;
const nameContainer = document.querySelector("#name-container");
const spans = "Ryan Tucker".split("").map((letter) => {
  if (!letter) return `<span>&nbsp;</span>`;
  return `<p class='main-name-letter name'>${letter}</p>`;
});
for (let i = 0; i < spans.length; i++) {
  setTimeout(() => {
    nameContainer.innerHTML += spans[i];
  }, 100 * i);
}
setTimeout(() => {
  nameContainer.classList.remove(["initial"]);
  nameContainer.classList.add("loaded");
}, 1150);
