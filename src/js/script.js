// Получаем все элементы materials-list__item
const items = document.querySelectorAll('.materials-list__item');

// Перебираем каждый элемент
items.forEach((item) => {
  // Добавляем обработчик события наведения мыши
  item.addEventListener('mousemove', (e) => {
    // Получаем позицию курсора мыши относительно элемента
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Получаем картинку внутри текущего элемента
    const image = item.querySelector('.materials-list__item-img');

    // Устанавливаем позицию картинки относительно курсора мыши
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
  });
});
