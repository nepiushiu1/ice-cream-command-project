(() => {
  const refs = {
    openmobMenuBtn: document.querySelector('[buyNow-mobile-open]'),

    closemobMenuBtn: document.querySelector('[buyNow-mobile-close]'),

    buyNowMobile: document.querySelector('[data-modal]'),
  };

  refs.openmobMenuBtn.addEventListener('click', toggleModal);
  refs.closemobMenuBtn.addEventListener('click', toggleModal);

 
  function toggleModal() {
    document.body.classList.toggle("buyNow-Mobile-open");
    refs.buyNowMobile.classList.toggle('is-hidden');
  }
})();
