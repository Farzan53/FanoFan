var vdh = document.querySelector('.vdh');
var registerLink = document.querySelector('.register-link');
var loginLink = document.querySelector('.login-link')


registerLink.onclick = () => {
    vdh.classList.add('active');
}

loginLink.onclick = () => {
    vdh.classList.remove('active');
}