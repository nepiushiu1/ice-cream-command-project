(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal_header-open]"),
    closeModalBtn: document.querySelector("[data-modal_header-close]"),
    modal: document.querySelector("[data-modal_header]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal_header-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
