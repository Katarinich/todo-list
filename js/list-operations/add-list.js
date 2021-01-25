import deleteList from './delete-list.js';

import { generateId } from '../utils.js';
import listsList from '../lists-list.js';
import storageService from '../storage-service.js';

import renderList from '../render/render-list.js';

export function createList(list) {
  const lists = document.querySelector('.lists ol');

  const newList = document.createElement('li');

  newList.setAttribute('id', `list-${list.id}`);

  lists.appendChild(newList);

  newList.innerHTML = `
    <a href="#">${list.name}</a>
    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
  `;

  const deleteBtn = document.querySelector(`#list-${list.id} .delete-btn`);

  deleteBtn.addEventListener('click', deleteList);

  const linkToList = newList.querySelector('a');

  linkToList.addEventListener('click', (event) => {
    event.preventDefault();

    window.history.pushState(
      {},
      `/list/${list.id}`,
      window.location.origin + `/list/${list.id}`
    );

    renderList();
  });
}

export default function addList(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const listName = formData.get('name');

  const newList = {
    id: generateId(listsList.lists),
    name: listName,
  };

  listsList.add(newList);

  createList(newList);

  event.target.reset();

  storageService.set('lists', JSON.stringify(listsList.lists));
}
