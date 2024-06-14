const createArticleTemplate = (article) => `
  <div class="place-list">
      <a href="#">
        <div class="place-list__container">
          <img src="${article.Image}" alt="${article.name}" />
          <h3 class="place-list__name">${article.name}</h3>
          <p class="place-list__text">
            ${article.description}
          </p>
        </div>
      </a>
  </div>
`;

export { createArticleTemplate };
