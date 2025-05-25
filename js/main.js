// main.js
document.addEventListener('DOMContentLoaded', () => {
  // adicionar classe de animação às seções
  document.querySelectorAll('section, header, .navbar').forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200 * i);
  });
});