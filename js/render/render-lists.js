import listsList from '../lists-list.js';

import addList, { createList } from '../list-operations/add-list.js';

import listsTemplate from '../templates/pages/lists/index.js';

const rootDiv = document.querySelector('.container');

export default function renderLists() {
  rootDiv.innerHTML = listsTemplate;

  const addListForm = document.querySelector('.add-form > form');

  addListForm.addEventListener('submit', addList);

  listsList.lists.forEach((list) => {
    createList(list);
  });
}
