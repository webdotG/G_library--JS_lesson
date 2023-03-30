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
===================================================================
Рассмотрим методы для управления положением элементов в DOM-дереве. У каждого объекта, описывающего узел DOM-дерева, существует набор методов для управления его содержимым.

Практиковаться мы будем на «пловцах» (блоки от 0 до 5) и двух «бассейнах» (блоки с классом pool). Нашей задачей будет перемещение пловцов между бассейнами.
 */

const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');


//==========================================================================
/*
Первая DOM-операция, которую мы рассмотрим — отсоединение элементов из DOM-дерева методом removeChild. Этот метод удаляет из родителя, на котором вызывается, переданный дочерний элемент.

Обратите внимание, обращаться к контейнерам и элементам мы будем по индексам, чтобы не плодить одноразовых переменных.
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);

//-============================================================================
/*
Важно помнить, что даже удалённый из DOM-дерева элемент может продолжить существовать в памяти компьютера, пока на него есть ссылка. Потому что элементы DOM-дерева — это обычные JavaScript объекты, и они подчиняются тем же правилам. Поэтому даже после удаления элемента из DOM (визуально) мы можем вывести его в консоль по ссылке.

 В нашем случае ссылка на элемент сохранилась в коллекции blocks, потому что в ней записан результат поиска элементов по селектору на тот момент, когда этот элемент присутствовал в DOM.
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);

console.log(blocks[0]);
//============================================================================================

/*
А поскольку у нас по-прежнему есть ссылка на элемент, а сам элемент остаётся в памяти, мы можем продолжать работать с ним. Например, добавить во второй контейнер при помощи метода appendChild.
 */

const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
//==============================================================================
/*
appendChild добавляет элемент в конец родителя, на котором метод вызван.

Обратите внимание, что этим способом можно перемещать любые элементы, даже те, которые всё ещё находятся в DOM-дереве. Поэтому мы просто взяли и переместили элемент под номером 1 во второй контейнер. Важно, что именно перемещать, а не копировать!
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
//==============================================================================================
/*
С помощью appendChild можно даже перемещать элементы внутри блока!
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]); // Мы сначала вставили элемент под номером 0
pools[1].appendChild(blocks[1]); // Затем элемент под номером 1
pools[1].appendChild(blocks[0]); // А после снова элемент под номером 0, из-за чего он "переместился"

//========================================================================

const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]); // Мы сначала вставили элемент под номером 0
pools[1].appendChild(blocks[1]); // Затем элемент под номером 1
pools[1].appendChild(blocks[0]); // А после снова элемент под номером 0, из-за чего он "переместился"

//==============================================================================================
/*
Как альтернатива для добавления элемента в произвольное место родителя существует метод insertBefore. Он добавляет элемент, переданный первым аргументом, перед элементом, переданным вторым аргументом.
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);

pools[1].insertBefore(blocks[3], blocks[0]); // Вставили элемент под номером 3 перед элементом под номером 0

//=======================================================================
/*
Если передать методу insertBefore вторым аргументом null, то добавляемый элемент встанет в конец блока, прямо как в случае с appendChild.
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);

pools[1].insertBefore(blocks[3], blocks[0]);
pools[1].insertBefore(blocks[2], null);
//============================================================================
/*
Для замены одного элемента другим существует метод replaceChild. С ним есть один неприятный нюанс: первым аргументом нужно передавать элемент, на который нужно заменить, а вторым — который, что неочевидно
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);

pools[1].insertBefore(blocks[3], blocks[0]);
pools[1].insertBefore(blocks[2], null);

pools[0].replaceChild(blocks[2], blocks[4]); // Заменили элементом под номером 2 элемент под номером 4
//=======================================================================================
/*
На случай, если с заменяемым элементом нужно производить дальнейшие действия, метод replaceChild возвращает этот элемент как результат выполнения.
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);

pools[1].insertBefore(blocks[3], blocks[0]);
pools[1].insertBefore(blocks[2], null);

const replaced = pools[0].replaceChild(blocks[2], blocks[4]);
/*
16px
Масштаб x1
Ширина 100%

Вставим его в конец первого контейнера.
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);

pools[1].insertBefore(blocks[3], blocks[0]);
pools[1].insertBefore(blocks[2], null);

const replaced = pools[0].replaceChild(blocks[2], blocks[4]);
pools[0].appendChild(replaced);
//========================================================================================
/*
А если нужно не перемещать элементы, а копировать, для этого есть метод cloneNode.

Обратите внимание, что cloneNode копирует только сам элемент и не трогает элементы, которые находятся внутри него, даже текстовые ноды.
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);

pools[1].insertBefore(blocks[3], blocks[0]);
pools[1].insertBefore(blocks[2], null);

const replaced = pools[0].replaceChild(blocks[2], blocks[4]);
pools[0].appendChild(replaced);

pools[0].appendChild(blocks[0].cloneNode());
//=============================================================================================
/*
Чтобы копировать элемент вместе со всем содержимым, нужно передать аргумент true в вызов cloneNode. В этом случае cloneNode выполнит глубокое копирование элемента.
 */
