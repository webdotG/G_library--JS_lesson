/*
body {
  margin: 30px 0 0 50px;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 24px;
}

fieldset {
  padding: 8px 12px 16px;
  max-width: 200px;
}

legend {
  font-weight: bold;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

li:not(:first-child) {
  margin-top: 4px;
}
==================================================
<form>
    <fieldset>
        <legend>Товары для котиков</legend>
        <ul>
            <li>
                <label>
                    <input type="radio" name="toy_type" value="Дразнилки" checked>
                        Дразнилки
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="toy_type" value="Шуршалки">
                        Шуршалки
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="toy_type" value="Пищалки">
                        Пищалки
                </label>
            </li>
        </ul>
    </fieldset>
</form>*/
/*
Представьте, что вы разрабатываете магазин Кекса и перед вами стоит задача: доработать фильтр. Необходимо, чтобы при выборе фильтра его значение отображалось в заголовке списка товаров.
*/
//==============================================================================
//Первое решение, которое приходит в голову — найти в фильтре все <input> и добавить каждому свой обработчик.
//
// Найдём нужные нам DOM-узлы и опишем функцию-обработчик.
const selectedCategoryContainer = document.querySelector('#selected-category');

const filterInputs = document.querySelectorAll('input[type="radio"]');

function onFilterChange (evt) {
    selectedCategoryContainer.textContent = evt.target.value;
}
//====================================================================

/*
Чтобы решение было более-менее универсальным, добавим обработчики в цикле. Всё работает!

Но с таким решением количество обработчиков равно количеству элементов управления в фильтре. Это плохо, потому что каждый обработчик занимает место в оперативной памяти.

Представьте, что это не магазин Кекса с товарами для котиков, а огромный мегамаркет, где фильтры состоят из сотни разных элементов управления... Не дело!
 */
const selectedCategoryContainer = document.querySelector('#selected-category');

const filterInputs = document.querySelectorAll('input[type="radio"]');

function onFilterChange (evt) {
    selectedCategoryContainer.textContent = evt.target.value;
}

filterInputs.forEach((filterInput) => {
    filterInput.addEventListener('change', onFilterChange)
});
//=====================================================================

/*
Если у вас несколько элементов, которые должны одинаково реагировать на одно и то же событие, то вместо того, чтобы добавлять обработчик каждому элементу, вы можете добавить единый обработчик на общий (родительский) контейнер. Такой обработчик словит событие на стадии всплытия.
 */
const selectedCategoryContainer = document.querySelector('#selected-category');

const form = document.querySelector('form');

function onFilterChange (evt) {
    selectedCategoryContainer.textContent = evt.target.value;
}

form.addEventListener('change', onFilterChange);
//=============================================================================
/*
Останется лишь добавить условие — событие на каком именно дочернем элементе вас интересует.

Без такого условия есть вероятность ложных срабатываний обработчика на соседних элементах. Попробуйте выбрать опцию «Только в наличии».
 */
/*
Добавим условие... готово! При изменении опции «Только в наличии» заголовок не изменяется.

Для проверки мы используем метод .matches(), подробнее про него на MDN.

P.S. Свойство nodeName для проверки в этом случае не подходит, потому что опция «Только в наличии» тоже <input>, и в таком случае к nodeName пришлось бы добавлять ещё какую-нибудь проверку, а так мы обошлись одной.
 */

const selectedCategoryContainer = document.querySelector('#selected-category');

const form = document.querySelector('form');

function onFilterChange (evt) {
    if (evt.target.matches('input[type="radio"]')) {
        selectedCategoryContainer.textContent = evt.target.value;
    }
}

form.addEventListener('change', onFilterChange);
//========================================================================
/*
Бывает так, что метода .matches() недостаточно, если нужно отделить одних «делегатов» от других, тогда на помощь приходит метод .closest(). Он проверяет, соответствует ли указанному селектору сам элемент или любой из его родителей. Если соответствующий DOM-узел найден, метод вернёт его, в противном случае метод вернёт null.
 */

/*
Где это может потребоваться? Предположим, что на некоторые позиции есть 100% скидка. Такие фильтры обёрнуты в блок <li class="discount-100"></li> с пометкой 💯. И по выбору таких фильтров к заголовку нужно добавлять похожую пометку о скидке.
 */
/*
<form>
    <fieldset>
      <legend>Товары для котиков</legend>
      <ul>
        <li>
          <label>
            <input type="radio" name="toy_type" value="Дразнилки" checked>
            Дразнилки
          </label>
        </li>
        <li class="discount-100">
          <label>
            <input type="radio" name="toy_type" value="Шуршалки">
            Шуршалки
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="toy_type" value="Пищалки">
            Пищалки
          </label>
        </li>
        <li class="discount-100">
          <label>
            <input type="radio" name="toy_type" value="Мышки">
            Мышки
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="toy_type" value="Мячики">
            Мячики
          </label>
        </li>
      </ul>
    </fieldset>
    <p>
      <label>
        <input type="checkbox" name="only_available" value="Только в наличии">
        Только в наличии
      </label>
    </p>
  </form>
 */
//В качестве пометки мы используем эмодзи 💯, а добавлять её будем средствами CSS по специальному классу .special-category.
//Итак, если событие сработало на нужном нам <input>, проверяем с помощью метода .closest(), есть ли у него родитель с классом .discount-100.
const selectedCategoryContainer = document.querySelector('#selected-category');

const form = document.querySelector('form');

function onFilterChange (evt) {
    if (evt.target.matches('input[type="radio"]')) {
        selectedCategoryContainer.textContent = evt.target.value;

        if (evt.target.closest('.discount-100')) {

        }
    }
}

form.addEventListener('change', onFilterChange);

//Если такой родитель есть, то, кроме указания значения фильтра, добавляем в заголовок эмодзи 💯 через класс .special-category

const selectedCategoryContainer = document.querySelector('#selected-category');

const form = document.querySelector('form');

function onFilterChange (evt) {
  if (evt.target.matches('input[type="radio"]')) {
    selectedCategoryContainer.textContent = evt.target.value;

    if (evt.target.closest('.discount-100')) {
      selectedCategoryContainer.classList.add('special-category');
    }
  }
}

form.addEventListener('change', onFilterChange);

//Если такого родителя нет, то удаляем класс .special-category. Готово! Попробуйте выбрать фильтр с акцией, а потом какой-нибудь другой.
//
// Кстати, методы .matches() или .closest() будут крайне полезны тем, кто выбрал Кекстаграм личным проектом и хочет использовать делегирование для показа полноразмерных фотографий.
const selectedCategoryContainer = document.querySelector('#selected-category');

const form = document.querySelector('form');

function onFilterChange (evt) {
    if (evt.target.matches('input[type="radio"]')) {
        selectedCategoryContainer.textContent = evt.target.value;

        if (evt.target.closest('.discount-100')) {
            selectedCategoryContainer.classList.add('special-category');
        } else {
            selectedCategoryContainer.classList.remove('special-category');
        }
    }
}

form.addEventListener('change', onFilterChange);

//======================================================
