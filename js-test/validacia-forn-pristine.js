/*
 <form class="form" autocomplete="off">
    <h3>Доставка Кексокорма</h3>

    <p class="form__item">
      <label for="nickname">Имя питомца для открытки:</label>
      <br>
      <input
        type="text"
        name="nickname"
        id="nickname"
        placeholder="Кексик"
      >
    </p>

    <p>
      Размер:
      <label><input type="radio" name="unit" value="s" checked>S</label>
      <label><input type="radio" name="unit" value="m">M</label>
    </p>

    <p class="form__item">
      <label for="amount">Количество:</label>
      <br>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="10"
      >
    </p>

    <p class="form__item">
      <select name="delivery">
        <option value="Доставка" selected>Доставка</option>
        <option value="Самовывоз">Самовывоз</option>
      </select>
      <select name="date">
        <option value="Сегодня" selected>Сегодня</option>
        <option value="Завтра">Завтра</option>
        <option value="На выходных">На выходных</option>
      </select>
    </p>

    <p>
      <button>Заказать</button>
    </p>
  </form>

 */
const orderForm = document.querySelector('.form');//ищу форму для валидации


const pristine = new Pristine(orderForm, {//задаю правила для пристин
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


pristine.addValidator(orderForm.querySelector('#nickname'));//вызываю метод валидации


orderForm.addEventListener('submit', (evt) => {//вешаю отлов события и щапуская валидацию
    evt.preventDefault();
    pristine.validate();
});
//===============================================================================================
/*
Вторым аргументом в .addValidator() нужно передать функцию проверки. Можно передавать по месту, но удобнее объявить функцию выше и передать по ссылке. Назовём её validateNickname.

Функция проверки обязательно должна возвращать true или false, в зависимости от того, валидно ли поле.

Pristine будет вызывать функцию проверки каждый раз, когда потребуется провалидировать форму. Первым параметром будет передано актуальное значение поля.

Опишем условие, основываясь на длине значения.
 */

const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(orderForm.querySelector('#nickname'), validateNickname);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});

//==================================================================================================
/*
Третьим аргументом нужно передать сообщение об ошибке.

Попробуйте теперь отправить форму, нажав кнопку «Заказать».

Если поле с именем пустое, или имя короче двух символов, или длиннее 50 символов — мы увидим ошибку
 */

const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});

//===================================================================================
/*
Это было несложно. Теперь давайте попробуем провалидировать оставшиеся поля. Но сперва зафиксируем условия валидации.
 */
const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


// УСЛОВИЯ

// Максимальное количество зависит от размера упаковки:
// S-размер - 10 штук, M-размер - 5 штук в одни руки

// Доставка возможна на следующий день или на выходных
// Самовывоз в этот же день, либо на следующий


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});
//===============================================================
/*
Дальше всё аналогично. Сперва находим поле, в этот раз запишем его в переменную, после передаём в .addValidator().

Так же для валидации нам потребуются данные, соотношение количества и размера. Такие вещи удобно хранить в объекте, поэтому заведём maxAmount. Ключ — размер упаковки, значение — максимальное количество в одни руки.
 */
const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


const amountField = orderForm.querySelector('#amount');
const maxAmount = {
    's': 10,
    'm': 5
};

pristine.addValidator(amountField);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});
//======================================================================
/*
Далее опишем функцию валидации. Здесь тоже обычное условие.

Из необычного — как мы добавляем данные для условия. Для этого во время каждой проверки нам нужно найти выбранный на текущий момент размер — переменная unit — после по размеру достать максимально возможное количество из maxAmount, и только потом сравнить со значением в поле.
 */

const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


const amountField = orderForm.querySelector('#amount');
const maxAmount = {
    's': 10,
    'm': 5
};

function validateAmount (value) {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return value.length && parseInt(value) <= maxAmount[unit.value];
}

pristine.addValidator(amountField, validateAmount);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});
//========================================================================================
/*
Похожим образом выстроим сообщение ошибки.

Обратите внимание, что вместо простой строчки с текстом в этот раз мы передаём функцию, которая этот текст генерирует. Так тоже можно! Это удобно, когда у вас текст ошибки вариативный и зависит от каких-то условий, как у нас.

Готово
 */

const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


const amountField = orderForm.querySelector('#amount');
const maxAmount = {
    's': 10,
    'm': 5
};

function validateAmount (value) {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return value.length && parseInt(value) <= maxAmount[unit.value];
}

function getAmountErrorMessage () {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return `Не больше ${maxAmount[unit.value]} штук в одни руки`;
}

pristine.addValidator(amountField, validateAmount, getAmountErrorMessage);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});
//==============================================================================================

/*
Теперь переходим к самому сложному — проверке сопоставления типа доставки с датой. Мы также будем использовать подход с соотношением, только в этот раз у нас может быть несколько вариантов. Поэтому ключами в объекте deliveryOption будут типы доставки, а значениями — массивы с возможными датами.

А ещё .addValidator() мы вызовем на обоих выпадающих списках, ведь ошибку нужно показать всё равно, не важно, что первым выбрал пользователь.
 */
const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


const amountField = orderForm.querySelector('#amount');
const maxAmount = {
    's': 10,
    'm': 5
};

function validateAmount (value) {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return value.length && parseInt(value) <= maxAmount[unit.value];
}

function getAmountErrorMessage () {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return `Не больше ${maxAmount[unit.value]} штук в одни руки`;
}

pristine.addValidator(amountField, validateAmount, getAmountErrorMessage);

