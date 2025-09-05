const flowerGifs = [
  'https://surl.li/ygnlan',
  'https://surl.li/usysrj'
];

const starGifs = [
  'https://surli.cc/hthwvn',
  'https://surli.cc/mmusdx'
];

const NUM_FLOWERS = 10;
const NUM_STARS = 18;

function createBackground() {
  const bg = document.getElementById('magical-bg');
  const ww = window.innerWidth;
  const wh = window.innerHeight;

  function rand(min, max) { return Math.random() * (max - min) + min; }

  for (let i=0;i<NUM_FLOWERS;i++){
    const img = document.createElement('img');
    img.className = 'mbg-el mbg-flower';

    const src = flowerGifs.length ? flowerGifs[Math.floor(Math.random()*flowerGifs.length)] : '';
    img.src = src || '';
    img.style.left = `${rand(2, 92)}vw`;
    img.style.top  = `${rand(6, 82)}vh`;
    const s = rand(0.7, 1.2);
    img.style.width = `${64 * s}px`;
    img.style.height = `${64 * s}px`;
    img.style.animationDuration = `${rand(5.5, 8.5)}s`;
    bg.appendChild(img);
  }

  for (let i=0;i<NUM_STARS;i++){
    const img = document.createElement('img');
    img.className = 'mbg-el mbg-star';
    const src = starGifs.length ? starGifs[Math.floor(Math.random()*starGifs.length)] : '';
    img.src = src || '';
    img.style.left = `${rand(1, 97)}vw`;
    img.style.top  = `${rand(2, 88)}vh`;
    const s = rand(0.35, 0.9);
    img.style.width = `${48 * s}px`;
    img.style.height = `${48 * s}px`;
    img.style.animationDuration = `${rand(1.6, 3.2)}s`;
    img.style.animationDelay = `${rand(0,3)}s`;
    bg.appendChild(img);
  }
}

window.addEventListener('load', () => {
  createBackground();
});

const slides = Array.from(document.querySelectorAll('.slide'));
const navButtons = Array.from(document.querySelectorAll('.star-btn'));

function showSlide(index){
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);

    const img = s.querySelector('.photo');
    if (i === index) {
      if (img) {
        img.classList.add('animate');

        setTimeout(()=> img.classList.remove('animate'), 750);
      }
    } else {
      if (img) img.classList.remove('animate');
    }
  });

  navButtons.forEach((b, i) => {
    if (i === index) b.style.filter = 'drop-shadow(0 6px 12px rgba(255,120,190,0.18))';
    else b.style.filter = 'none';
  });
}

navButtons.forEach(btn => {
  const idx = Number(btn.dataset.index);
  btn.addEventListener('click', () => showSlide(idx));
});