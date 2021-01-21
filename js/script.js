import taskList from './tasks.js';
import listsList from './lists-list.js';

import listTemplate from './templates/pages/list/index.js';
import listsTemplate from './templates/pages/lists/index.js';
import addList, { createList } from './list-operations/add-list.js';
import addTask, { createTask } from './task-operations/add-task.js';
import deleteCheckedTasks from './task-operations/delete-checked-tasks.js';

const currentUrl = window.location.pathname;

const rootDiv = document.querySelector('.container');

function renderLists() {
  rootDiv.innerHTML = listsTemplate;

  const addListForm = document.querySelector('.add-form > form');

  addListForm.addEventListener('submit', addList);

  listsList.lists.forEach((list) => {
    createList(list);
  });
}

if (currentUrl === '/') {
  renderLists();
}

export function renderList() {
  rootDiv.innerHTML = listTemplate;

  // находим форму добавления
  const addForm = document.querySelector('.add-form > form');
  const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

  // вешаем обработчик события submit (отправки) на форму
  addForm.addEventListener('submit', addTask);
  deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);

  taskList.tasks.forEach((task) => {
    createTask(task);
  });
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
