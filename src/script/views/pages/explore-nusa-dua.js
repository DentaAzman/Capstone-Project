import DestinationSource from '../../../data/destination-source';
import heroNusaDua from '../../../public/images/hero-nusadua.jpg';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreNusaDua = {
  async render() {
    return `
      <div class="hero hero-nusadua">
        <div class="hero__inner">
          <h2 class="hero__title">NUSA DUA</h2>
          <br />
          <p class="hero__tagline">
            Hotel Kelas Dunia dengan Destinasi wisata exsotis dan pantai yang
            tiada tara
          </p>
        </div>
      </div>

      <hr class="hero-divider" />
      <div id="articleList" class="article-list"></div>
    `;
  },

  async afterRender() {
    const heroNusaDuaElement = document.querySelector('.hero-nusadua');
    if (heroNusaDuaElement) {
      heroNusaDuaElement.style.backgroundImage = `url(${heroNusaDua})`;
    }

    const articles = await DestinationSource.exploreNusaDua();
    const articlesContainer = document.querySelector('#articleList');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleTemplate(article);
    });
  },
};

export default ExploreNusaDua;
