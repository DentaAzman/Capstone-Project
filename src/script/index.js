import './components/main-components.js';
import 'regenerator-runtime';
import '../styles/main-bootstrap.css';
import '../styles/main.css';
import '../styles/responsive.css';
import './bootstrap.bundle.min.js';

import heroImage from '../public/images/hero-image.jpg';
import ellipse2 from '../public/images/Ellipse 2.png';
import ellipse4 from '../public/images/Ellipse 4.png';
import ellipse1 from '../public/images/Ellipse 1.png';
import ellipse5 from '../public/images/Ellipse 5.png';
import ellipse3 from '../public/images/Ellipse 3.png';
import ellipse6 from '../public/images/Ellipse 6.png';
// import App from './views/app.js';

function main() {
  document.getElementById(
    'heroImage'
  ).innerHTML = `<img src="${heroImage}" alt="Gambar Hero Pantai" />`;

  const destinationImages = document.querySelectorAll('.destination-image');
  destinationImages.forEach((img) => {
    const imgName = img.getAttribute('data-src');
    let imgSrc;
    let altText;
    switch (imgName) {
      case 'Ellipse 2.png':
        imgSrc = ellipse2;
        altText = 'Gambar Canggu & Berawa';
        break;
      case 'Ellipse 4.png':
        imgSrc = ellipse4;
        altText = 'Gambar Nusa Dua & Benoa';
        break;
      case 'Ellipse 1.png':
        imgSrc = ellipse1;
        altText = 'Gambar Seminyak & Petitenget';
        break;
      case 'Ellipse 5.png':
        imgSrc = ellipse5;
        altText = 'Gambar Kintamani';
        break;
      case 'Ellipse 3.png':
        imgSrc = ellipse3;
        altText = 'Gambar Ubud';
        break;
      case 'Ellipse 6.png':
        imgSrc = ellipse6;
        altText = 'Gambar Kuta & Tuban';
        break;
      default:
        console.error(`No image found for ${imgName}`);
        return;
    }
    img.innerHTML = `<img src="${imgSrc}" alt="${altText}" />`;
  });
}

document.addEventListener('DOMContentLoaded', main);
