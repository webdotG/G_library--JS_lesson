/*
    Вёрстка уже готова, всё остальное на тебе:

        задача считается выполненной и исчезает, если юзер кликнул по чекбоксу;
        если все задачи выполнены, появляется сообщение, что больше задач нет;
        если в пустой список добавляется новая задача, сообщение исчезает;
        чтобы добавить новую задачу, надо ввести описание в поле ввода и нажать «Добавить задачу», задача появится в конце списка.

    Сделай всё быстро и качественно, как ты умеешь. Жду!

Нам доверили сервис! А ведь не так давно мы писали свой первый console.log()!

Отбросим сантименты, мы же профессионалы. Начнём выполнять ТЗ, пойдём по списку. Займёмся удалением выполненных задач. Чтобы что-то делать с задачами, надо их найти и записать в переменные. Это мы умеем. Сам список — элемент с классом todo-list, а каждый элемент списка имеет класс todo-list-item.

Найдём список и каждую задачу в списке с помощью querySelector и querySelectorAll и убедимся, что всё сделали правильно.
 */
var list = document.querySelector('.todo-list');
var items = list.querySelectorAll('.todo-list-item');

for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
}

//==============================================================================================
/*
Событие «change»

Мы нашли все элементы списка. Каждый элемент — отдельная задача. Она состоит из текста и поля с типом checkbox. Такой элемент работает, как переключатель или флаг: если поле пустое, задача ещё не выполнена и ждёт своей очереди. А если внутри стоит отметка, то задача сделана и её можно удалять.

Чтобы что-то сделать с самими задачами, надо поймать ситуации, когда пользователь кликает по чекбоксу и этот элемент становится выбранным. Тут нам пригодятся события.

Мы могли бы добавлять событие клика на всю задачу, на весь элемент <li>, но это решение не оптимальное. Пользователь может случайно кликнуть по задаче, не желая её закрывать.

Можно ловить клик по чекбоксу, это вполне подходящий вариант. Но есть и другое событие, которое тоже подходит — change. Оно срабатывает, когда состояние поля меняется. В случае с чекбоксами, оно срабатывает, когда меняется статус с невыбранного поля на выбранное и наоборот.

Пока мы не нашли чекбоксы внутри элементов списка. Поэтому сначала найдём чекбокс внутри каждой задачи, навесим обработчик и выведем какое-нибудь сообщение в консоль. У нас много элементов, значит алгоритм придётся повторять несколько раз. Поэтому будем использовать функцию. В этом задании мы подготовим эту функцию для работы, а в следующем вызовем её и проверим действительно ли работает наш обработчик. Объявление функции мы уже добавили в код за вас.

Если вы забыли, как добавлять обработчики, можете посмотреть на пример ниже, он показывает синтаксис добавления обработчика:

element.addEventListener('change', function () {
  …
});

А если вы хотите вспомнить, что означает запись из примера, можете заглянуть в это и это задания.

Возможно, вы удивлены тому, что мы перебираем элементы, найденные через querySelectorAll в цикле, как обычный массив. Так делать можно. Потому, что querySelectorAll возвращает коллекцию элементов. Она выглядит как массив, но им не является. Поэтому коллекции называют псевдомассивами. Различия коллекций и массивов мы разберём позже. Пока достаточно знать, что коллекции можно перебирать в цикле, как и массивы. Мы уже встречали коллекции в части «Знакомство с JavaScript в браузере». Например, в этом и этом заданиях.


 */
var list = document.querySelector('.todo-list');
var items = list.querySelectorAll('.todo-list-item');

var addCheckHandler = function (item) {
    // Добавляйте код сюда
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        console.log('Цель достигнута!');
    });
};

for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
}
//========================================================================================

/*
Как работает событие «change»

Мы добавили функцию, навесили обработчик, осталось проверить, как работает обработчик события change.

Вызовем из цикла функцию addCheckHandler для каждого элемента коллекции items.

Обратите внимание, что событие change срабатывает при изменении состояния чекбокса. Это значит, если поле будет выбранным и мы уберём с него отметку, событие тоже сработает.

Работая над списком дел, мы постоянно будем обращаться к методам DOM API. Что такое DOM мы уже знаем, например из этого задания. А что такое API? Это группа методов, которые позволяют взаимодействовать с какой-то частью программы или интерфейса. В случае с DOM API это все методы, которые позволяют что-то делать с DOM-элементами.

В нашем приложении нам пригодятся разные методы DOM API, не только querySelector с addEventListener (да, это тоже методы DOM API). С другими методами мы познакомимся в следующих заданиях.

 */
