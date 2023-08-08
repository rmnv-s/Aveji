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

    // Устанавливаем сдвиг картинки относительно курсора мыши
    const imageOffsetX = -250;
    const imageOffsetY = 0;

    // Устанавливаем позицию картинки с учетом сдвига и ограничиваем координаты
    const maxX = rect.width - image.offsetWidth;
    const maxY = rect.height - image.offsetHeight;
    const finalX = Math.max(0, Math.min(x + imageOffsetX, maxX));
    const finalY = Math.max(0, Math.min(y - imageOffsetY, maxY));

    // Устанавливаем позицию картинки с помощью transform
    image.style.transform = `translate(${finalX}px, ${finalY}px)`;
  });
});

// BURGER MENU
const root = document.querySelector('.root');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__list-link');
const menuListSocial = document.querySelector('.menu__list-social');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu__open');
  menu.classList.toggle('active-menu');
  root.classList.toggle('overflow');
  menuListSocial.classList.toggle('menu__list-social-active');
});

menuLink.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu__open');
    menu.classList.remove('active-menu');
    root.classList.remove('overflow');
  });
});
