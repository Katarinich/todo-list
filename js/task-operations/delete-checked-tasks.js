import taskList from '../tasks.js';
import { getTaskId } from '../utils.js';
import storageService from '../storage-service.js';

function deleteCheckedTasks() {
  const checkedTasks = document.querySelectorAll('li.checked');

  checkedTasks.forEach((checkedTask) => {
    const taskId = getTaskId(checkedTask);
    taskList.delete(taskId);

    checkedTask.remove();
  });

  storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteCheckedTasks;
