
ort API_ENDPOINT from './api-endpoint';

export const fetchCangguArticles = async () => {
  const response = await fetch(API_ENDPOINT.CANGGU);
  if (!response.ok) {
    throw new Error('Failed to fetch Canggu articles');
  }
  return response.json();
};

export const fetchKintamaniArticles = async () => {
  const response = await fetch(API_ENDPOINT.KINTAMANI);
  if (!response.ok) {
    throw new Error('Failed to fetch Kintamani articles');
  }
  return response.json();
};

export const fetchArticleDetail = async (id) => {
  const response = await fetch(API_ENDPOINT.DETAIL(id));
  if (!response.ok) {
    throw new Error(`Failed to fetch article detail with ID ${id}`);
  }
  return response.json();
};
