import CONFIG from './config';

const API_ENDPOINT = {
  CANGGU: `${CONFIG.BASE_URL}article/canggu`,
  KINTAMANI: `${CONFIG.BASE_URL}article/kintamani`,
  SEMINYAK: `${CONFIG.BASE_URL}article/seminyak`,
  UBUD: `${CONFIG.BASE_URL}article/ubud`,
  KUTA: `${CONFIG.BASE_URL}article/kuta`,
  NUSADUA: `${CONFIG.BASE_URL}article/nusadua`,
  DETAIL: (id) => `${CONFIG.BASE_URL}article/detail/${id}`,
};

export default API_ENDPOINT;
