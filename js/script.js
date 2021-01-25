import renderList from './render/render-list.js';
import renderLists from './render/render-lists.js';

const currentUrl = window.location.pathname;

if (currentUrl === '/') {
  renderLists();
}

if (currentUrl === '/list/1') {
  renderList();
}

window.addEventListener('popstate', () => {
  if (window.location.pathname === '/list/1') {
    renderList();
  }

  if (window.location.pathname === '/') {
    renderLists();
  }
});
