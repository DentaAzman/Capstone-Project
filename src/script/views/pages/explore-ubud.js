import DestinationSource from '../../../data/destination-source';
import heroUbud from '../../../public/images/hero-ubud.jpg';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreUbud = {
  async render() {
    return `
      <div class="hero hero-ubud" data-aos="fade-up">
        <div class="hero__inner" data-aos="fade-down" data-aos-delay="300">
          <h2 class="hero__title">UBUD</h2>
          <br />
          <p class="hero__tagline">
             Surga Tersembunyi di Tengah indahnya sawah dan tersaring Bali
          </p>
        </div>
      </div>

      <hr class="hero-divider" data-aos="fade-up"/>
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

export default ExploreUbud;
