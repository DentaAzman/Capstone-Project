import API_ENDPOINT from '../globals/api-endpoint';

class DestinationSource {
  static async exploreCanggu() {
    const response = await fetch(API_ENDPOINT.CANGGU);
    const responseJson = await response.json();
    return responseJson.canggu;
  }

  static async exploreNusaDua() {
    const response = await fetch(API_ENDPOINT.NUSADUA);
    const responseJson = await response.json();
    return responseJson.nusadua;
  }

  static async exploreSeminyak() {
    const response = await fetch(API_ENDPOINT.SEMINYAK);
    const responseJson = await response.json();
    return responseJson.seminyak;
  }

  static async exploreKintamani() {
    const response = await fetch(API_ENDPOINT.KINTAMANI);
    const responseJson = await response.json();
    return responseJson.kintamani;
  }

  static async exploreKuta() {
    const response = await fetch(API_ENDPOINT.KUTA);
    const responseJson = await response.json();
    return responseJson.kuta;
  }

  static async exploreUbud() {
    const response = await fetch(API_ENDPOINT.UBUD);
    const responseJson = await response.json();
    return responseJson.ubud;
  }
}

export default DestinationSource;
