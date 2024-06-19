import DestinationSource from '../../../data/destination-source';
import heroNusaDua from '../../../public/images/hero-nusadua.jpg';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreNusaDua = {
  async render() {
    return `
      <div class="hero hero-nusadua" data-aos="fade-up">
        <div class="hero__inner" data-aos="fade-down" data-aos-delay="300">
          <h2 class="hero__title" tabindex="0">NUSA DUA</h2>
          <br />
          <p class="hero__tagline" tabindex="0">
            Hotel Kelas Dunia dengan Destinasi wisata exsotis dan pantai yang
            tiada tara
          </p>
        </div>
      </div>

      <hr class="hero-divider" data-aos="fade-up" />
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

export default ExploreNusaDua;
