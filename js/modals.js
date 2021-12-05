const modals = document.querySelectorAll('.modal')
const backdrop = document.querySelector('#backdrop')
const imageLinks = document.querySelectorAll(".project-box")

imageLinks.forEach((img, i) => {
  img.addEventListener('click', () => {
    modals[i].classList.add('active')
    modals[i].style.zIndex = 205;
    backdrop.classList.add('parent-disable')
    const closeButton = document.querySelectorAll(".modal button")
    closeButton.forEach(btn => {
      console.log(btn)
      btn.style.cursor = 'pointer'
      btn.addEventListener('click', () => {
        modals[i].style.zIndex = 0;
        modals[i].classList.remove('active')
        backdrop.classList.remove('parent-disable')
      })
    })
  })
})