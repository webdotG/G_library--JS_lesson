/*Например, пользователь кликнул по самой первой миниатюре в разметке.
Она же thumbnails[0] в коллекции.
Тогда в большой картинке должно появиться изображение с адресом photos[0].
 Получается такой код:
 */
  thumbnails[0].addEventListener('click', function () {
    fullPhoto.src = photos[0];
    });
//===============================================================================
/*
Программа перестала работать, когда мы добавили эту запись:

fullPhoto.src = photos[i];

Что с ней может быть не так? Часть fullPhoto.src не вызывает подозрений
 — мы нашли изображение по классу, сохранили в переменную,
а теперь хотим что-то записать в атрибут src.
А вот photos[i] может быть причиной сбоя.
Дело не в названии массива photos, его мы написали правильно.
Остаётся индекс и текущий элемент массива. Возможно, с ними что-то не то.

 */
var photos = [
    'gallery/laptop-large.jpg',
    'gallery/microphone-large.jpg',
    'gallery/keyboard-large.jpg',
    'gallery/signboard-large.jpg',
    'gallery/tree-large.jpg'
];

var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function () {
        console.log(i);
        console.log(photos[i]);
        fullPhoto.src = photos[i];
    });
}
/*
Потому что переменные из тела функции доступны только внутри этой функции.
Снаружи их получить нельзя.
То же самое произойдёт, если мы захотим обратиться снаружи к параметру функции.
Параметр хоть и задаётся снаружи, ведёт себя, как переменная внутри функции.

Почему так?

Потому что у каждой функции есть область видимости — все значения, доступные для этой функции.
Область видимости ограничивается самой функцией.
 */

//=======================================================================================================

//Чиним галерею
/*
Мы создадим функцию, которая будет принимать в качестве параметров миниатюру и подходящий элемент из массива photos.
А уже внутри этой функции будем добавлять обработчики.
Тогда каждый обработчик будет брать значения из своего замыкания — из параметров функции, в которой находится обработчик.

У каждого обработчика будет собственное замыкание,
поэтому значения в обработчиках не будут повторяться, как это было раньше.
 */
var photos = [
    'gallery/laptop-large.jpg',
    'gallery/microphone-large.jpg',
    'gallery/keyboard-large.jpg',
    'gallery/signboard-large.jpg',
    'gallery/tree-large.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
        console.log(thumbnail);
        console.log(photo);
    });
};

for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], photos[i]);
}

//====================================================================================================
//Дело раскрыто
/*
На каждой итерации мы передаём разные значения в addThumbnailClickHandler.
Каждый обработчик получает своё замыкание,
в котором находятся какие-то конкретные значения параметров thumbnail, photo.
Именно эти значения использует каждый обработчик при наступлении события.
И теперь значение индекса в уже отработавшем цикле никак не влияет на нашу программу.
 */
var photos = [
    'gallery/laptop-large.jpg',
    'gallery/microphone-large.jpg',
    'gallery/keyboard-large.jpg',
    'gallery/signboard-large.jpg',
    'gallery/tree-large.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
        fullPhoto.src = photo;
    });
};

for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], photos[i]);
}
