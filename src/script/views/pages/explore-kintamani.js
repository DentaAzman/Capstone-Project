import DestinationSource from '../../../data/destination-source';
import heroKintamani from '../../../public/images/hero-kintamani.png';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreKintamani = {
  async render() {
    return `
      <div class="hero hero-kintamani" data-aos="fade-up">
        <div class="hero__inner" data-aos="fade-down" data-aos-delay="300">
          <h2 class="hero__title">KINTAMANI</h2>
          <br />
          <p class="hero__tagline">
            Menikmati suasana Gunung Batur dan Danau Batur dengan Kopi Kintamani
            di Coffee Shop terbaik.
          </p>
        </div>
      </div>

      <hr class="hero-divider" data-aos="fade-up"/>
      <div id="articleList" class="article-list"></div>
    `;
  },

  async afterRender() {
    const heroKintamaniElement = document.querySelector('.hero-kintamani');
    if (heroKintamaniElement) {
      heroKintamaniElement.style.backgroundImage = `url(${heroKintamani})`;
    }

    const articles = await DestinationSource.exploreKintamani();
    const articlesContainer = document.querySelector('#articleList');
    articles.forEach((article, index) => {
      const articleElement = document.createElement('div');
      articleElement.innerHTML = createArticleTemplate(article);
      articleElement.setAttribute('data-aos', 'fade-up');
      articleElement.setAttribute('data-aos-delay', `${index * 100}`);
      articlesContainer.appendChild(articleElement);
    });

    AOS.init({
      once: true,
      duration: 1000,
    });
    AOS.refresh();
  },
};

export default ExploreKintamani;
