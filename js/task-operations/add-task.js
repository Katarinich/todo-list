import editTask from './edit-task.js';
import checkTask from './check-task.js';
import deleteTask from './delete-task.js';

import taskList from '../tasks.js';

const todoList = document.querySelector('.todo-list ol');

function generateId(tasks) {
  // получаем массив со всеми идентификаторами тасков
  const ids = tasks.map(task => {
    return task.id;
  });

  // если у нас пустой массив, начинаем с единицы
  if (!ids.length) {
    return 1;
  }

  // находим максимальный id
  const maxId = Math.max(...ids);

  // возвращаем новый который больше максимального на единицу
  return maxId + 1;
}

export function createTask(task) {
  const newTodo = document.createElement('li');

  newTodo.setAttribute('id', `task-${task.id}`);

  todoList.appendChild(newTodo);

  newTodo.innerHTML = `
    <input type="checkbox"> 
    <span>${task.text}</span> 
    <button class="edit-btn"><i class="fas fa-edit"></i></button> 
    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
  `;

  const checkbox = document.querySelector(`#task-${task.id} > input`);
  const deleteBtn = document.querySelector(`#task-${task.id} .delete-btn`);
  const editBtn = document.querySelector(`#task-${task.id} .edit-btn`);

  checkbox.addEventListener('change', checkTask);
  deleteBtn.addEventListener('click', deleteTask);
  editBtn.addEventListener('click', editTask);
}

export default function addTask(event) {
  // сброс стандартого поведения отправки формы
  event.preventDefault();

  // получаем все поля формы
  const formData = new FormData(event.target);

  // получаем текст из инпута
  const todoText = formData.get('text');

  if (!todoText) {
    return;
  }

  const newTask = {
    id: generateId(taskList.tasks),
    text: todoText,
    checked: false,
  };

  taskList.add(newTask);

  createTask(newTask);

  // очищаем форму
  event.target.reset();

  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}
