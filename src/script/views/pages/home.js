import heroImage from '../../../public/images/hero-image.jpg';
import ellipse2 from '../../../public/images/Ellipse 2.png';
import ellipse4 from '../../../public/images/Ellipse 4.png';
import ellipse1 from '../../../public/images/Ellipse 1.png';
import ellipse5 from '../../../public/images/Ellipse 5.png';
import ellipse3 from '../../../public/images/Ellipse 3.png';
import ellipse6 from '../../../public/images/Ellipse 6.png';

const Home = {
  async render() {
    return `
      <div class="hero-container">
        <h1 data-aos="fade-up">6 Destinasi Instagrammable di Bali yang Harus Anda Kunjungi</h1>
        <p data-aos="fade-up" data-aos-delay="100">Mulai Liburanmu Dari Sini!</p>
        <div class="d-grid gap-2 col-3 mx-auto" data-aos="fade-up" data-aos-delay="200">
          <a href="#/explore">
            <button class="btn btn-primary" type="button">Explore!</button>
          </a>
        </div>
        <div id="heroImage" data-aos="fade-up" data-aos-delay="300"></div>
        <hr class="hero-divider" />
      </div>

      <div class="destination-list">
        <div class="destination-list__container" data-aos="fade-up" data-aos-delay="500">
          <div class="destination-image" data-src="Ellipse 2.png"></div>
          <div class="destination-list__info">
            <h2 class="destination-list__name">
              <a href="#/explore-canggu">Canggu & Berawa</a>
            </h2>
            <p class="destination-list__body">
              The best mix of Everything Bali has to offer - surfing, party,
              yoga, restaurants & cafes
            </p>
          </div>
        </div>

        <div class="destination-list__container" data-aos="fade-up" data-aos-delay="600">
          <div class="destination-image" data-src="Ellipse 4.png"></div>
          <div class="destination-list__info">
            <h2 class="destination-list__name">
              <a href="#/explore-nusadua">Nusa Dua & Benoa</a>
            </h2>
            <p class="destination-list__body">
              International 5star Resorts and golf courses for the luxury
              traveler
            </p>
          </div>
        </div>

        <div class="destination-list__container" data-aos="fade-up" data-aos-delay="700">
          <div class="destination-image" data-src="Ellipse 1.png"></div>
          <div class="destination-list__info">
            <h2 class="destination-list__name">
              <a href="#/explore-seminyak">Seminyak & Petitenget</a>
            </h2>
            <p class="destination-list__body">
              Luxury villas, great hotels, beach & surf, nightlife, amazing
              shopping & food
            </p>
          </div>
        </div>

        <div class="destination-list__container" data-aos="fade-up" data-aos-delay="800">
          <div class="destination-image" data-src="Ellipse 5.png"></div>
          <div class="destination-list__info">
            <h2 class="destination-list__name">
              <a href="#/explore-kintamani">Kintamani</a>
            </h2>
            <p class="destination-list__body">
              Fancy Cafe With the best view of mount Batur
            </p>
          </div>
        </div>

        <div class="destination-list__container" data-aos="fade-up" data-aos-delay="900">
          <div class="destination-image" data-src="Ellipse 3.png"></div>
          <div class="destination-list__info">
            <h2 class="destination-list__name">
              <a href="#/explore-ubud">Ubud</a>
            </h2>
            <p class="destination-list__body">
              Bali’s cultural center. Blend of art, spirituality, lifestyle, &
              culinary delights.
            </p>
          </div>
        </div>

        <div class="destination-list__container" data-aos="fade-up" data-aos-delay="1000"> 
          <div class="destination-image" data-src="Ellipse 6.png"></div>
          <div class="destination-list__info">
            <h2 class="destination-list__name">
              <a href="#/explore-kuta">Kuta & Tuban</a>
            </h2>
            <p class="destination-list__body">
              Bali’s party place for the young and wild. Bars, Shopping, Beach
              Life & Party
            </p>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
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

    AOS.init({
      once: true,
      duration: 1000,
    });
    AOS.refresh();
  },
};

export default Home;
