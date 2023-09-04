const inputEl = document.querySelector('#name-input')
const titleEl = document.querySelector('#name-output')
const defaultTitleElText = titleEl.textContent

inputEl.addEventListener('input', onInput)
function onInput(evt){
const inputText = evt.currentTarget.value.trim()
    if (inputText.length === 0) {
    titleEl.textContent = defaultTitleElText
    } else titleEl.textContent = inputText
}
