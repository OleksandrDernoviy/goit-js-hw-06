const inputVolume = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')
inputVolume.addEventListener('input', onInputVolume)

function onInputVolume(evt) {
    spanText.style.fontSize = `${Number(evt.currentTarget.value) + 'px'}`    
}


