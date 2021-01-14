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
}

export default checkTask;
