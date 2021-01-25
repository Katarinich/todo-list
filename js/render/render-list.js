import taskList from '../tasks.js';

import listTemplate from '../templates/pages/list/index.js';

import addTask, { createTask } from '../task-operations/add-task.js';
import deleteCheckedTasks from '../task-operations/delete-checked-tasks.js';

import { getListIdByUrl } from '../utils.js';

const rootDiv = document.querySelector('.container');

export default function renderList() {
  rootDiv.innerHTML = listTemplate;

  // находим форму добавления
  const addForm = document.querySelector('.add-form > form');
  const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

  // вешаем обработчик события submit (отправки) на форму
  addForm.addEventListener('submit', addTask);
  deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);

  const listId = getListIdByUrl();

  taskList.tasks
    .filter((task) => task.parentListId === listId)
    .forEach((task) => {
      createTask(task);
    });
}
