const items = document.querySelectorAll('.item')
const itemsSum = items.length
console.log(`Number of categories: ${itemsSum}`)

items.forEach((item) => {
console.log(`Category: ${item.firstElementChild.textContent}`);
console.log(`Elements: ${item.lastElementChild.children.length}`);
});