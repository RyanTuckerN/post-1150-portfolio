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

const handleOpen = () => {
  menu.classList.remove("top-drawer");
  menu.classList.add("animated-menu");
}

const handleClose = () => {
  menu.classList.remove("animated-menu");
  menu.classList.add("top-drawer");
  hamburger.checked = false
}

hamburger.addEventListener("click", (e) => {
  console.log(e.target)
  e.target.checked ? handleOpen() : handleClose()
});

const menuLinks = document.querySelectorAll('nav aside a')
menuLinks.forEach(link=>link.addEventListener('click', handleClose))
