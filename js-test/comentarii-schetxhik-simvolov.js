//Обработчик событий oninput
/*
Мы познакомились с обработчиком событий oninput и получили данные из поля ввода без отправки формы. Босс хочет, чтобы комментарии были не длиннее 142 символов и чтобы пользователи видели, сколько символов они уже использовали. Для этого нам нужно вычислить длину комментария и вывести её на страницу.

Узнать длину комментария нам поможет свойство length (по-английски «длина»). Значение этого свойства равно числу символов в строке. Символами считаются не только буквы и цифры, но также пробелы и переносы строки.

let text = 'Я люблю JavaScript';
console.log(text.length); // Выведет: 18

let textarea = document.querySelector('textarea');
console.log(textarea.value); // Выведет: Кекс
console.log(textarea.value.length); // Выведет: 4

Пользователи новостного сайта должны видеть, какой длины набранный ими текст. Чтобы вывести длину на страницу, изменим текстовое содержимое элемента с классом char-counter. Этот элемент находится прямо под полем ввода:

<span class="text-counter">
  Использовано <output class="char-counter">0</output>/142 символов
</span>

Счётчик символов должен реагировать на каждое изменение в поле ввода, поэтому менять текстовое содержимое элемента мы будем внутри нашего обработчика oninput. Чтобы убедиться, что счётчик символов работает, начнём набирать новый комментарий.

Тег <output> используют, чтобы показать на странице результат вычислений, полученный с помощью JavaScript. Подробнее о теге вы можете узнать в этом задании.

 */
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
};

commentField.oninput = function () {
    charCounter.textContent = commentField.value.length;
};
//=====================================================================================

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
    charCounter.textContent = 0;

};

commentField.oninput = function () {
    charCounter.textContent = commentField.value.length;

    if (commentField.value.length > 142) {
        commentForm.classList.add('warning');
        submitButton.disabled = true;
    } else {
        commentForm.classList.remove('warning');
        submitButton.disabled = false;
    }
};

