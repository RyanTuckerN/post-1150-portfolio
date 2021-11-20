const [main, menu1, menu2] = [...document.querySelectorAll("canvas")];
menu1.style.display = "none";
menu2.style.display = "none";
//for typing effect
let letters;
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
  document.querySelectorAll('.main-name-letter').forEach((letter=>{
    nameContainer.classList.remove(["initial"]);
    nameContainer.classList.add("loaded");
    letter.classList.remove(["initial"]);
    
    letter.classList.add("loaded");
  }))
}, 1150);
