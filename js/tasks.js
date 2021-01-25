import storageService from './storage-service.js';

class TaskList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  add(newTask) {
    this.tasks = [...this.tasks, newTask];
  }

  delete(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  edit(id, text) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text };
      }

      return task;
    });
  }

  check(id) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }

      return task;
    });
  }

  deleteTasksByListId(listId) {
    this.tasks = this.tasks.filter((task) => task.parentListId !== listId);
  }
}

const tasks = JSON.parse(storageService.get('tasks'));

const taskList = new TaskList(tasks ? tasks : []);

export default taskList;
