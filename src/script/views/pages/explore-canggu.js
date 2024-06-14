import DestinationSource from '../../../data/destination-source';
import heroCanggu from '../../../public/images/hero-canggu.png';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreCanggu = {
  async render() {
    return `
      <div class="hero hero-canggu">
        <div class="hero__inner">
          <h2 class="hero__title">CANGGU</h2>
          <br />
          <p class="hero__tagline">
            Cakrawala yang indah dengan pemandangan laut serta matahari terbenam
          </p>
        </div>
      </div>

      <hr class="hero-divider" />
      <div id="articleList"></div>
    `;
  },

  async afterRender() {
    const heroCangguElement = document.querySelector('.hero-canggu');
    if (heroCangguElement) {
      heroCangguElement.style.backgroundImage = `url(${heroCanggu})`;
    }

    const articles = await DestinationSource.exploreCanggu();
    const articlesContainer = document.querySelector('#articleList');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleTemplate(article);
    });
  },
};

export default ExploreCanggu;
