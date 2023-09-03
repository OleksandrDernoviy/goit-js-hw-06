
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('body')
const nameSpanColor = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')
changeColorBtn.addEventListener('click', randomColor)

function randomColor() {
  nameSpanColor.textContent = bodyColor.style.backgroundColor = getRandomHexColor()
    
}