var list = document.querySelector('.todo-list');
var items = list.querySelectorAll('.todo-list-item');

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        console.log('Цель достигнута!');
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}
//================================================================================
/*
Удаление элемента из списка

Событие срабатывает. Пора заменить вывод в консоль на удаление выполненной задачи.

Удалять элементы со страницы можно разными способами, один из самых простых — вызов метода remove на элементе, который нужно удалить.

element.remove();

Метод из примера выше удалит element из DOM.

Кстати, почему мы использовали именно функцию, а не добавили обработчик на элемент прямо внутри цикла? Всё дело в областях видимости. Мы уже говорили про замыкания, когда делали галерею в этой части про события. Если бы мы навесили обработчик внутри цикла, наша программа работала бы некорректно, потому что удалялся бы только последний элемент коллекции элементов. Если вы забыли, почему могло случиться именно такое поведение, можете освежить знания, начиная с этого задания и заканчивая этим.

Воспользуемся методом remove, чтобы удалить выполненную задачу в нашем приложении.

 */
var list = document.querySelector('.todo-list');
var items = list.querySelectorAll('.todo-list-item');

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}
//========================================================================================
/*
Как проверить длину коллекции

Выполненные цели удаляются! Перейдём к следующему пункту ТЗ:

    задача считается выполненной и исчезает, если юзер кликнул по чекбоксу;
    если все задачи выполнены, появляется сообщение, что больше задач нет;
    если в пустой список добавляется новая задача, сообщение исчезает;
    чтобы добавить новую задачу, надо ввести описание в поле ввода и нажать «Добавить задачу», задача появится в конце списка.

Все задачи будут выполнены, когда из списка list будут удалены все элементы. Сейчас все задачи находятся в коллекции items, её длина равна количеству элементов li в списке. Если задачи будут удалены, то и длина коллекции будет равна 0. И тогда можно показать сообщение.

Пока нам не нужно находить сообщение об отсутствии задач в разметке и пытаться его показать. Сначала убедимся, что длина коллекции действительно уменьшается. Для этого создадим функцию, внутри которой будем проверять длину (кстати, объявление функции мы уже добавили в код за вас). Будем вызывать эту функцию каждый раз после удаления задачи.

В этом задании мы будем использовать строгое сравнение, чтобы избежать непредсказуемых результатов. Строгое равенство записывается так: === (три равно). А если вы забыли, что означает такой вид сравнения и зачем его используют, загляните в это задание, где мы это обсуждали.


 */
var list = document.querySelector('.todo-list');
var items = list.querySelectorAll('.todo-list-item');

