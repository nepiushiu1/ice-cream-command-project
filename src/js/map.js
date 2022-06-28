(() => {
  const refs = {
    openMapBtn: document.querySelector("[data-map-open]"),
    closeMapBtn: document.querySelector("[data-map-close]"),
    map: document.querySelector("[data-map]"),
  };

  refs.openMapBtn.addEventListener("click", toggleMap);
  refs.closeMapBtn.addEventListener("click", toggleMap);

  function toggleMap() {
    document.body.classList.toggle("map-open");
    refs.map.classList.toggle("is-invisible");
  }
})();
