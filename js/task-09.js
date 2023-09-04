
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('body')
const nameSpanColor = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')
  changeColorBtn.addEventListener('click', getRandomColor)

function getRandomColor() {
const randomColor = getRandomHexColor()
  nameSpanColor.textContent = randomColor
  bodyColor.style.backgroundColor = randomColor    
}
