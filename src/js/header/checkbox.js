window.changeTheme = function (isChecked) {
  if (isChecked) {
    document.body.setAttribute('dark', '');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.removeAttribute('dark');
    localStorage.setItem('theme', 'light');
  }
};

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.setAttribute('dark', '');
    document.querySelector('#highload1').checked = true;
  } else {
    document.body.removeAttribute('dark');
    document.querySelector('#highload1').checked = false;
  }
}

applySavedTheme();

const svg = document.querySelector('.header__authenticarot-button-in-svg');
const modal = document.querySelector('.js-modal');

svg.addEventListener('click', function () {
  modal.classList.toggle('js-modal--open');
});

document.addEventListener('click', function (event) {
  if (!modal.contains(event.target) && !svg.contains(event.target)) {
    modal.classList.remove('js-modal--open');
  }
});

const btnLogEl = document.querySelector('.header__authenticator-button');

btnLogEl.addEventListener('click', handleFormAvtorisation);
const formEl = document.querySelector('.backdrop--form');

function handleFormAvtorisation() {
  formEl.classList.remove('is-hidden');
}
