import DestinationSource from '../../../data/destination-source';
import heroSeminyak from '../../../public/images/hero-seminyak.png';
import { createArticleTemplate } from '../templates/template-creator';

const ExploreSeminyak = {
  async render() {
    return `
      <div class="hero hero-seminyak" data-aos="fade-up">
        <div class="hero__inner" data-aos="fade-down" data-aos-delay="300">
          <h2 class="hero__title" tabindex="0">SEMINYAK</h2>
          <br />
          <p class="hero__tagline" tabindex="0">
            Cakrawala yang indah dengan pemandangan laut serta matahari terbenam
          </p>
        </div>
      </div>

      <hr class="hero-divider" data-aos="fade-up"/>
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

export default ExploreSeminyak;
