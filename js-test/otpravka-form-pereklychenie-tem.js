let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
};

let message = document.querySelector('.subscription-message');

let form = document.querySelector('.subscription');
form.onsubmit = function (evt) {
    // Инструкция ниже отменяет отправку данных
    evt.preventDefault();
    message.textContent = 'Форма отправлена!';
};

/*

Получаем данные из поля ввода с помощью input.value

Мы научились с помощью скрипта изменять текст на странице, когда пользователь отправляет форму. У нас это форма подписки на рассылку, и нам нужно сообщить пользователю, что он успешно подписался. Сообщение будет выглядеть так:

Адрес e-mail добавлен в список получателей рассылки.

Адрес электронной почты в сообщении должен быть тем, который введёт пользователь. Как его получить?

Нам поможет особое свойство, которое есть у полей ввода, — value. Допустим, на странице есть поле ввода input:

<input type="text">

Босс проходил мимо и ввёл туда своё имя — Кекс. С помощью свойства value мы можем получить данные из этого поля ввода. А после, например, вывести их в консоль:

let input = document.querySelector('input');
console.log(input.value);
// Выведет: Кекс

А ещё мы можем вывести данные из поля ввода прямо на страницу. Представим, что у нас на странице есть абзац, который мы нашли и сохранили в переменную paragraph. Мы можем сделать так:

paragraph.textContent = input.value;

И теперь то, что ввёл пользователь в поле input, отобразится на странице как текстовое содержимое элемента paragraph.

В нашем случае пользователь вводит свой адрес в поле с классом subscription-email. Найдём его и скажем JavaScript вывести полученные данные на страницу.

Почему бы не прочитать текст из поля ввода с помощью textContent? Если мы попытаемся это сделать, то получим пустую строку. Для JavaScript поля формы не имеют текстового содержимого, их значения хранятся именно в value.


 */
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
};

let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');

form.onsubmit = function(evt) {
    evt.preventDefault();
    // Измените значение textContent на следующей строке
    message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};

