(function () {
  const html = document.documentElement;
  const defaultSize = 16;
  let size = parseInt(localStorage.getItem('fontSize')) || defaultSize;
  const popup = document.getElementById('font-popup');
  const toggle = document.getElementById('font-toggle');
  const inc = document.getElementById('font-increase');
  const dec = document.getElementById('font-decrease');
  const reset = document.getElementById('font-reset');
  const display = document.getElementById('font-size-display');

  function apply() {
    html.style.setProperty('--font-size', size + 'px');
    if (display) {
      display.textContent = size;
    }
    localStorage.setItem('fontSize', size);
  }

  inc.addEventListener('click', () => {
    size += 1;
    apply();
  });

  dec.addEventListener('click', () => {
    if (size > 10) {
      size -= 1;
      apply();
    }
  });

  reset.addEventListener('click', () => {
    size = defaultSize;
    apply();
  });

  toggle.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  apply();
})();

