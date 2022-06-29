(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    // openModal_mobBtn: document.querySelector('[data-modal__mob-open]'),

    closeModalBtn: document.querySelector('[data-modal-close]'),
    // closeModal_mobBtn: document.querySelector('[data-modal__mob-close]'),

    modal: document.querySelector('[data-modal]'),
    // modal_mob: document.querySelector('[data-modal]'),

  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // refs.openModal_mobBtn.addEventListener('click', toggleModal);
  // refs.closeModal_mobBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    // refs.modal_mob.classList.toggle('is-hidden');

  }
})();
