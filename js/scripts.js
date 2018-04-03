var link = document.querySelector('.login-link');
var popup = document.querySelector('.modal-login');
var close = document.querySelector('.modal-close');
var form = popup.querySelector('form');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');


link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  login.focus();
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    alert('Нужно ввести логин и пароль');
    } 
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
    }
  }
});

