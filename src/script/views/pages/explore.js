import group1 from '../../../public/images/Group 1.png';
import group2 from '../../../public/images/Group 2.png';
import group3 from '../../../public/images/Group 3.png';
import group4 from '../../../public/images/Group 4.png';
import group5 from '../../../public/images/Group 5.png';
import group6 from '../../../public/images/Group 6.png';

const explore = {
  async render() {
    return `
      <div class="explore-container" data-aos="fade-in">
        <div class="heading" data-aos="fade-down">
          <h2 class="heading__title" tabindex="0">Explore Bali</h2>
          <p class="heading__text" tabindex="0">
            Temukan Tempat Wisata Bali yang Sedang Populer!
          </p>
        </div>

        <br />

        <div class="explore-card-container">
          <div class="explore-card" data-aos="fade-up">
            <a href="#/explore-canggu">
              <img src="${group1}" alt="gambar canggu" />
            </a>
          </div>
          <div class="explore-card" data-aos="fade-up" data-aos-delay="100">
            <a href="#/explore-nusadua">
              <img src="${group2}" alt="gambar nusa dua" />
            </a>
          </div>
          <div class="explore-card" data-aos="fade-up" data-aos-delay="200">
            <a href="#/explore-seminyak">
              <img src="${group3}" alt="gambar seminyak" />
            </a>
          </div>
          <div class="explore-card" data-aos="fade-up" data-aos-delay="300">
            <a href="#/explore-ubud">
              <img src="${group4}" alt="gambar ubud" />
            </a>
          </div>
          <div class="explore-card" data-aos="fade-up" data-aos-delay="400">
            <a href="#/explore-kuta">
              <img src="${group5}" alt="gambar kuta" />
            </a>
          </div>
          <div class="explore-card" data-aos="fade-up" data-aos-delay="500">
            <a href="#/explore-kintamani">
              <img src="${group6}" alt="gambar kintamani" />
            </a>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    AOS.init({
      once: true,
      duration: 1000,
    });
    AOS.refresh();
  },
};

export default explore;
