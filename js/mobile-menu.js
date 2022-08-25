(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open1]'),
    closeMenuBtn: document.querySelector('[data-menu-close1]'),
    menu: document.querySelector('[data-menu1]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();