let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text');


tooltipButtons[0].onclick = function () {
    tooltipText.textContent = tooltipButtons[0].dataset.tooltipText;
    tooltip.classList.add('opened');
};

tooltipButtons[1].onclick = function () {
    tooltipText.textContent = tooltipButtons[1].dataset.tooltipText;
    tooltip.classList.add('opened');
};

closeButton.onclick = function () {
    tooltip.classList.remove('opened');
};

//==========================================================================================
/*
Цикл for of

Мы подключили наш скрипт к другой новости, в которой оказалось четыре кнопки. Мы кликнули на них, но сработали только первые две, ведь обработчики мы добавили только им. Как быть? Неужели придётся создавать отдельный скрипт для каждой новости и копировать обработчики? Конечно, нет. Используем цикл.

Цикл — это конструкция, которая позволяет выполнить код несколько раз. В JavaScript существуют разные циклы, мы познакомимся с ними в следующих частях. Для нашей же задачи используем цикл for of:

for (переменная of коллекция) {
  // Код, который нужно выполнить несколько раз
}

Цикл for of выполнит код из фигурных скобок столько раз, сколько элементов содержится в коллекции, указанной в круглых скобках. Каждое такое повторение называется итерацией.

При создании цикла в круглых скобках также нужно указать переменную. Обычно для этого объявляют новую переменную и используют её только внутри цикла. На каждой итерации JavaScript будет автоматически записывать в эту переменную очередной элемент коллекции.

Рассмотрим пример:

let elements = document.querySelectorAll('p'); // Находим все абзацы

for (let element of elements) {  // Создаём цикл и переменную
  console.log(element);          // Выводим элементы в консоль
}

Если в коллекции elements два элемента, то JavaScript выполнит следующие инструкции:

// Первая итерация:
// В переменную автоматически записывается первый элемент коллекции
element = elements[0];
// Выполняется код из цикла – первый элемент коллекции выводится в консоль
console.log(element);

// Вторая итерация:
// В переменную автоматически записывается второй элемент коллекции
element = elements[1];
// Повторяется код из цикла, но теперь в консоль выводится второй элемент
console.log(element);

Цикл завершится, когда в коллекции закончатся элементы. После этого JavaScript перейдёт к инструкциям, которые идут после цикла.

Благодаря циклу нам не нужно заранее знать количество элементов в коллекции и копировать обработчики. Это позволяет сделать скрипт универсальным, а код — короче и понятнее.

Проверим, как это работает: создадим цикл и скажем JavaScript вывести в консоль все элементы коллекции tooltipButtons.
 */
let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text');

tooltipButtons[0].onclick = function () {
    tooltipText.textContent = tooltipButtons[0].dataset.tooltipText;
    tooltip.classList.add('opened');
};

tooltipButtons[1].onclick = function () {
    tooltipText.textContent = tooltipButtons[1].dataset.tooltipText;
    tooltip.classList.add('opened');
};

closeButton.onclick = function () {
    tooltip.classList.remove('opened');
};

for (let tooltipButton of tooltipButtons) {
    console.log(tooltipButton);
}

//=====================================================================================================

/*
Добавляем обработчик с помощью цикла

Мы использовали цикл for of, чтобы вывести в консоль все элементы коллекции. Таким же образом мы можем добавить обработчик кликов всем кнопкам в новости. Воспользуемся циклом: на каждой итерации будем добавлять обработчик элементу, который сейчас находится в переменной цикла. В результате мы получим универсальный скрипт — обработчик добавится каждому элементу в коллекции, сколько бы их ни было.

Например:

let elements = document.querySelectorAll('p');

for (let element of elements) {
  // Добавляем обработчик всем элементам по очереди
  element.onclick = function () {
    console.log('Вы кликнули на абзац!');
  };
}

Когда цикл из примера выполнится, обработчики добавятся всем абзацам в коллекции elements, и при клике на каждый из них будет выводиться сообщение в консоль.

Обработчик событий, благодаря которому показываются подсказки на новостном сайте, уже написан. Перенесём его внутрь цикла и заменим обращение по индексу на переменную tooltipButton, которую мы используем в цикле.

// До:
tooltipButtons[0].onclick = function () {
  ...
};

// После:
for (let tooltipButton of tooltipButtons) {
  tooltipButton.onclick = function () {
    ...
  };
}

Обработчик, который мы добавляли второй кнопке, удалим, он больше не нужен. После этого убедимся, что при клике на каждую кнопку появляется попап с подсказкой.

 */

let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text');

closeButton.onclick = function () {
    tooltip.classList.remove('opened');
};

for (let tooltipButton of tooltipButtons) {
    tooltipButton.onclick = function () {
        tooltipText.textContent = tooltipButton.dataset.tooltipText;
        tooltip.classList.add('opened');
    };
}

//=================================================================================================
