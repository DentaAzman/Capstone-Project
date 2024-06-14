import API_ENDPOINT from '../globals/api-endpoint';

class DestinationSource {
  static async exploreCanggu() {
    const response = await fetch(API_ENDPOINT.CANGGU);
    const responseJson = await response.json();
    return responseJson.canggu;
  }
}

export default DestinationSource;
