function randInt(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) ) + min;
}

let words = document.querySelectorAll("#tech p");

for (let i = 0; i < words.length; i++){
  let newX = randInt(0, 100);
  let newY = randInt(0, 100);

  let topValue = "calc("+ newY.toString() + "% - 1ex)";
  let leftValue = newX.toString() + "%";

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
    let leftValue = newX.toString() + "%";
    
    words[i].style.top = topValue;
    words[i].style.left = leftValue;
  }
}, 8000);

const skills = [...document.querySelectorAll('#tech-mobile li span')]
console.log(skills)
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