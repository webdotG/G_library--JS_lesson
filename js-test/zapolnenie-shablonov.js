//Нюансы заполнения шаблонов данными
/*
<ul class="emojis">
    <li class="emoji emoji--smile">🙂</li>
    <li class="emoji emoji--neutral">😐</li>
    <li class="emoji emoji--frowning">🙁</li>
    <li class="emoji emoji--angry">😠</li>
    <li class="emoji emoji--crying">😭</li>
  </ul>

=============
В прошлых демонстрациях мы рассмотрели, как создавать элементы интерфейса по шаблону целиком. Сейчас же давайте разберём довольно часто встречающуюся задачу: заполнение шаблона данными.

Для простоты примера мы не будем использовать <template> и возиться с кодом целого шаблона, возьмём лишь его часть — список эмоций.

Предположим, что это шаблон поста в соцсети, и у нас та часть, где реакции пользователей.
 */

//==================================================================================================
/*
В шаблоне у нас все возможные эмоции, а в данных (массив userEmotions) только те, которые оставил какой-то пользователь.

Наша задача: оставить в шаблоне из всего доступного набора эмоций только указанные пользователем.
 */
const userEmotions = [
    'smile',
    'crying',
];

//===============================================================
/*
Первое, с чего нужно начать, найти общее, а что общего в шаблоне и в данных? Названия эмоций! Элементы массива — вроде 'smile' — это же часть модификаторов по БЭМу в разметке.

Кстати, если общего нет, его нужно придумать и подправить шаблон или расширить данные.

Но у нас общее есть — модификаторы — поэтому давайте разберём несколько вариантов решения задачи. Скажем сразу, все они верные, потому что решают поставленную задачу, разница лишь в нюансах.
 */
//=========================================================
/*
Вариант № 1, можно сказать «в лоб»: чтобы оставить только нужные эмоции, удалим все и создадим только нужные заново.

И начнём с того, что найдём нужные DOM-элементы с помощью .querySelector() и .querySelectorAll(), а после очистим список эмоций.
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');

emojiContainer.innerHTML = '';

//=======================================================
/*
После в цикле пройдёмся по массиву userEmotions и для каждой эмоции создадим заново пункт списка <li>.
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');

emojiContainer.innerHTML = '';

userEmotions.forEach((userEmotion) => {
    const emojiListItem = document.createElement('li');
});
//================================================================
/*
Добавим вновь созданному пункту класс emoji и модификатор emoji-- на основе эмоции из массива.

Но как добавить смайлик? А точнее, откуда его взять? Прежние же пункты списка из шаблона мы уже удалили. Вот он, нюанс подхода с удалением всего...
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');

emojiContainer.innerHTML = '';

userEmotions.forEach((userEmotion) => {
    const emojiListItem = document.createElement('li');

    emojiListItem.classList.add('emoji');
    emojiListItem.classList.add('emoji--' + userEmotion);
});
//=============================================================
/*Придётся создавать объект emojiImage, где по ключу (эмоция как в массиве и модификаторе) будут храниться смайлики, а после на основе этого объекта записывать свойство textContent у пункта списка.*/
const userEmotions = [
    'smile',
    'crying',
];

const emojiImage = {
    smile: '🙂',
    neutral: '😐',
    frowning: '🙁',
    angry: '😠',
    crying: '😭',
};

const emojiContainer = document.querySelector('.emojis');

emojiContainer.innerHTML = '';

userEmotions.forEach((userEmotion) => {
    const emojiListItem = document.createElement('li');

    emojiListItem.classList.add('emoji');
    emojiListItem.classList.add('emoji--' + userEmotion);
    emojiListItem.textContent = emojiImage[userEmotion];
});
//=======================================================================
/*
А вот теперь уже можно и вставлять вновь созданные пункты на страницу, задача решена.

Ещё раз о минусах:

    пришлось продублировать информацию — завести объект emojiImage для хранения смайликов в JavaScript-коде;

    пришлось заново создать пункты списка, а старые удалить. По сути получается, что старые и не нужны.

Плюсы:

    просто.

 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiImage = {
    smile: '🙂',
    neutral: '😐',
    frowning: '🙁',
    angry: '😠',
    crying: '😭',
};

const emojiContainer = document.querySelector('.emojis');

emojiContainer.innerHTML = '';

userEmotions.forEach((userEmotion) => {
    const emojiListItem = document.createElement('li');

    emojiListItem.classList.add('emoji');
    emojiListItem.classList.add('emoji--' + userEmotion);
    emojiListItem.textContent = emojiImage[userEmotion];

    emojiContainer.append(emojiListItem)
});
//===========================================================================
/*
Переходим к варианту № 2, задача прежняя.

В этот раз мы попробуем использовать уже существующую разметку, а точнее мы сохраним пункты с нужными эмоциями. Для сохранения используем DocumentFragment.

Нам по-прежнему потребуется метод .forEach(), только реализация колбэк-функции будет иной.
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');
const emojiListFragment = document.createDocumentFragment();

userEmotions.forEach((userEmotion) => {

});
//=============================================================================
/*
Для решения задачи мы найдём все пункты списка, совпадающие с элементами массива эмоций userEmotions, и сложим их во фрагмент.

Конечно, если такие пункты списка существуют. Чтобы проверить это, добавим условие if.

Обратите внимание, мы не используем .cloneNode(true) перед вставкой во фрагмент, чтобы это были именно те же самые пункты списка. Даже видно, что они пропали со страницы.
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');
const emojiListFragment = document.createDocumentFragment();

userEmotions.forEach((userEmotion) => {
    const emojiListItem = emojiContainer.querySelector('.emoji--' + userEmotion);

    if (emojiListItem) {
        emojiListFragment.append(emojiListItem);
    }
});

//=========================================================================
/*А дальше всё, что нам остаётся, это удалить ненужные пункты из списка и вставить на их место фрагмент, где мы заботливо сохранили нужные, задача решена.

    Ещё раз о минусах:

    не всегда получится обойтись без .cloneNode(true). Ведь иначе мы «портим» шаблон;

приходится перекладывать DOM-элементы во фрагмент, а после вставлять обратно.

    Плюсы:

тоже просто;

не завязываемся на разметку в JavaScript-коде.
*/
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');
const emojiListFragment = document.createDocumentFragment();

