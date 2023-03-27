//Создаём счётчик лайков
/*
Кнопка «сердечко» сохранена в переменной heart.
Когда пользователь ставит лайк, кнопке добавляется класс added, и «сердечко» становится полностью закрашенным.
Когда лайк отменяют, класс added убирается, и кнопка возвращается в первоначальное состояние.
За переключение класса отвечает метод classList.toggle,
Для отображения числа лайков на странице верстальщик подготовил элемент с классом likes-number.

Вот как кнопка выглядит в разметке:

<!-- Лайка нет, сердечко пустое -->
<button class="heart" type="button"><span class="likes-number"></span></button>

<!-- Лайк есть, сердечко закрашено -->
<button class="heart added" type="button"><span class="likes-number"></span></button>

Чтобы хранить количество лайков, нам понадобится переменная-счётчик. Её значением будет число.

// Присвоим переменной значение — число
let number = 7;

Обратите внимание, мы не оборачиваем числа в кавычки.

Назовём переменную-счётчик counter и присвоим ей значение 0 — пока никто не кликнул, лайков нет.
После этого выведем значение счётчика на страницу
с помощью свойства textContent элемента с классом likes-number.
 */

<button className="heart" type="button"><span className="likes-number"></span></button>


let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
    likesNumber.textContent = counter;
    heart.classList.toggle('added');
};

//===============================================================================================================

//Изменяем значение счётчика
/*
Мы создали счётчик лайков, но пока его значение не изменяется при кликах на «сердечко».
Нам нужно, чтобы значение счётчика увеличивалось, когда пользователь ставит лайк,
и уменьшалось, когда лайк отменяют.
Мы создали счётчик лайков, но пока его значение не изменяется при кликах на «сердечко». Давайте это исправим.
Нам нужно, чтобы значение счётчика увеличивалось, когда пользователь ставит лайк, и уменьшалось, когда лайк отменяют.

 */
let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
    counter++;
    likesNumber.textContent = counter;
    heart.classList.toggle('added');
};
//================================================================================

//Метод classList.contains, проверяем наличие класса
/*

Мы можем проверить, есть ли у элемента heart класс added.
Если класса у элемента ещё нет, то лайк добавляется, а если класс уже есть, то лайк снимается.

Чтобы проверить, есть ли у элемента класс, используем метод classList.contains:

элемент.classList.contains('класс');

В скобках указывается класс, наличие которого нужно проверить.
Когда метод сообщает какую-то информацию, говорят, что он возвращает значение.
Метод classList.contains вернёт true (истина), если класс у элемента есть, и false (ложь), если класса нет.

Нам нужно проверять, есть ли у элемента heart класс added.
Посмотрим, как работает метод classList.contains:
скажем JavaScript выводить в консоль значения, которые этот метод возвращает,
и кликнем несколько раз на «сердечко», чтобы переключить класс.
 */

let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
    console.log(heart.classList.contains('added'));
    counter++;
    likesNumber.textContent = counter;
    heart.classList.toggle('added');
};

//===========================================================================================================

/*
Если у элемента heart есть класс added, значит, пользователь уже поставил лайк и теперь хочет его отменить.
В этом случае мы должны уменьшить значение счётчика.
 */

let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
    if (heart.classList.contains('added')) {
        counter--;
    }
    counter++;
    likesNumber.textContent = counter;
    heart.classList.toggle('added');
};

//====================================================================================================================

/*
Добавим в наш скрипт ветку else:
скажем JavaScript увеличивать значение счётчика только тогда,
когда у элемента heart ещё нет класса added.
 */

let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
    if (heart.classList.contains('added')) {
        counter--;
    } else {
        counter++;
    }

    likesNumber.textContent = counter;
    heart.classList.toggle('added');
};
//=====================================================================================================
//Изменяем значение из разметки
/*
Счётчик лайков работает! Когда лайк ставят, значение счётчика увеличивается,
а когда лайк отменяют, значение уменьшается.
Есть только одна маленькая проблема: наш счётчик не учитывает других пользователей сайта.
Что, если кто-то другой уже поставил лайк? Нам следует брать число лайков,
которое уже есть на странице, и изменять именно его.

Возьмём значение из likesNumber.textContent и изменим его на единицу:

// Увеличит значение на 1
likesNumber.textContent++;

// Уменьшит значение на 1
likesNumber.textContent--;

Теперь переменная counter уже не нужна, так что мы её просто удалим. Счётчик лайков готов!
 */
/*
Счётчик лайков можно улучшить, добавив кнопке heart атрибут aria-pressed.
Этот атрибут указывает, в каком состоянии находится кнопка-переключатель.
Например, если лайк стоит, то значение у атрибута должно быть "true",
а если лайка нет, то "false". Атрибут aria-pressed не влияет на внешний вид кнопки,
но он помогает скринридерам правильно прочитать содержимое страницы.
 */
let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');


heart.onclick = function () {
    if (heart.classList.contains('added')) {
        likesNumber.textContent--;
    } else {
        likesNumber.textContent++;
    }

    heart.classList.toggle('added');
};
//=======================================================================================================
