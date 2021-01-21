import storageService from '../storage-service.js';

import { generateId } from '../utils.js';
import listsList from '../lists-list.js';

export function createList(list) {
  const lists = document.querySelector('.lists ol');

  const newList = document.createElement('li');

  newList.setAttribute('id', `list-${list.id}`);

  lists.appendChild(newList);

  newList.innerHTML = `<span>${list.name}</span>`;
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
