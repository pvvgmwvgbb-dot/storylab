(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  let index = 0;

  const page = document.createElement('div');
  page.className = 'footer';
  document.body.appendChild(page);

  const help = document.createElement('div');
  help.className = 'help';
  help.textContent = '← → / Space / Click · F = Fullscreen';
  document.body.appendChild(help);

  function show(next) {
    index = Math.max(0, Math.min(slides.length - 1, next));
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    page.textContent = `${index + 1} / ${slides.length}`;
    const hash = `#${index + 1}`;
    if (location.hash !== hash) history.replaceState(null, '', hash);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === ' ') show(index + 1);
    if (event.key === 'ArrowLeft') show(index - 1);
    if (event.key.toLowerCase() === 'f') toggleFullscreen();
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('a, button')) return;
    show(index + 1);
  });

  const initial = Number(location.hash.replace('#', ''));
  show(Number.isFinite(initial) && initial > 0 ? initial - 1 : 0);
})();
