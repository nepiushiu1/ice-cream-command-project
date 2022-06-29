(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-coffee-open]'),
    closeModalBtn: document.querySelector('[data-coffee-close]'),
    modalcontact: document.querySelector('[data-coffee]'),
    divcontact: document.querySelector('[data-coffee-product]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalcontact.classList.toggle('is-hidden'),
      refs.divcontact.classList.toggle('is-hidden');
  }
})();
