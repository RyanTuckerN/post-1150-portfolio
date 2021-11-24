const words = document.querySelectorAll("#tech p");
const skills = [...document.querySelectorAll('#tech-mobile li span')]
const header = document.querySelector('header#masthead')
const about = document.querySelector('section#about')
const techBubbles = document.querySelector('#tech')

function randInt(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) ) + min;
}

for (let i = 0; i < words.length; i++){
  let newX = randInt(0, 100);
  let newY = randInt(0, 100);
  
  let topValue = "calc("+ newY.toString() + "% - 1ex)";
  let leftValue = `calc(${newX.toString()}% - ${words[i].clientWidth}px )`;
  
  words[i].style.top = topValue;
  words[i].style.left = leftValue;
}

setInterval(function updateWordsPositions(){
  for (let i = 0; i < words.length; i++){
    if (randInt(0, 25) < 7){
      continue;
    }
    
    let newX = randInt(0, 100);
    let newY = randInt(0, 100);
    
    let topValue = "calc("+ newY.toString() + "% - 1ex)";
    let leftValue = `calc(${newX.toString()}%`;
    
    words[i].style.top = topValue;
    words[i].style.left = leftValue;
  }
}, 8000);

skills.forEach(skill=>{
  
  const skillBubble = document.querySelector(`[data-tech*="${skill.innerHTML}"]`)
  skill.addEventListener('mouseover', ()=>{
    skillBubble.classList.add('active-bubble')
    skill.classList.add('active')
  })
  skill.addEventListener('mouseout', ()=>{
    skillBubble.classList.remove('active-bubble')
    skill.classList.remove('active')
  })
  
})
techBubbles.style.top = `${about.offsetHeight + header.offsetHeight + 110}px`
window.addEventListener('resize', ()=>{
techBubbles.style.top = `${about.offsetHeight + header.offsetHeight + 110}px`
})