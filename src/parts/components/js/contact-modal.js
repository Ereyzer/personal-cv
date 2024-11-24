(() => {
  const button = document.getElementById('menu-button');
  const menu = document.getElementsByClassName('modal-menu-overlay');
  button.addEventListener('click', () => {
    menu[0].classList.toggle('is-open');
  });
})();
