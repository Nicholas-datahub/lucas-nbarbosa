CustomEase.create('cubic', '0.83,0,0.17,1');
let animating = false;
function splitSpans(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.innerHTML = el.textContent.split('').map(c => `<span>${c===' ' ? '&nbsp;': c}</span>`).join('');
  });
}
function initSlider() {
  const cards = Array.from(document.querySelectorAll('.slider .card'));
  gsap.set(cards, { zIndex: i => cards.length - i });
  gsap.to(cards, {
    y: (i) => -15 + 15 * i + '%',
    z: (i) => 15 * i,
    duration: 1,
    ease: 'cubic',
    stagger: -0.1
  });
  gsap.set('h1 span', { y: -200 });
  gsap.set('.slider .card:last-child h1 span', { y: 0 });
}
document.addEventListener('DOMContentLoaded', () => {
  splitSpans('.copy h1');
  initSlider();
  document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelector('.slider').addEventListener('click', () => {
    if (animating) return;
    animating = true;
    const slider = document.querySelector('.slider');
    const cards = Array.from(slider.querySelectorAll('.card'));
    const last = cards.pop();
    const next = cards[cards.length - 1];

    gsap.to(last.querySelectorAll('h1 span'), { y: 200, duration: 0.75, ease: 'cubic' });
    gsap.to(last, {
      y: '150%', duration: 0.75, ease: 'cubic', onComplete: () => {
        slider.prepend(last);
        initSlider();
        animating = false;
      }
    });
    gsap.to(next.querySelectorAll('h1 span'), { y: 0, duration: 1, ease: 'cubic', stagger: 0.05 });
  });
});
