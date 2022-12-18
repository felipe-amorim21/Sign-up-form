const pwd = document.getElementById('pwd')
const cpwd = document.getElementById('cpwd')
const pwderror = document.getElementsByClassName('pwderror')

cpwd.addEventListener('input', () => {
    if (pwd.value != cpwd.value){
        pwd.classList.add('error')
        cpwd.classList.add('error')
        pwderror[0].textContent = "Passwords do not match"
        pwderror[1].textContent = "Passwords do not match"
    }
    else {
        pwd.classList.remove('error')
        cpwd.classList.remove('error')
        pwderror[0].textContent = ""
        pwderror[1].textContent = ""
    }
})
