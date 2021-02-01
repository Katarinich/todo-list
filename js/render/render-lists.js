import listsList from '../lists-list.js';
import currentUser from '../current-user.js';

import addList, { createList } from '../list-operations/add-list.js';

import listsTemplate from '../templates/pages/lists/index.js';

const rootDiv = document.querySelector('.container');

export default function renderLists() {
  rootDiv.innerHTML = listsTemplate;

  const addListForm = document.querySelector('.add-form > form');

  addListForm.addEventListener('submit', addList);

  const currentUserId = currentUser.userData.id;

  listsList.lists
    .filter((list) => list.userId === currentUserId)
    .forEach((list) => {
      createList(list);
    });
}
