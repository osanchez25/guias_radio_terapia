(function () {
  const btn = document.querySelector('.back-arrow');
  if (btn) {
    btn.addEventListener('click', () => window.history.back());
  }
})();
