import UrlParser from '../../routes/url-parser';
import DestinationSource from '../../../data/destination-source';
import { createArticleDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="articleDetail" class="article-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log('Parsed URL:', url); // Debug: Output the parsed URL

    if (!url.id) {
      console.error('URL ID is undefined');
      return;
    }

    try {
      const response = await DestinationSource.detailArticle(url.id);
      console.log('Article Detail Response:', response); // Debug: Output the full response

      const articleDetail = response.detail;
      console.log('Article Detail:', articleDetail); // Debug: Output the article detail

      if (
        articleDetail &&
        articleDetail.name &&
        articleDetail.Image &&
        articleDetail.description
      ) {
        const articleContainer = document.querySelector('#articleDetail');
        articleContainer.innerHTML = createArticleDetailTemplate(articleDetail);
      } else {
        console.error('Article detail is undefined or missing properties.');
      }
    } catch (error) {
      console.error('Error fetching article detail:', error);
    }
  },
};

export default Detail;
