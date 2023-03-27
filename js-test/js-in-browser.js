/*
    Мяу! Есть интернет-магазин с готовой вёрсткой. Нужно показывать в интерфейсе актуальную информацию о товарах: спецпредложения и наличие на складе.

    Данные приходят в виде массива объектов catalogData. Каждый объект соответствует одному товару и содержит свойства isAvailable (в наличии товар или нет) и isSpecial (является ли товар спецпредложением или нет).

    Для каждого состояния товара есть соответствующий класс:

        product--available для товара в наличии;
        product--unavailable соответствует товару, которого в наличии нет;
        product--special для спецпредложения.

    Жду результата! Не задерживайся, часики тикают!

Каждый элемент массива с данными соответствует какому-то товару на странице. Мы уже умеем искать DOM-элементы и могли бы находить товары по одному с помощью querySelector. Например, используя цикл:

for (…) {
  var product = querySelector('.product:nth-child(' + i + ')');
}

Метод querySelector устроен так, что всегда возвращает только первый найденный элемент. Поэтому на каждой итерации приходилось бы запускать поиск очередного элемента по DOM-дереву. Такой поиск — довольно дорогая операция.

Намного оптимальней получить список всех элементов до цикла, а внутри цикла этот список перебирать. В этом нам поможет метод querySelectorAll, который возвращает не первый найденный элемент, а список (коллекцию) всех элементов, подходящих по селектору.

Создадим функцию updateCards, в которой и будем вести работу над задачей. Найдём все товары на странице и убедимся, что поиск работает верно.
 */

var catalogData = [
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    },
    {
        isAvailable: true,
        isSpecial: true
    },
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    }
];

var updateCards = function (products) {
    var elements = document.querySelectorAll('.product');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        console.log(element);
        element.classList.add('product--available');
    }

};

updateCards(catalogData);
console.log(updateCards(catalogData));
//=========================================================================================================



var catalogData2 = [
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    },
    {
        isAvailable: true,
        isSpecial: true
    },
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    }
];

var updateCards2 = function (products) {
    var elements = document.querySelectorAll('.product');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        console.log(element);
        var product = products[i];
        console.log(product);
        var availabilityClass = 'product--available';
        if (!product.isAvailable) {
            availabilityClass = 'product--unavailable';
        }
        element.classList.add(availabilityClass);
    }
};

updateCards2(catalogData2);
console.log(updateCards2(catalogData2));
//=================================================================================================
/*

Осталось найти товар дня и добавить ему соответствующий класс.

Алгоритм простой: проверяем значение свойства isSpecial текущего товара, если оно равно true, добавляем DOM-элементу класс product--special.

И не забудем убрать из кода все выводы в консоль — в рабочей программе их быть не должно.

Задание Кекса выполнено!
 */

var catalogData3 = [
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    },
    {
        isAvailable: true,
        isSpecial: true
    },
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    }
];

var updateCards3 = function (products) {
    var elements = document.querySelectorAll('.product');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        var product = products[i];

        var availabilityClass = 'product--available';
        if (!product.isAvailable) {
            availabilityClass = 'product--unavailable';
        }

        element.classList.add(availabilityClass);

        if (product.isSpecial) {
            element.classList.add('product--special');
        }

    }
};

updateCards3(catalogData3);
//=====================================================================================================================
/*
Двенадцатая программа: «Испытание мороженым»

Кекс оценил, как вы справились с задачей по магазину перфораторов, и доверил вам ещё одно боевое задание.

    Мяу! На сайте магазина мороженого надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит».

    Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:

        inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
        isHit. Если значение true — мороженое самое популярное среди покупателей.

    Каждому состоянию товара соответствует специальный класс:

        Товар в наличии — good--available.
        Недоступный товар — good--unavailable.
        Хит продаж — good--hit.

    Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.

Жмите Заказчик, принимай программу!, чтобы позвать Босса. Он проверит правильно ли работает ваша программа. Удачи!
 */

var assortmentData = [
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    },
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    }
];

//создаем функцию
var updateCards5 = function (cards){
    //нам надо добавить классы карточкам товара
    //идём в html и смотрим что в списке UL GOODS
    //есть карточки товара LI с классом GOOD
    //в переменную ELEMENTS запишем все карточки товара с классом GOOD
    var elements = document.querySelectorAll('.good');
    //у нас есть коллекция карточек и массив с данными для каждой карточки
    //логика такая
    //берем поочереди каждую карточку и каждый обьект из массива
    //добавляем карточке классы которые описаны в обьекте
    for ( var i = 0; i < cards.length; i++){
        //будем перебирать коллекцию карточек
        //и массив с обьектами данных карточек одновременно
        //индекс карточки и индекс обьекта данных буду совпадать
        var element = elements[i];//записываем текущую карточку из коллекции
        var card = cards[i];//текущий обьект из массива данных
        var availabilityClass = 'good--unavailable';//переменная в котрую я положил класс который отмечает что товара НЕТ В НАЛИЧИИ
        if(card.inStock) { //делаю проверку если в обьекте CARDS значение INSTOK = TRUE то
            availabilityClass = 'good--available'; //меняю значение переменной на класс который говорит что ТОВАР ЕСТЬ В НАЛИЧИИ
        }
        element.classList.add(availabilityClass);//добавляю текущему элементу класс в зависимости от того как он прошел проверку

        if(card.isHit) {
            element.classList.add('good--hit');
        }
    }
};

//вызываем фнкцию и передаем ей данные массива
updateCards5(assortmentData)

/* Техническое задание

Мяу! На сайте магазина мороженого надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит».

Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:

- inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
- isHit. Если значение true — мороженое самое популярное среди покупателей.

Каждому состоянию товара соответствует специальный класс:

Товар в наличии — good--available.
Недоступный товар — good--unavailable.
Хит продаж — good--hit.

Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.

*/
