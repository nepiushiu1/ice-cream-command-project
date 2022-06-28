(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-product-open]'),
    closeModalBtn: document.querySelector('[data-product-close]'),
    modalcontact: document.querySelector('[data-product]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalcontact.classList.toggle('is-hidden');
  }
})();
