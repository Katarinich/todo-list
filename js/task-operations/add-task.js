import editTask from './edit-task.js';
import checkTask from './check-task.js';
import deleteTask from './delete-task.js';

const todoList = document.querySelector('.todo-list ol');

let tasks = [];

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
    text: todoText,
    checked: false,
  };

  tasks = [...tasks, newTask];

  const newTodo = document.createElement('li');

  newTodo.setAttribute('id', `task-${tasks.length}`);

  todoList.appendChild(newTodo);

  newTodo.innerHTML = `
    <input type="checkbox"> 
    <span>${todoText}</span> 
    <button class="edit-btn"><i class="fas fa-edit"></i></button> 
    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
  `;

  const checkbox = document.querySelector(`#task-${tasks.length} > input`);
  const deleteBtn = document.querySelector(`#task-${tasks.length} .delete-btn`);
  const editBtn = document.querySelector(`#task-${tasks.length} .edit-btn`);

  checkbox.addEventListener('change', checkTask);
  deleteBtn.addEventListener('click', deleteTask);
  editBtn.addEventListener('click', editTask);

  // очищаем форму
  event.target.reset();
}
