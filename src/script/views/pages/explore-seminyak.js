import DestinationSource from '../../../data/destination-source';
import heroSeminyak from '../../../public/images/hero-seminyak.png';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreSeminyak = {
  async render() {
    return `
      <div class="hero hero-seminyak">
        <div class="hero__inner">
          <h2 class="hero__title">SEMINYAK</h2>
          <br />
          <p class="hero__tagline">
            Cakrawala yang indah dengan pemandangan laut serta matahari terbenam
          </p>
        </div>
      </div>

      <hr class="hero-divider" />
      <div id="articleList" class="article-list"></div>
    `;
  },

  async afterRender() {
    const heroSeminyakElement = document.querySelector('.hero-seminyak');
    if (heroSeminyakElement) {
      heroSeminyakElement.style.backgroundImage = `url(${heroSeminyak})`;
    }

    const articles = await DestinationSource.exploreSeminyak();
    const articlesContainer = document.querySelector('#articleList');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleTemplate(article);
    });
  },
};

export default ExploreSeminyak;
