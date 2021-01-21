import listsList from './lists-list.js';

import listsTemplate from './templates/pages/lists/index.js';
import addList, { createList } from './list-operations/add-list.js';

const currentUrl = window.location.pathname;

const rootDiv = document.querySelector('.container');

if (currentUrl === '/') {
  rootDiv.innerHTML = listsTemplate;

  const addListForm = document.querySelector('.add-form > form');

  addListForm.addEventListener('submit', addList);

  listsList.lists.forEach((list) => {
    createList(list);
  });
}
