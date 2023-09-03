let counterValue = 0
const spanValue = document.querySelector('#value')
const btnDecrement = document.querySelector(`[data-action='decrement']`)
const btnIncrement = document.querySelector(`[data-action='increment']`)

btnDecrement.addEventListener('click', onClick)
function onClick() {
    counterValue -= 1
    spanValue.textContent = counterValue
   
}
btnIncrement.addEventListener('click', inClick)
function inClick() {
    counterValue += 1
    spanValue.textContent = counterValue
}