userEmotions.forEach((userEmotion) => {
    const emojiListItem = emojiContainer.querySelector('.emoji--' + userEmotion);

    if (emojiListItem) {
        emojiListFragment.append(emojiListItem);
    }
});

emojiContainer.innerHTML = '';
emojiContainer.append(emojiListFragment);

//======================================================================
/*
И, наконец-то, переходим к варианту № 3. Задача прежняя.

В этот раз мы тоже попробуем использовать уже существующую разметку, только ничего никуда перекладывать не будем. Суть проста: мы переберём в цикле каждый пункт списка и проверим, есть ли такая эмоция в массиве userEmotions. Если эмоция есть — пункт остаётся в разметке, нет — удаляется.

Для перебора по-прежнему будем использовать метод .forEach(), только теперь на коллекции emojiList.
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');
const emojiList = emojiContainer.querySelectorAll('.emoji');

emojiList.forEach((emojiListItem) => {
});

//==================================================================
/*
Для проверки будем использовать метод массивов .some(), который вызовем на массиве userEmotions.

В качестве колбэка для метода мы описали функцию, которая превращает эмоцию из массива в модификатор emoji-- и дальше с помощью метода .classList.contains() проверяет, есть ли такой модификатор у текущего пункта списка.
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');
const emojiList = emojiContainer.querySelectorAll('.emoji');

emojiList.forEach((emojiListItem) => {
    userEmotions.some(
        (userEmotion) => emojiListItem.classList.contains('emoji--' + userEmotion),
    );
});

//======================================================================
/*
Если ни один модификатор на основе массива эмоций не совпал, то пункт списка можно удалять из разметки. Для этого вызываем у него метод .remove(), задача решена.
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');
const emojiList = emojiContainer.querySelectorAll('.emoji');

emojiList.forEach((emojiListItem) => {
    const isNecessary = userEmotions.some(
        (userEmotion) => emojiListItem.classList.contains('emoji--' + userEmotion),
    );

    if (!isNecessary) {
        emojiListItem.remove();
    }
});

//=======================================================================
/*
Если логика с методом .some() в колбэке вам кажется сложной, один из плюсов этого подхода, что логику можно заменить.

Например, мы можем заранее создать массив модификаторов modifiers на основе массива эмоций userEmotions.
 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');
const emojiList = emojiContainer.querySelectorAll('.emoji');
const modifiers = userEmotions.map((userEmotion) => 'emoji--' + userEmotion);

emojiList.forEach((emojiListItem) => {

});
//======================================================================
/*
Затем в колбэке .forEach() с помощью метода .classList.item() получить модификатор текущего пункта списка.

А дальше с помощью метода .includes() проверить, есть ли такой модификатор в массиве модификаторов modifiers. Если нет, то пункт списка можно удалять из разметки, задача решена.

Ещё раз о минусах:

    сложно.

Плюсы:

    нет минусов, кроме сложности кода;

    не завязываемся на разметку в JavaScript-коде.

 */
const userEmotions = [
    'smile',
    'crying',
];

const emojiContainer = document.querySelector('.emojis');
const emojiList = emojiContainer.querySelectorAll('.emoji');
const modifiers = userEmotions.map((userEmotion) => 'emoji--' + userEmotion);

emojiList.forEach((emojiListItem) => {
    const modifier = emojiListItem.classList[1]; // 1 - это индекс нужного класса в атрибуте class

    if (!modifiers.includes(modifier)) {
        emojiListItem.remove();
    }
});
//==========================================================
