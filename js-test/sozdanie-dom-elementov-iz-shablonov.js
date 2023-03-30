/*

    <div class="pool pool-1">
        <div class="el el-1"><span>0</span></div>
        <div class="el el-2"><span>1</span></div>
        <div class="el el-3"><span>2</span></div>
        <div class="el el-4"><span>3</span></div>
        <div class="el el-5"><span>4</span></div>
        <div class="el el-6"><span>5</span></div>
    </div>

    <div class="pool pool-2">

    </div>

    <template id="element-template">
      <div class="el">
        <span><!--Номер элемента--></span>
      </div>
    </template>

 */

const pool2 = document.querySelector('.pool-2');

const templateFragment = document.querySelector('#element-template').content; // Находим фрагмент с содержимым темплейта

const template = templateFragment.querySelector('div'); // В фрагменте находим нужный элемент

const fragment = document.createDocumentFragment();

for (let i = 0; i < 6; i++) {
    const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
    element.classList.add('el-' + (i + 1)); // Добавляем порядковый класс, который начинается с единицы, а не с нуля, поэтому 'i + 1'
    element.children[0].textContent = i; // Записываем содержимое
    fragment.appendChild(element);
}

pool2.appendChild(fragment);
