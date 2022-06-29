(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-cream-open]'),
    closeModalBtn: document.querySelector('[data-cream-close]'),
    modalcontact: document.querySelector('[data-cream]'),
    divcontact: document.querySelector('[data-cream-product]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalcontact.classList.toggle('is-hidden'),
      refs.divcontact.classList.toggle('is-hidden');
  }
})();
