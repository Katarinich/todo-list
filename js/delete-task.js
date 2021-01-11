function deleteTask(event) {
  event.target.closest('.delete-btn').parentNode.remove();
}

export default deleteTask;