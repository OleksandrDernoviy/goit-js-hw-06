const inputEl = document.querySelector('#validation-input')
const dataLengthInput = inputEl.dataset.length
inputEl.addEventListener('blur', onBlur)

function onBlur(evt) {
    const inputText = (evt.currentTarget.value)
    console.log(evt.currentTarget.value.length)
    if (Number(inputText.trim().length) === Number(dataLengthInput)) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')         
    }
    else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')   
    }
}




