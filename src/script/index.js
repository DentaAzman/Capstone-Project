import './components/main-components.js';
import 'regenerator-runtime';
import '../styles/main-bootstrap.css';
import '../styles/main.css';
import '../styles/responsive.css';
import './bootstrap.bundle.min.js';

import App from './views/app.js';
import routes from './routes/routes.js';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navbarNav'),
  content: document.querySelector('#mainContent'),
  routes,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

function main() {}

document.addEventListener('DOMContentLoaded', main);
