const createArticleTemplate = (article) => `
  <div class="article-container">
    <a href="#">
      <img src="${article.Image}" alt="${article.name}" />
      <h3 class="article-name">${article.name}</h3>
      <p class="article-text">
        ${article.description}
      </p>
    </a>
  </div>
`;

export { createArticleTemplate };