function onUnitChange () {
    amountField.placeholder = maxAmount[this.value];
    pristine.validate(amountField);
}

orderForm
    .querySelectorAll('[name="unit"]')
    .forEach((item) => item.addEventListener('change', onUnitChange));


const deliveryField = orderForm.querySelector('[name="delivery"]');
const dateField = orderForm.querySelector('[name="date"]');
const deliveryOption = {
    'Доставка': ['Завтра', 'На выходных'],
    'Самовывоз': ['Сегодня', 'Завтра']
};

pristine.addValidator(deliveryField);
pristine.addValidator(dateField);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});
//===================================================================================
/*
Далее опишем функцию проверки. Логика её проста: если по выбранному типу доставки есть выбранный день — то есть присутствует в массиве — всё отлично. Если нету — будет показана ошибка.
 */
const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


const amountField = orderForm.querySelector('#amount');
const maxAmount = {
    's': 10,
    'm': 5
};

function validateAmount (value) {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return value.length && parseInt(value) <= maxAmount[unit.value];
}

function getAmountErrorMessage () {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return `Не больше ${maxAmount[unit.value]} штук в одни руки`;
}

pristine.addValidator(amountField, validateAmount, getAmountErrorMessage);

function onUnitChange () {
    amountField.placeholder = maxAmount[this.value];
    pristine.validate(amountField);
}

orderForm
    .querySelectorAll('[name="unit"]')
    .forEach((item) => item.addEventListener('change', onUnitChange));


const deliveryField = orderForm.querySelector('[name="delivery"]');
const dateField = orderForm.querySelector('[name="date"]');
const deliveryOption = {
    'Доставка': ['Завтра', 'На выходных'],
    'Самовывоз': ['Сегодня', 'Завтра']
};

function validateDelivery () {
    return deliveryOption[deliveryField.value].includes(dateField.value);
}

pristine.addValidator(deliveryField, validateDelivery);
pristine.addValidator(dateField, validateDelivery);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});
//=======================================================================================================
const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
});


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


const amountField = orderForm.querySelector('#amount');
const maxAmount = {
    's': 10,
    'm': 5
};

function validateAmount (value) {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return value.length && parseInt(value) <= maxAmount[unit.value];
}

function getAmountErrorMessage () {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return `Не больше ${maxAmount[unit.value]} штук в одни руки`;
}

pristine.addValidator(amountField, validateAmount, getAmountErrorMessage);

function onUnitChange () {
    amountField.placeholder = maxAmount[this.value];
    pristine.validate(amountField);
}

orderForm
    .querySelectorAll('[name="unit"]')
    .forEach((item) => item.addEventListener('change', onUnitChange));


const deliveryField = orderForm.querySelector('[name="delivery"]');
const dateField = orderForm.querySelector('[name="date"]');
const deliveryOption = {
    'Доставка': ['Завтра', 'На выходных'],
    'Самовывоз': ['Сегодня', 'Завтра']
};

function validateDelivery () {
    return deliveryOption[deliveryField.value].includes(dateField.value);
}

function getDeliveryErrorMessage () {
    return `
    ${deliveryField.value}
    ${dateField.value.toLowerCase()}
    ${deliveryField.value === 'Доставка' ? 'невозможна' : 'невозможен'}
  `;
}

pristine.addValidator(deliveryField, validateDelivery, getDeliveryErrorMessage);
pristine.addValidator(dateField, validateDelivery, getDeliveryErrorMessage);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});
//=====================================================================================================
/*
И финальный штрих — если не хотите, чтобы Pristine валидировала форму по мере ввода, то передайте при подключении третьим аргументом false.

 */

const orderForm = document.querySelector('.form');


const pristine = new Pristine(orderForm, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
}, false);


function validateNickname (value) {
    return value.length >= 2 && value.length <= 50;
}

pristine.addValidator(
    orderForm.querySelector('#nickname'),
    validateNickname,
    'От 2 до 50 символов'
);


const amountField = orderForm.querySelector('#amount');
const maxAmount = {
    's': 10,
    'm': 5
};

function validateAmount (value) {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return value.length && parseInt(value) <= maxAmount[unit.value];
}

function getAmountErrorMessage () {
    const unit = orderForm.querySelector('[name="unit"]:checked');
    return `Не больше ${maxAmount[unit.value]} штук в одни руки`;
}

pristine.addValidator(amountField, validateAmount, getAmountErrorMessage);

function onUnitChange () {
    amountField.placeholder = maxAmount[this.value];
    pristine.validate(amountField);
}

orderForm
    .querySelectorAll('[name="unit"]')
    .forEach((item) => item.addEventListener('change', onUnitChange));


const deliveryField = orderForm.querySelector('[name="delivery"]');
const dateField = orderForm.querySelector('[name="date"]');
const deliveryOption = {
    'Доставка': ['Завтра', 'На выходных'],
    'Самовывоз': ['Сегодня', 'Завтра']
};

function validateDelivery () {
    return deliveryOption[deliveryField.value].includes(dateField.value);
}

function getDeliveryErrorMessage () {
    return `
    ${deliveryField.value}
    ${dateField.value.toLowerCase()}
    ${deliveryField.value === 'Доставка' ? 'невозможна' : 'невозможен'}
  `;
}

pristine.addValidator(deliveryField, validateDelivery, getDeliveryErrorMessage);
pristine.addValidator(dateField, validateDelivery, getDeliveryErrorMessage);


orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});

