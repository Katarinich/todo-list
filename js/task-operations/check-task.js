import taskList from '../tasks.js';
import { getTaskId } from '../utils.js';
import storageService from '../storage-service.js';

function checkTask(event) {
  const { target } = event;
  const { parentNode: li, checked } = target;

  // const checked = target.checked;
  // const li = target.parentNode;

  if (checked) {
    li.classList.add('checked');
  } else {
    li.classList.remove('checked');
  }

  const taskId = getTaskId(li);
  taskList.check(taskId);

  storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default checkTask;
