(() => {
  const refs = {
    openmobMenuBtn: document.querySelector('[data-buyNow-mobile-open]'),

    closemobMenuBtn: document.querySelector('[data-buyNow-mobile-close]'),

    buyNowMobile: document.querySelector('[data-modal]'),
  };

  refs.openmobMenuBtn.addEventListener('click', toggleModal);
  refs.closemobMenuBtn.addEventListener('click', toggleModal);

 
  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.buyNowMobile.classList.toggle('is-hidden');
  }
})();
