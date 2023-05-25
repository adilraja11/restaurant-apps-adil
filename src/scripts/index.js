import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/appbar.css';
import '../styles/jumbotron.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import '../styles/spinner.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('main').focus();
  }
});
