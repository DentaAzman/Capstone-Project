import DestinationSource from '../../../data/destination-source';
import heroKintamani from '../../../public/images/hero-kintamani.png';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreKintamani = {
  async render() {
    return `
      <div class="hero hero-kintamani">
        <div class="hero__inner">
          <h2 class="hero__title">KINTAMANI</h2>
          <br />
          <p class="hero__tagline">
            Menikmati suasana Gunung Batur dan Danau Batur dengan Kopi Kintamani
            di Coffee Shop terbaik.
          </p>
        </div>
      </div>

      <hr class="hero-divider" />
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
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleTemplate(article);
    });
  },
};

export default ExploreKintamani;
