import DestinationSource from '../../../data/destination-source';
import heroKuta from '../../../public/images/hero-kuta.png';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreKuta = {
  async render() {
    return `
      <div class="hero hero-kuta" data-aos="fade-up">
        <div class="hero__inner" data-aos="fade-down" data-aos-delay="300">
          <h2 class="hero__title">KUTA</h2>
          <br />
          <p class="hero__tagline">
            Salah satu tujuan utama Tourist, dikenal dengan susana nightclub dan surfing di laut lepas Samudra Hindia.
          </p>
        </div>
      </div>

      <hr class="hero-divider" data-aos="fade-up"/>
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

export default ExploreKuta;
