export function getId(element) {
  return parseInt(element.id.split('-')[1]);
}

export function generateId(tasks) {
  // получаем массив со всеми идентификаторами тасков
  const ids = tasks.map((task) => {
    return task.id;
  });

  // если у нас пустой массив, начинаем с единицы
  if (!ids.length) {
    return 1;
  }

  // находим максимальный id
  const maxId = Math.max(...ids);

  // возвращаем новый который больше максимального на единицу
  return maxId + 1;
}

export function getListIdByUrl() {
  const currentUrl = window.location.pathname;

  const splittedCurrentUrl = currentUrl.split('/');

  return parseInt(splittedCurrentUrl[splittedCurrentUrl.length - 1], 10);
}