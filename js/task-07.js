const inputVolume = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')
inputVolume.addEventListener('input', onInputVolume)

spanText.style.fontSize = inputVolume.value + 'px'
 
function onInputVolume(evt) {
    spanText.style.fontSize = inputVolume.value + 'px'
    // spanText.style.fontSize = `${ evt.currentTarget.value + 'px' }`
}
