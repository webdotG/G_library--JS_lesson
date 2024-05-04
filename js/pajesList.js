import { PAGES } from '../CONST.js';

export function FileList() {
    const listPages = document.getElementById('fileList');
    console.log('listPages : ',listPages)

    PAGES.forEach((file, index) => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = file.path;
            link.textContent = file.name;
            link.classList.add('hover-effect'); // Добавление класса для анимации

            listItem.appendChild(link);
            listPages.appendChild(listItem);

            // Добавляем анимацию с задержкой
            listItem.style.animationDelay = `${index * 100}ms`;

            // Добавление и удаление класса при наведении и уходе мыши
            link.addEventListener('mouseover', () => {
                link.classList.add('hover-effect');
            });

            link.addEventListener('mouseout', () => {
                link.classList.remove('hover-effect');
            });

    });
}
