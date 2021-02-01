import lists from './lists-list.js';
import currentUser from './current-user.js';
import { getListIdByUrl } from './utils.js';

import renderList from './render/render-list.js';
import renderLists from './render/render-lists.js';
import renderLogin from './render/render-login.js';
import renderRegistration from './render/render-registration.js';

const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ['/', '/index.html'];

const REGISTRATION_URL = '/registration';
export const LOGIN_URL = '/login';

export function renderPage() {
  const { pathname: currentUrl } = window.location;

  if (!currentUser.userData && currentUrl === REGISTRATION_URL) {
    renderRegistration();

    return;
  }

  if (!currentUser.userData && currentUrl === LOGIN_URL) {
    renderLogin();

    return;
  }

  if (!currentUser.userData) {
    navigateToUrl(LOGIN_URL);

    return;
  }

  if (INDEX_URLS.includes(currentUrl)) {
    renderLists();

    return;
  }

  if (listRoutePattern.test(currentUrl)) {
    const listId = getListIdByUrl();

    const list = lists.getListById(listId);

    if (list.userId !== currentUser.userData.id) {
      navigateToUrl('/');
    }

    renderList();

    return;
  }

  navigateToUrl('/');
}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
}
