
const formEl = document.querySelector('.login-form')
formEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    const formElements = evt.currentTarget       
    const email = formElements.elements.email.value
    const password = formElements.elements.password.value 
    if (email === ''|| password === '') {
      return alert('Всі поля мають бути заповнені !')
    } 
    const formData = { email, password }
    console.log(formData)
    formElements.reset()
}

 

// if (email.trim().length === 0|| password.trim().length === 0) {
//         alert('Всі поля мають бути заповнені !')
//     } 