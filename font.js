(function () {
  const html = document.documentElement;
  let size = 16;
  const popup = document.getElementById('font-popup');
  const toggle = document.getElementById('font-toggle');
  const inc = document.getElementById('font-increase');
  const dec = document.getElementById('font-decrease');

  function apply() {
    html.style.setProperty('--font-size', size + 'px');
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

  toggle.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  apply();
})();