var toggleEmptyListMessage = function () {
    // Добавьте проверку сюда
    //В теле функции toggleEmptyListMessage добавьте проверку, что длина коллекции items равна 0, используйте строгое сравнение.
    if (items.length === 0) {
        console.log('Все цели выполнены!');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

//======================================================================================
/*
Отладка кода

Что-то пошло не так. Мы завершили все цели, но строка не вывелась в консоль. Значит, проверка items.length === 0 ни разу не вернула true.

Чтобы разобраться в проблеме, выведем items внутри функции toggleEmptyListMessage и проверим, как меняется длина коллекции при удалении каждой задачи. Возможно, мы что-то упустили из вида.

Это стандартная практика — отлаживать код, если результат работы программы не такой, как ожидалось.
 */
var list = document.querySelector('.todo-list');
var items = list.querySelectorAll('.todo-list-item');

var toggleEmptyListMessage = function () {
    // Добавьте вывод в консоль сюда
    console.log(items);
    if (items.length === 0) {
        console.log('Все цели выполнены!');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}
//=======================================================================================
/*
Статичные и живые коллекции

Мы нашли проблему — длина коллекции items не меняется при удалении задач из списка. Почему так происходит?

querySelectorAll находит необходимые элементы один раз, фиксирует их и всё. Эта запись остаётся статичной и изменения в DOM на неё никак не влияют. Можно сказать, что querySelectorAll работает, как любая переменная, в которую мы записали какое-нибудь значение. Пока мы не переопределим переменную, в ней так и будет находиться то значение, которое мы в неё записали, независимо от того, что происходит в коде.

Поэтому такая коллекция называется статичной.

Кроме статичных существуют живые коллекции элементов, их ещё называют динамическими. Динамические коллекции реагируют на изменения в DOM. Если один из элементов коллекции будет удалён из DOM, то он пропадёт и из коллекции. Есть несколько способов с помощью которых можно получить живую коллекцию, один из них children. Он вызывается на родительском элементе и собирает все дочерние элементы в динамическую коллекцию. Синтаксис такой:

parentElement.children;

Проверим на практике, как работают живые коллекции. Заменим querySelectorAll на children в нашем коде и проверим, как будет работать программа.

В консоли рядом с коллекцией выводится NodeList. Что это?

Это тип этой коллекции, такой тип возвращает querySelectorAll и ряд других методов. Особенность такой коллекции в том, что она может содержать не только DOM-элементы вроде li или div, но и перенос строки, текстовое содержимое элементов в качестве отдельных элементов коллекции. NodeList может быть статичной или динамической, это зависит от того, каким способом она вызвана. Можете подробней почитать о коллекциях такого типа в спецификации и на MDN.

 */
var list = document.querySelector('.todo-list');
var items = list.children;

var toggleEmptyListMessage = function () {
    console.log(items);
    if (items.length === 0) {
        console.log('Все цели выполнены!');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}
//=====================================================================================
/*
Показ сообщения на странице

С живой коллекцией программа стала работать, как надо. Теперь мы можем заменить вывод строки в консоль на показ сообщения на странице приложения.

Для этого нам, как обычно, надо найти сообщение в DOM и записать его в переменную. А затем удалить в нужный момент класс hidden у сообщения, чтобы показать его на странице. Удалять классы мы уже умеем. Используем для этого classList.remove().

Напишем код и проверим, что сообщение появляется при выполнении всех задач в списке.

children возвращает другой тип коллекции — HTMLCollection.

Такая коллекция содержит только DOM-элементы. Текстовое содержимое или переносы строк не могут попасть в неё в виде отдельных элементов. Все HTMLCollection живые в отличие от NodeList. Подробнее об этой коллекции можете почитать в спецификации и на MDN.

 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

//=============================================================================================
/*
Событие «submit»

Мы справились с показом сообщения. Теперь разберёмся с добавлением задачи:

    задача считается выполненной и исчезает, если юзер кликнул по чекбоксу;
    если все задачи выполнены, появляется сообщение, что больше задач нет;
    если в пустой список добавляется новая задача, сообщение исчезает;
    чтобы добавить новую задачу, надо ввести описание в поле ввода и нажать «Добавить задачу», задача появится в конце списка.

Задача добавляется через форму, которая состоит из поля ввода и кнопки. Пользователь должен написать текст задачи, а затем кликнуть по кнопке и задача добавится в список. Но сама она не добавится, придётся ей помочь.

Заглянем в разметку. Атрибут у кнопки внутри формы submit, значит, клик по ней вызовет отправку данных из формы на сервер.

Для добавления задачи можно ловить клики по этой кнопке, но универсальней будет использовать специальное событие submit. Оно срабатывает всегда при отправке формы. Это событие универсально потому, что иногда форму можно отправить не только кликом по кнопке, но и нажатием какой-то клавиши. Например, «Enter».

Найдём форму в разметке, добавим ей обработчик события submit и убедимся, что событие срабатывает.

Пользователь может попробовать отправить форму, не заполняя поле. Обычно, чтобы форма не отправилась «пустой», проверяют содержимое полей этой формы. Но мы так делать не будем. Наш верстальщик добавил полю атрибут required. Он делает ввод текста в поле обязательным. Событие отправки формы сработает только когда в этом поле будет какая-то строка.
 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

// Добавьте обработчик отправки формы сюда
newItemForm.addEventListener('submit', function () {
    console.log('Форма отправилась');
});
//===================================================================================================
/*
Отмена отправки формы

Событие сработало, сообщение вывелось, форма отправилась. Только нам не нужно отправлять данные с формы. Нам нужно отобразить данные из формы на той же странице.

Мы уже обсуждали действия по умолчанию в этом задании. Тогда мы работали с ссылками, теперь пришло время форм. Отправка формы — действие формы по умолчанию, которое нам нужно отменить. Для этого будем использовать evt.preventDefault().

Отменим действие по умолчанию, попробуем снова отправить форму и проверим, что отправка данных больше не происходит
 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    // Добавьте отмену действия по умолчанию сюда
    evt.preventDefault();

    console.log('Форма не отправилась');
});

//=================================================================================================
/*
Как получить текст из поля ввода

Чтобы добавить задачу на страницу, нужно как-то получить её название. Оно написано в поле ввода и оттуда его можно прочитать. Для этого нужно обратиться к свойству инпута value. Оно хранит информацию, введённую в поле.

input.value;

Мы можем сохранить эту строку, а затем добавить в разметку задачи.

Чтобы прочитать value из поля ввода, это поле надо найти и записать в переменную. Мы так и сделаем. Затем найдём содержимое поля и выведем его на страницу.
 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
// Объявите переменную newItemTitle здесь
var newItemTitle = newItemForm.querySelector('.add-form-input');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    // Добавляйте переменную taskText сюда
    var taskText = newItemTitle.value;
    console.log(taskText);
});

//===================================================================================
/*
Шаблоны и тег <template>

У нас есть данные, чтобы создать новую задачу. Мы знаем, в какой момент можно добавить задачу на страницу. Осталось разобраться, как именно будет реализовано добавление нового элемента.

Мы уже создавали новые элементы через createElement, но этот способ долгий. Сначала надо создать элемент, задать ему класс, атрибуты, потом так же создать дочерние элементы, вложить их в родителя и потом отрисовать на страницу.

Было бы удобно, если бы вся необходимая разметка для будущих элементов уже где-то хранилась. Нам бы оставалось только подправить содержимое под каждый элемент. И это можно сделать с помощью тега template.

Он хранит в себе шаблон для будущих элементов. Тег template находится там же, где и вся разметка сайта, только его содержимое не отображается на странице. В нашей разметке тоже есть template. Он хранит шаблонную разметку новой задачи.

Чтобы получить template в JavaScript, его можно найти по названию тега, например, через querySelector('template'). У этого способа есть минус — шаблонов на странице может быть много. Обычно каждому тегу template дают уникальное название и записывают в атрибут id (идентификатор). Значения этого атрибута не могут повторяться на одной странице. По id можно найти необходимый шаблон.
 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
// Объявите переменную taskTemplate здесь
var taskTemplate = document.querySelector('#task-template');
console.log(taskTemplate);

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var taskText = newItemTitle.value;
});

//===========================================================================
/*
Контент тега <template>, document-fragment

Если вы развернёте taskTemplate в консоли, вы увидите, что внутри него есть некий document-fragment, а уже внутри него тот самый шаблон, который нам нужен.

Что это за document-fragment и как из него достать наш шаблон?

document-fragment или просто фрагмент является хранилищем содержимого тега template. Именно благодаря ему разметка из template не отображается на странице. Вы можете в этом убедиться, если добавите самому тегу стили: например, явную ширину и высоту и яркий фоновый цвет. Тогда вы увидите элемент template на странице, но его содержимое нет.

Если искать элементы через querySelector и другие методы поиска внутри template, то мы не получим нужные нам элементы. Они лежат в свойстве content этого тега. Это свойство и содержит document-fragment, внутри которого уже можно искать привычными методами поиска.

<body>
  …
  <template id="text-template">
    <p class="text"></p>
  </template>
</body>

Если мы хотим найти элемент в шаблоне, надо искать так:

var template = document.querySelector('#text-template');
// Нашли template в документе

var content = template.content;
// Получили содержимое, фрагмент

var text = content.querySelector('.text');
// Нашли нужный шаблон

Эту запись можно сократить. Например, записать в отдельную переменную контент, а в другую искомый шаблон.

var textTemplate = document.querySelector('#text-template').content;
var text = textTemplate.querySelector('.text');

Такая запись удобней, потому что отдельно в коде элемент template обычно не используют. Вся работа ведётся с его контентом и шаблоном, который в этом контенте хранится.

В шаблоне можно менять текст, классы, а затем добавлять элементы на страницу. Это мы сделаем в следующих шагах. А пока найдём content и внутри него элемент с классом item, который является шаблоном новой задачи.

 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
//В значении переменной taskTemplate замените document.querySelector('#task-template')
// на document.querySelector('#task-template').content.
var taskTemplate = document.querySelector('#task-template').content;
console.log(taskTemplate);
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');
console.log(newItemTemplate);

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var taskText = newItemTitle.value;
});
//===================================================================================================
//Как клонировать элементы
/*
Мы разобрались с тем, как клонировать элементы. Вернёмся к нашей основной задаче. Мы продолжаем работать над списком дел, нам нужно добавлять новые задачи в список при клике по кнопке «Добавить задачу».

Мы уже нашли шаблон задачи и записали его в переменную newItemTemplate. Попробуем склонировать этот шаблон и записать копию в новую переменную. Выведем копию в консоль, чтобы убедиться, что копирование сработало. Будем использовать глубокое клонирование, чтобы сохранить все элементы в структуре задачи.
 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var taskText = newItemTitle.value;
    // Добавьте переменную task сюда
    var task = newItemTemplate.cloneNode(true);
    console.log(task);
});
//======================================================================================
//Добавление нового элемента в список
/*
Шаблон мы склонировали. Осталось сделать так, чтобы название задачи подставлялось в разметку. После этого можно добавлять задачу на страницу.

Внутри task мы найдём элемент, в котором указано название задачи. И заменим этому элементу знакомый нам textContent на название, введённое в поле ввода.

Настроенный элемент task добавим на страницу, в конец списка list.

 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var taskText = newItemTitle.value;
    var task = newItemTemplate.cloneNode(true);
    // Добавьте сюда переменную taskDescription
    var taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;
    list.appendChild(task);
});
//======================================================================================
//Удаление новой задачи в списке
/*
Задача добавляется! Но пока не удаляется. И сообщение не исчезает хоть его текст становится неактуальным при добавлении хотя бы одной новой задачи. Будем фиксить.

Чтобы задачи удалялись, надо повесить обработчик на чекбокс. При изменении статуса чекбокса будем удалять задачу из списка… Ничего не напоминает? Мы уже писали этот код, он есть в функции addCheckHandler. Мы передавали в эту функцию те элементы списка, которые уже были на странице. Теперь у нас есть новый элемент, который до этого не существовал, и его тоже надо передать в эту функцию, чтобы добавить обработчик.

Мы будем передавать task в функцию addCheckHandler до того, как будем добавлять этот элемент на страницу. Тогда в списке будет появляться элемент с обработчиком и всем необходимым функционалом. Мы как будто сначала настраиваем элемент, а уже затем добавляем его на страницу.

Сначала добавим обработчик и убедимся, что новая задача удаляется. А уже затем разберёмся с исчезновением сообщения.
 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var taskText = newItemTitle.value;
    var task = newItemTemplate.cloneNode(true);
    var taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;

    // Добавьте вызов функции addCheckHandler сюда
    addCheckHandler(task);
    list.appendChild(task);
});
//============================================================================================
//Очистка поля ввода
/*
Задача добавляется и удаляется, ура!

Осталась пара мелочей. Нужно прятать сообщение, если задачи в списке появились. Для этого добавим ветку else в функцию toggleEmptyListMessage. В ней будем добавлять класс hidden абзацу с сообщением. Будем вызывать эту функцию сразу после того, как задача добавилась в список.

Ещё будем удалять текст из поля ввода после того, как задача добавилась на страницу. Это маленький, но приятный элемент для пользователей — не нужно каждый раз перед добавлением новой задачи удалять текст руками.

 */
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    } else {
        emptyListMessage.classList.add('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var taskText = newItemTitle.value;
    var task = newItemTemplate.cloneNode(true);
    var taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;
    addCheckHandler(task);

    list.appendChild(task);
    toggleEmptyListMessage();
    newItemTitle.value = '';
});
//=================================================================================================
