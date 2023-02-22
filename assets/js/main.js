// Form đăng ký
var signUp = document.querySelector('.header__navbar-item--sign-up')
var signUp_form = document.querySelector('.auth-form')
var modal = document.querySelector('.modal')
signUp.onclick = function () { 
    modal.style.display = 'flex';
    signUp_form.style.display = 'block';
}