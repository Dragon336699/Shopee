// Form đăng ký
var signUp = document.querySelector('.header__navbar-item--sign-up')
var signIn = document.querySelector('.header__navbar-item--sign-in');
var auth_form = document.querySelector('.auth-form');
var modal = document.querySelector('.modal');
var register_form = document.querySelector('.register__form');
var login_form = document.querySelector('.login__form');
var modal__inner = document.querySelector('.modal__inner');
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

for (var btn_back of signUp_back){
    btn_back.onclick = function(){
        modal.style.display = 'none';
    }
}

// Convert between sign in and sign up
var convertToSignIn = document.querySelector('.auth-form__convert-btn-register');
var convertToSignUp = document.querySelector('.auth-form__convert-btn-login');
convertToSignIn.onclick = function () {  
    register_form.style.display = 'none'
    login_form.style.display = 'block';
}
convertToSignUp.onclick = function () {  
    register_form.style.display = 'block';
    login_form.style.display = 'none';
}

var filterClicked;
var buttonFilters = document.querySelectorAll('.btn-home-filter');
for (var buttonFilter of buttonFilters){
    buttonFilter.onclick = function (event){
        filterClicked = event.target;
        for (buttonFilter of buttonFilters){
            buttonFilter.classList.remove ('btn--active')
        }
        filterClicked.classList.add('btn--active')
    }
}
