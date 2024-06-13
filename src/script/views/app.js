import routes from '../routes/routes.js';
import UrlParser from '../routes/url-parser.js';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (!page) {
      console.error(`No page found for route: ${url}`);
      return;
    }
    this._content.innerHTML = await page.render();
    if (page.afterRender) {
      await page.afterRender();
    }
  }
}
export default App;
