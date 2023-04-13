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

var unLike = document.querySelectorAll('.home-product-item-like-icon-empty');
var liked = document.querySelectorAll('.home-product-item-like-icon-fill');
for (let like in liked){
    liked[like].onclick = function (event) {
        unLike[like].style.display = 'block';
        liked[like].style.display = 'none';
        event.stopPropagation();
        event.preventDefault ();
    }
}

for (let like in unLike){
    unLike[like].onclick = function (event){
        liked[like].style.display = 'block';
        unLike[like].style.display = 'none';
        event.stopPropagation();
        event.preventDefault ();
    }
}

var product = document.querySelectorAll('.home-product-item');
product.onclick = function (event) {
  }

var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// Check box search on mobile
var headerIcon = document.querySelector(".header-icon-mobile");
var headerCheckbox = $(".header__search-checkbox")
headerIcon.onclick = function(){
    if (headerCheckbox.checked === true){
        headerCheckbox.checked[0] = false
    }
    else {
        headerCheckbox.checked[0] = true;
    }
}
