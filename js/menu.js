//animated headers
[...document.querySelectorAll("section h1")].forEach((header) => {
  header.style.display = "inline-block";
  header.addEventListener("mouseenter", () => {
    header.classList.add("snap", "animated-longer");
  });
  header.addEventListener("mouseout", () => {
    header.classList.remove("snap", "animated-longer");
  });
});

//responsive menu
const hamburger = document.querySelector(".menu-icon .menu-icon__cheeckbox");
const menu = document.querySelector("aside#top-drawer");
function clickAway(e) {
  if (![...e.target.classList].includes("menu-link")) {
    handleClose();
  }
}

const handleOpen = () => {
  hamburger.checked = true;
  menu.classList.remove("top-drawer");
  menu.classList.add("animated-menu");
  setTimeout(() => {
    window.addEventListener("click", clickAway, 1);
  });
};

const handleClose = () => {
  menu.classList.remove("animated-menu");
  menu.classList.add("top-drawer");
  hamburger.checked = false;
  setTimeout(() => {
    window.removeEventListener("click", clickAway, 1);
  });
};

hamburger.addEventListener("click", (e) => {
  e.target.checked ? handleOpen() : handleClose();
});

const menuLinks = document.querySelectorAll("nav aside a");
menuLinks.forEach((link) => link.addEventListener("click", handleClose));

//scroll effects
const logo = document.querySelector("#logo");
const navLinks = document.querySelectorAll("#nav-links a");

function handleScroll() {
  if (window.scrollY >= 200 && !logo.classList.contains("scrolled")) {
    navLinks.forEach((link) => link.classList.add("shrunk"));
    logo.classList.add("scrolled");
    setTimeout(() => {
      logo.setAttribute("src", "./assets/simple-logo.png");
    }, 400);
  }
  if (window.scrollY < 200 && logo.classList.contains("scrolled")) {
    navLinks.forEach((link) => link.classList.remove("shrunk"));
    logo.classList.remove("scrolled");
    logo.setAttribute("src", "./assets/logo.png");
  }
}
window.addEventListener("scroll", handleScroll);
