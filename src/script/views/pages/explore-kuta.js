import DestinationSource from '../../../data/destination-source';
import heroKuta from '../../../public/images/hero-kuta.png';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreKuta = {
  async render() {
    return `
      <div class="hero hero-kuta">
        <div class="hero__inner">
          <h2 class="hero__title">KUTA</h2>
          <br />
          <p class="hero__tagline">
            Salah satu tujuan utama Tourist, dikenal dengan susana nightclub dan surfing di laut lepas Samudra Hindia.
          </p>
        </div>
      </div>

      <hr class="hero-divider" />
      <div id="articleList" class="article-list"></div>
    `;
  },

  async afterRender() {
    const heroKutaElement = document.querySelector('.hero-kuta');
    if (heroKutaElement) {
      heroKutaElement.style.backgroundImage = `url(${heroKuta})`;
    }

    const articles = await DestinationSource.exploreKuta();
    const articlesContainer = document.querySelector('#articleList');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleTemplate(article);
    });
  },
};

export default ExploreKuta;
