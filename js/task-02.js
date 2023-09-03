const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients')

const itemMapEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement(`li`)
  itemEl.classList.add('item-js')
  itemEl.textContent = ingredient
  return itemEl
})

listEl.append(...itemMapEl)
