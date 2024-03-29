/*
Верстальщик добавил на страницу с отдельной новостью ленту комментариев и форму добавления нового комментария.
Программисты уже нашли эту форму с помощью JavaScript, сохранили её в переменную commentForm и добавили обработчик событий.
Скрипт находится в файле comments.js, он уже подключён.

Лента, куда будут выводиться комментарии, это элемент с классом comment-list.
Обратите внимание, в ленте уже есть один комментарий.

<ol class="comment-list">
  <li class="user-comment">Да ну, бред какой-то…</li>
</ol>

Скажем JavaScript найти элемент с классом comment-list,
запишем этот элемент в переменную и изменим его текстовое содержимое. Посмотрим, что из этого получится.
 */
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
commentList.textContent = 'Новый комментарий';

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

};
//====================================================================================================================

/*
Нужно, чтобы новые комментарии добавлялись в конец ленты, после старых комментариев. С этим нам поможет метод append. Используют его так:

элемент-родитель.append(добавляемый-элемент);

Метод append добавляет указанный в скобках элемент в конец элемента-родителя. При этом содержимое элемента-родителя не затирается. Добавлять с помощью этого метода можно и элементы, и простые строки.

Представим, что у нас есть следующая разметка на странице:

<p>Хорошо быть котом.</p>

Найдём этот абзац и используем метод append:

let paragraph = document.querySelector('p');
paragraph.append(' А разработчиком — ещё лучше!');

Когда команда выполнится, в браузере пользователя разметка будет выглядеть так:

<p>Хорошо быть котом. А разработчиком – ещё лучше!</p>

Новая строка добавилась в конец элемента, ничего не удаляя. То, что нужно для новых комментариев! Чтобы в этом убедиться, используем метод append и добавим строку в конец ленты комментариев.
 */
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
commentList.append('Новый комментарий');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

};
//===========================================================================
//Метод createElement, создание элемента
/*
У нас получилось добавить сообщение в конец ленты и сохранить всё, что там было до этого!

Однако каждый комментарий в ленте — это не просто строка, а отдельный элемент. Перед тем, как добавить его в ленту, этот элемент нужно создать.

Чтобы создать новый элемент, воспользуемся методом createElement:

document.createElement('имя тега');

Мы создаём новый элемент на странице, к которой подключён скрипт, поэтому используем слово document. Внутри скобок в кавычках нужно указать элемент, который мы хотим создать. Например:

// Создаст новый элемент <div> и запишет его в переменную
let newElement = document.createElement('div');

Лента комментариев на нашей странице — это нумерованный список, а каждый комментарий — элемент списка. Поэтому мы создадим элемент li:

<ol class="comment-list">
  <li class="user-comment">Да ну, бред какой-то…</li>
</ol>

Создадим новый элемент списка и протестируем результат: скажем JavaScript вывести созданный элемент в консоль.
 */

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');


commentForm.onsubmit = function (evt) {
    evt.preventDefault();

};

let newComment = document.createElement('li');
console.log(newComment);

//===============================================================================================================
//Добавляем элемент на страницу

/*
Отлично, мы создали с помощью JavaScript новый элемент списка и вывели его в консоль. Но на странице новый элемент не появился. Почему? Дело в том, что JavaScript не знает, где его разместить. Пока мы ему не скажем, новый элемент будет доступен из скрипта, но в разметке не появится.

Чтобы указать, где должен находиться новый элемент, воспользуемся уже знакомым нам методом append:

// Создаём новый элемент
let newElement = document.createElement('div');

// Находим элемент-родитель
let parent = document.querySelector('.parent');

// Добавляем новый элемент в конец элемента-родителя
parent.append(newElement);

На новостном сайте новые комментарии должны добавляться в конец ленты. Вот что произойдёт, когда мы добавим созданный элемент:

<!-- Исходная разметка -->
<ol class="comment-list">
  <li class="user-comment">Да ну, бред какой-то…</li>
</ol>

<!-- Разметка в браузере после commentList.append(newComment) -->
<ol class="comment-list">
  <li class="user-comment">Да ну, бред какой-то…</li>
  <li></li>
</ol>

Метод append не копирует элементы, а перемещает. Если указать в скобках элемент, который уже есть в разметке, этот элемент исчезнет со своего прежнего места и появится там, куда его добавил метод append. Получить таким образом несколько элементов не выйдет.
 */
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

};

let newComment = document.createElement('li');
commentList.append(newComment);

//==========================================================================================================
//Добавляем комментарий при отправке формы
/*
Чтобы система комментариев заработала, новый элемент списка должен появляться в ленте каждый раз, когда пользователь отправляет форму. Для этого создавать и добавлять новый элемент нужно внутри обработчика событий.

Перенесём наш код внутрь обработчика onsubmit и попробуем добавить в ленту несколько новых элементов.
 */

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    let newComment = document.createElement('li');
    commentList.append(newComment);
};

//===============================================================================================================
//Меняем свойства созданного элемента
/*
Элементы, созданные с помощью метода createElement, можно изменять так же, как и любые другие. Мы можем менять их текстовое содержимое, переключать классы и так далее.

// Создаём новый абзац
let newElement = document.createElement('p');

// Меняем текстовое содержимое
newElement.textContent = 'Я новый абзац!';

// Добавляем класс
newElement.classList.add('some-text');

// Добавляем элемент на страницу
parent.append(newElement);

Когда инструкции будут выполнены, на странице появится новый абзац с классом some-text.

<div class="parent">
  <!-- Содержимое элемента parent -->

  <p class="some-text">Я новый абзац!</p>
</div>

У комментариев в ленте должен быть класс user-comment. Добавим его созданному элементу перед тем, как вывести его на страницу. А чтобы элемент ещё больше походил на комментарий, запишем в его текстовое содержимое временный текст-заглушку. Его ещё называют «рыбой». В будущем мы будем использовать данные, которые пользователь ввёл в форму, но для тестирования кода хватит и «рыбы».

Если всё правильно, в ленте появится новый комментарий:

<ol class="comment-list">
  <li class="user-comment">Да ну, бред какой-то…</li>
  <li class="user-comment">Новый комментарий</li>
</ol>

Вы можете сначала добавить новый элемент на страницу, а потом уже менять ему текстовое содержимое и класс, но тогда браузеру придётся несколько раз перерисовывать страницу. Это неэффективно. Лучше добавлять на страницу уже полностью сформированный элемент.
 */
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');
    newComment.textContent = 'Новый комментарий';

    commentList.append(newComment);
};

//==========================================================================================================
//Завершаем работу над комментариями
/*
Мы уже получали данные из поля ввода и выводили их на страницу. Для этого мы использовали свойство value.

let input = document.querySelector('input');
let paragraph = document.querySelector('p');

// Записываем данные из поля ввода в текстовое содержимое элемента
paragraph.textContent = input.value;

Данные из поля ввода мы запишем вместо «рыбы» в textContent созданного нами элемента. А само поле ввода после этого очистим, чтобы пользователь по ошибке не отправил один и тот же комментарий несколько раз. Для этого в свойство value поля ввода запишем пустую строку. Вот так:

input.value = '';

Текст комментария мы возьмём из поля ввода с классом comment-field и запишем в текстовое содержимое нового комментария перед тем, как добавить его на страницу. После этого очистим поле ввода — и дело сделано!
 */
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
   newComment.classList.add('user-comment');
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
};

//Обратите внимание, в ленте появился новый комментарий, а текст из поля ввода пропал.

//==================================================================================================================
