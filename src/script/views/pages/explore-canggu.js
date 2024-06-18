import DestinationSource from '../../../data/destination-source';
import heroCanggu from '../../../public/images/hero-canggu.png';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreCanggu = {
  async render() {
    return `
      <div class="hero hero-canggu" data-aos="fade-up">
        <div class="hero__inner" data-aos="fade-down" data-aos-delay="300">
          <h2 class="hero__title">CANGGU</h2>
          <br />
          <p class="hero__tagline">
            Cakrawala yang indah dengan pemandangan laut serta matahari terbenam
          </p>
        </div>
      </div>

      <hr class="hero-divider" data-aos="fade-up"/>
      <div id="articleList" class="article-list"></div>
    `;
  },

  async afterRender() {
    const heroCangguElement = document.querySelector('.hero-canggu');
    if (heroCangguElement) {
      heroCangguElement.style.backgroundImage = `url(${heroCanggu})`;
    }

    const articles = await DestinationSource.exploreCanggu();
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

export default ExploreCanggu;