const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);

pools[1].insertBefore(blocks[3], blocks[0]);
pools[1].insertBefore(blocks[2], null);

const replaced = pools[0].replaceChild(blocks[2], blocks[4]);
pools[0].appendChild(replaced);

pools[0].appendChild(blocks[0].cloneNode());
pools[0].appendChild(blocks[0].cloneNode(true));
//======================================================================================
/*
Кроме методов управления, есть методы сравнения элементов. Например, метод contains позволяет узнать, содержится DOM-элемент внутри или нет.

Давайте проверим, находится ли во втором бассейне пловец под номером 0, и если да — «подогреем» воду в этом бассейне.

Кстати, возможности сравнения элементов не ограничиваются методом contains. Есть масса других методов, которые помогают понять, как расположены элементы относительно друг друга. Например, метод compareDocumentPosition, о котором можно почитать в документации.
 */

const pools = document.querySelectorAll('.pool');
const blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);

pools[1].insertBefore(blocks[3], blocks[0]);
pools[1].insertBefore(blocks[2], null);

const replaced = pools[0].replaceChild(blocks[2], blocks[4]);
pools[0].appendChild(replaced);

pools[0].appendChild(blocks[0].cloneNode());
pools[0].appendChild(blocks[0].cloneNode(true));

if (pools[1].contains(blocks[0])) {
    pools[1].style.backgroundColor = 'rgb(242, 201, 188)';
}

//===========================================================================================
/*
Теперь удалим весь код с перемещениями, чтобы элементы вернулись на свои места. И попрактикуемся в удалении, попробуем удалить все элементы из контейнера. А чтобы они заодно удалились из памяти, для обращения к элементам воспользуемся свойством children, а не методом querySelectorAll.
 */

const pools = document.querySelectorAll('.pool');

//=====================================================================================================
/*
Можно предположить, что такой код удалит все элементы в блоке pools[0]. Но на самом деле удалятся только элементы с чётным индексом.

Всё дело в том, что children — живая коллекция. Это значит, что, удаляя какой-то элемент из этой коллекции, мы изменяем её — элементы сдвигаются на освободившееся место, влево, и изменяют свой индекс. blocks[1] превращается в blocks[0], blocks[2] в blocks[1] и так далее.

Таким образом один из элементов по порядку всегда будет удаляться, а второй избежит удаления, просто сместившись.
 */

const pools = document.querySelectorAll('.pool');

for (let i = 0; i < pools[0].children.length; i++) {
    const child = pools[0].children[i];

    child.parentElement.removeChild(child);
}

//===================================================================================
/*Эту проблему можно обойти, если удалять элементы с конца. В таком случае оставшиеся элементы не смогут сместиться влево, и они удалятся один за одним, начиная с последнего.

    Больше о живых и неживых коллекциях DOM-элементов вы можете почитать в материалах раздела.*/

const pools = document.querySelectorAll('.pool');

for (let i = pools[0].children.length - 1; i >= 0; i--) {
    const child = pools[0].children[i];

    child.parentElement.removeChild(child);
}
