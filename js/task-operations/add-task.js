import editTask from './edit-task.js';
import checkTask from './check-task.js';
import deleteTask from './delete-task.js';

import taskList from '../tasks.js';
import { generateId } from '../utils.js';
import storageService from '../storage-service.js';

const todoList = document.querySelector('.todo-list ol');

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

  if (task.checked) {
    newTodo.classList.add('checked');
    checkbox.checked = 'checked';
  }
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

  storageService.set('tasks', JSON.stringify(taskList.tasks));
}
