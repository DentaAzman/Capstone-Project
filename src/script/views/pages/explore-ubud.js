import DestinationSource from '../../../data/destination-source';
import heroUbud from '../../../public/images/hero-ubud.jpg';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreUbud = {
  async render() {
    return `
      <div class="hero hero-ubud">
        <div class="hero__inner">
          <h2 class="hero__title">UBUD</h2>
          <br />
          <p class="hero__tagline">
             Surga Tersembunyi di Tengah indahnya sawah dan tersaring Bali
          </p>
        </div>
      </div>

      <hr class="hero-divider" />
      <div id="articleList" class="article-list"></div>
    `;
  },

  async afterRender() {
    const heroUbudElement = document.querySelector('.hero-ubud');
    if (heroUbudElement) {
      heroUbudElement.style.backgroundImage = `url(${heroUbud})`;
    }

    const articles = await DestinationSource.exploreUbud();
    const articlesContainer = document.querySelector('#articleList');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleTemplate(article);
    });
  },
};

export default ExploreUbud;
