/*
Клонирование и вставка элементов. 1 часть

Мы сохранили шаблон для будущих задач. Осталось «приложить» этот шаблон к нашему коду и отрисовать по нему новую задачу. Чтобы это сделать, отвлечёмся от списка дел и разберём ещё один метод DOM API.

Нельзя просто так взять один элемент и добавить его много раз на страницу. Вставка сработает только один раз.

Давайте убедимся в этом на примере.

Перед нами будет блок с карточками. Шаблон для карточки хранится в теге template.

<body>
  …
  <template id="element-template">
    <div class="el">
      <span></span>
    </div>
  </template>
</body>

Шаблон вставлен на страницу один раз, этот код уже написан. Попробуем вставить этот же шаблон на страницу повторно.

Для вставки элементов на страницу мы будем использовать метод appendChild. Он добавляет указанные элементы в конец родительского блока. С этим методом мы уже работали здесь.

В коде вы обнаружите обращение к дочернему элементу шаблона через element.children[0].

Это нормальный подход для нашего случая. В ближайших 4 заданиях вёрстка не изменится и мы точно знаем, что нам нужен первый дочерний элемент. А так как children — коллекция, которая похожа на массив, мы можем обратиться к первому дочернему элементу по индексу.

=====================================================================================================

<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Клонирование элементов</title>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <div class="pool">
      <div class="el">
        <span>1</span>
      </div>
      <div class="el">
        <span>2</span>
      </div>

    </div>

    <template id="element-template">
      <div class="el">
        <span><!--Номер элемента--></span>
      </div>
    </template>
    <script src="script.js"></script>
  </body>
</html>

 */
// Контейнер для карточек
var pool = document.querySelector('.pool');

// Получаем шаблон карточки
var template = document.querySelector('#element-template').content;
var element = template.querySelector('div');

// Добавляем текстовое содержимое в span
element.children[0].textContent = 86;

// Добавляет элемент в конец блока pool
pool.appendChild(element);

// Раскомментируйте блок ниже

var newElement = document.createElement('div');
newElement.classList.add('el');
newElement.classList.add('el--green');

pool.appendChild(newElement);
pool.appendChild(element);

//======================================================================================================
//Клонирование и вставка элементов. 2 часть cloneNode
/*
Мы вставили шаблон, после него другой элемент и снова попробовали вставить шаблон. В итоге шаблон оказался только один и в конце списка. Почему так произошло?

Потому что элемент только один, даже если это шаблон. Мы не можем вставить один элемент несколько раз в разные места страницы. Мы же не можем быть в нескольких местах одновременно? Вот и элементы DOM не могут.

Поэтому существует клонирование DOM-элементов. Мы можем клонировать любые элементы, в том числе шаблоны, и вставлять эти копии на страницу сколько угодно раз.

Для начала разберёмся, как работает клонирование. Для этого нужно использовать метод cloneNode. Он возвращает склонированный элемент.

Обратите внимание, у этого метода есть аргумент — булево значение. Если передать значение false, то будет скопирован сам элемент со своими классами и атрибутами, но без дочерних элементов.

element.cloneNode(false); // Вернёт склонированный элемент без вложенностей

Попробуем клонировать элемент, передать в cloneNode аргумент false и вставить такой элемент на страницу.

В следующем задании мы узнаем, что происходит, если передать в cloneNode аргумент true или вообще не передавать аргументы. Спойлер: всё странно.
 */

// Контейнер для карточек
var pool = document.querySelector('.pool');

// Получаем шаблон карточки
var template = document.querySelector('#element-template').content;
var element = template.querySelector('div');

// Клонируем элемент
var clonedElement = element.cloneNode(false);
console.log(clonedElement);
pool.appendChild(clonedElement);

//=================================================================================================
/*
Клонирование и вставка элементов. 3 часть

Если при передаче false в cloneNode копируется элемент без вложенностей, то при передаче true всё наоборот. В таком случае клонируется сам элемент вместе со всеми вложенностями. Причём клонируются атрибуты, классы и текстовое содержимое всех вложенностей. Такое клонирование называется глубоким.

Раньше метод cloneNode вёл так себя по умолчанию, даже без передачи true. В новом стандарте это изменилось и без аргумента метод должен делать неглубокое копирование, как если бы был передан false. Но стандарт фиксирует рекомендации, а браузеры решают следовать им или нет. Сейчас не все браузеры перешли на новый стандарт и для обратной совместимости сохраняют старое поведение, когда по умолчанию клонирование было глубоким.

Поэтому лучше всегда передавать булево значение, чтобы избежать непредсказуемого поведения в программах.

element.cloneNode(true);  // Вернёт склонированный элемент со всеми вложенностями
element.cloneNode();      // 0_o

Посмотрим, как работает глубокое клонирование на практике. Скопируем шаблон, добавим в его дочерний элемент текстовое содержимое и добавим шаблон на страницу.

 */

// Контейнер для карточек
var pool = document.querySelector('.pool');

// Получаем шаблон карточки
var template = document.querySelector('#element-template').content;
var element = template.querySelector('div');

// Клонируем элемент
var clonedElement = element.cloneNode(true);

// Добавляем число в span
clonedElement.children[0].textContent = 3;

console.log(clonedElement);
pool.appendChild(clonedElement);

//=============================================================
/*
Клонирование и вставка элементов. 4 часть

Мы познакомились с клонированием элементов, но ещё не попробовали вставить несколько копий на страницу.

Запустим цикл, в теле цикла будем клонировать шаблон, менять содержимое дочернего элемента и последовательно вставлять копии на страницу.

Это похоже на использование трафарета для рисования. Мы прикладываем трафарет много раз и рисуем по нему там, где нужно. При этом сам трафарет у нас один.
 */
// Контейнер для карточек
var pool = document.querySelector('.pool');

// Получаем шаблон карточки
var template = document.querySelector('#element-template').content;
var element = template.querySelector('div');

// Клонируем и наполняем элементы в цикле

for (var i = 1; i <= 10; i++) {
    var clonedElement = element.cloneNode(true);
    clonedElement.children[0].textContent = i;
    pool.appendChild(clonedElement);
}

