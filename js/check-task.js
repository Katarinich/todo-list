function checkTask(event) {
  const li = event.target.parentNode;

  if (event.target.checked) {
    li.classList.add('checked');
  } else {
    li.classList.remove('checked');
  }
}

export default checkTask;