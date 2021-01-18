import taskList from '../tasks.js';
import storageService from '../storage-service.js';

function deleteTask(event) {
  const { parentNode } = event.target.closest('.delete-btn');

  const taskId = parseInt(parentNode.id.split('-')[1], 10);

  taskList.delete(taskId);

  parentNode.remove();

  storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteTask;
