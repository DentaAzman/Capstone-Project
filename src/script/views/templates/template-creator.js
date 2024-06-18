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
    <p class="article-prices"><b>Prices:</b> ${article.price}</p>
    <p class="article-address"><b>Address:</b> ${article.address}</p>
    <p class="article-open-hours"><b>Open Hours:</b> ${article.openHours}</p>
    <p class="article-travel-tip"><b>Travel Tip:</b> ${article.travelTip}</p>
    <div class="article-map">
      <iframe src="${article.maps}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
`;

export { createArticleTemplate, createArticleDetailTemplate };
