const createArticleTemplate = (article) => `
  <div class="article-container">
    <a href="#/detail/${article._id}">
      <img src="${article.Image}" alt="${article.name}" />
      <h3 class="article-name" tabindex="0">${article.name}</h3>
      <p class="article-text" tabindex="0">
        ${article.description}
      </p>
    </a>
  </div>
`;

const createArticleDetailTemplate = (article) => `
    <h2 tabindex="0">${article.name}</h2>
    <img src="${article.Image}" alt="${article.name}" tabindex="0"/>
    <p tabindex="0"><b>Description:</b> ${article.description}</p>
    <p class="article-prices" tabindex="0"><b>Prices:</b> ${article.price}</p>
    <p class="article-address" tabindex="0"><b>Address:</b> ${article.address}</p>
    <p class="article-open-hours" tabindex="0"><b>Open Hours:</b> ${article.openHours}</p>
    <p class="article-travel-tip" tabindex="0"><b>Travel Tip:</b> ${article.travelTip}</p>
    <div class="article-map">
      <iframe src="${article.maps}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" tabindex="0"></iframe>
    </div>
`;

export { createArticleTemplate, createArticleDetailTemplate };
