(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-milkshakes-open]'),
    closeModalBtn: document.querySelector('[data-milkshakes-close]'),
    modalcontact: document.querySelector('[data-milkshakes]'),
    divcontact: document.querySelector('[data-milkshakes-product]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalcontact.classList.toggle('is-hidden'),
      refs.divcontact.classList.toggle('is-hidden');
  }
})();
