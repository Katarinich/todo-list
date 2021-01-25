import taskList from '../tasks.js';
import { getId } from '../utils.js';
import listsList from '../lists-list.js';
import storageService from '../storage-service.js';

function deleteList(event) {
  const { parentNode } = event.target.closest('.delete-btn');

  const listId = getId(parentNode);

  taskList.deleteTasksByListId(listId);
  listsList.delete(listId);

  parentNode.remove();

  storageService.set('tasks', JSON.stringify(taskList.tasks));
  storageService.set('lists', JSON.stringify(listsList.lists));
}

export default deleteList;
