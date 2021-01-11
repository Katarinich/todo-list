function deleteTask(event) {
  const { parentNode } = event.target.closest('.delete-btn');

  parentNode.remove();
}

export default deleteTask;
