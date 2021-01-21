import storageService from '../storage-service.js';

import { generateId } from '../utils.js';
import listsList from '../lists-list.js';
import { renderList } from '../script.js';

export function createList(list) {
  const lists = document.querySelector('.lists ol');

  const newList = document.createElement('li');

  newList.setAttribute('id', `list-${list.id}`);

  lists.appendChild(newList);

  newList.innerHTML = `<a href="#">${list.name}</a>`;

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
