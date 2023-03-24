/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения уникальных идентификаторов.
  Универсальность такого подхода в том, что мы можем создавать столько генераторов, сколько нам нужно.
  И они не будут мешать друг другу, у каждого генератора будет своя переменная lastGeneratedId со значением.
  Поэтому идентификаторы, созданные generateCommentId(), начинаются с единицы и не сбивают счёт generatePhotoId().
*/

function createIdGenerator() {
    let lastGeneratedIdo = 0;

    return function () {
        lastGeneratedId += 1;
        return lastGeneratedId;
    };
}

const generatePhotoIdo = createIdGenerator();
const generateCommentId = createIdGenerator();

console.log(generatePhotoIdo()); // 1
console.log(generatePhotoIdo()); // 2
console.log(generateCommentIdo()); // 1
console.log(generatePhotoIdo()); // 3

//========================================================================================
/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения случайных идентификаторов
  из указанного диапазона, и так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
*/

function getRandomInteger(min, max) {
    const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
    const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result);
}

/*
function createRandomIdFromRangeGenerator (min, max) {
    return function () {
        // 1. Получить случайное целое положительное число
        // 2. Проверить на уникальность. Повторить шаг 1, пока не получим уникальное число
        // 3. Запомнить полученное число
        // 4. Вернуть результат
    };
}
Давайте начнём решать задачу с части, где сказано, что числа «не повторяются».
В этом нам также поможет замыкание, только теперь нам нужно хранить не «последний идентификатор», а все созданные.
Для этого «хранилища чисел» отлично подойдёт массив, объявим previousValues.

Получить случайное целое число при наличии готовой функции по их генерации не составит труда.
Сразу запишем его в массив и вернём как результат работы генератора.

Проверить на уникальность, то есть наличие в нашем хранилище, тоже несложно.
Для этого мы используем метод массивов
.includes(), который возвращает булево значение о наличии указанного элемента в массиве.

А вот чтобы повторить генерацию и проверку, что число уже есть в хранилище, нужно заморочиться.
Способов несколько. Выберем самый простой — цикл while, который знаком вам из тренажёров.

Дело в том, что в таком случае у нас всегда проверка previousValues.includes(currentValue) будет возвращать true.
Поэтому опишем условие, что делать, если перебраны все числа из диапазона.
А что делать? Например, прекращать работу функции и выводить ошибку в консоль.

Добавим ещё один вызов нашей функции, чтобы проверить, что в таком случае мы получим ошибку, а не вечный цикл.

Задача решена!
*/
function createRandomIdFromRangeGenerator (min, max) {
    const previousValues = [];

    return function () {
        let currentValue = getRandomInteger(min, max);
        if (previousValues.length >= (max - min + 1)) {
            console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
            return null;
        }
        while (previousValues.includes(currentValue)) {
            currentValue = getRandomInteger(min, max);
        }
        previousValues.push(currentValue);
        return currentValue;
    };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 3);

console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId()); // Получим ошибку в консоли и null в качестве значения


//===================================================================================================

// forEach Map Filter Reduce Find FindIndex Join

// Join Метод .join() приводит все элементы массива к строке
// и конкатенирует их в одну итоговую строку, разделяя переданным символом — разделителем.

const titles = ['Die hard', 'Terminator'];

const message = titles.join('. ');

console.log(message); // 'Die hard. Terminator'

//slice Копирование массива или его части
//озвращает копию всех или части элементов исходного массива.
//Метод не изменяет исходный массив, а возвращает новый.
//Чтобы получить часть элементов в виде нового массива, нужно передать аргументами диапазон индексов:

const filmso = ['Die hard', 'Terminator', 'Kindergarten Cop'];

console.log(filmso.slice(0, 2)); // ['Die hard', 'Terminator']

const films = ['Die hard', 'Terminator', 'Kindergarten Cop'];

const copyOfFilms = films.slice();

console.log(copyOfFilms); // ['Die hard', 'Terminator', 'Kindergarten Cop']

console.log(films === copyOfFilms); // false
