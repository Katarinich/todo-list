import addTask from './task-operations/add-task.js';

// находим форму добавления
const addForm = document.querySelector('.add-form > form');

// вешаем обработчик события submit (отправки) на форму
addForm.addEventListener('submit', addTask);
