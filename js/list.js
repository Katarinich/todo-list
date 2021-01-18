import taskList from './tasks.js';

import addTask, { createTask } from './task-operations/add-task.js';
import deleteCheckedTasks from './task-operations/delete-checked-tasks.js';

// находим форму добавления
const addForm = document.querySelector('.add-form > form');
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

// вешаем обработчик события submit (отправки) на форму
addForm.addEventListener('submit', addTask);
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);

taskList.tasks.forEach((task) => {
  createTask(task);
});
