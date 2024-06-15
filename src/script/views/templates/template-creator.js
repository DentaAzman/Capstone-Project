import API_ENDPOINT from '../../../globals/api-endpoint';

const createArticleTemplate = (article) => `
  <div class="article-container">
    <a href="#/detail/${article._id}">
      <img src="${article.Image}" alt="${article.name}" />
      <h3 class="article-name">${article.name}</h3>
      <p class="article-text">
        ${article.description}
      </p>
    </a>
  </div>
`;

const createArticleDetailTemplate = (article) => `
  <h2>${article.name}</h2>
  <img src="${article.Image}" alt="${article.name}" />
  <p><b>Description:</b> ${article.description}</p>
  <p><b>Address:</b> ${article.address}</p>
  <p><b>Prices:</b> ${article.price}</p>
  <p><b>Place:</b> ${article.maps}</p>
  <p><b>Travel Tip:</b> ${article.travelTip}</p>
  <p><b>Open Hours:</b> ${article.openHours}</p>
`;

export { createArticleTemplate, createArticleDetailTemplate };
