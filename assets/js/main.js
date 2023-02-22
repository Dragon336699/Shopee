// Form đăng ký
var signUp = document.querySelector('.header__navbar-item--sign-up')
var signIn = document.querySelector('.header__navbar-item--sign-in');
var auth_form = document.querySelector('.auth-form')
var modal = document.querySelector('.modal')
var register_form = document.querySelector('.register__form')
var login_form = document.querySelector('.login__form')
signUp.onclick = function () { 
    modal.style.display = 'flex';
    register_form.style.display = 'block';
    login_form.style.display = 'none';
}
var signUp_back = document.querySelectorAll('.btn--auther-back')

signIn.onclick = function () { 
    modal.style.display = 'flex';
    register_form.style.display = 'none'
    login_form.style.display = 'block';
}

for (var btn_back in signUp_back){
    signUp_back.onclick = function(){
        signUp_back[btn_back].style.display = 'none';
    }
}
