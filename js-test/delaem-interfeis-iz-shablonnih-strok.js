/*
После предыдущего раздела код нашего проекта преобразился, а точнее был разделён на модули. Осмотримся:

    main.js — точка входа;
    game.js — модуль с демо версией игры;
    setup.js — модуль с настройкой игры, зависит от game.js;
    util.js — модуль с утилитарными функциями;
    data.js — модуль для генерации временных данных для разработки, зависит от util.js.

Модуль data.js берёт на себя всю логику по созданию данных, его интерфейс — набор методов (пока один createWizards) для получения этих данных.
 */

/*
Но вернёмся к задаче, сегодня нам нужно вывести список похожих волшебников на экран настройки персонажа пользователя. Временные данные у нас уже для этого есть. Осталось поработать с DOM.


  <div class="overlay setup hidden">
    <form class="setup-wizard-form">

      <div class="setup-title">
        <div class="setup-user">
          <img class="setup-user-pic" src="img/user-1.jpg" alt="User avatar">
          <label>
            <input type="text" class="setup-user-name" value="Синий Пендальф">
          </label>
        </div>

 */

/*
Первым делом создадим файл, в котором будем решать нашу задачу. Назовём его popup.js. Импортируем этот файл в точку входа. Затем найдём и покажем окно настроек пользователя, удалив у него скрывающий класс.
 */
const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
//--------------------------------------------------------------------
//Таким же образом покажем блок с похожими персонажами внутри окна.
//
// Обратите внимание, что дочерние элементы не обязательно искать в document.

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');
//=============================================================================
//Найдём в документе шаблон, который мы будем копировать. И найдём в окне список, в который мы будем вставлять похожих магов.
const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
//===============================================================
//Склонируем шаблон похожего персонажа и отрисуем его в списке, чтобы проверить, что отрисовка работает.
const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

const wizardElement = similarWizardTemplate.cloneNode(true);
similarListElement.appendChild(wizardElement);
//==========================================================================
//Импортируем модуль для генерации данных, чтобы получить массив похожих волшебников. Отрисуем всё ещё шаблон, но уже в проходке по массиву с данными.
import {createWizards} from './data.js';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

const similarWizards = createWizards();

similarWizards.forEach(() => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    similarListElement.appendChild(wizardElement);
});
//==========================================================
//Затем вставим данные в шаблон. Начнём с имени.
import {createWizards} from './data.js';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

const similarWizards = createWizards();

similarWizards.forEach((wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    similarListElement.appendChild(wizardElement);
});
//====================================================
//Потом цвет глаз и мантия.
import {createWizards} from './data.js';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

const similarWizards = createWizards();

similarWizards.forEach((wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    similarListElement.appendChild(wizardElement);
});
//===========================================================
