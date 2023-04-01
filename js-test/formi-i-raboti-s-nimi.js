/*
 <form action="" method="post" oninput="dayscountval.value=dayscount.value">
  <div class="half-width">
     <label for="dayscount">Количество дней</label>
     1 <input type="range" id="dayscount" name="dayscount" min="1" max="14" step="1"> 14
  </div>
  <div class="half-width output-area">
     <output name="dayscountval">14</output>
  </div>
 </form>




<fieldset>
  <legend>Заявление на получение визы</legend>
     <label for="passport">Номер котопаспорта</label>
     <!-- Текстовое поле ввода -->
     <input type="text" name="passport" pattern="[0-9]{3}-[0-9]{5}" placeholder="Формат номера XXX-XXXXX>
     <label for="tel">Номер телефона</label>
     <input type="tel" name="tel" pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}" placeholder="Формат номера X-XXX-XXX" required>
 </fieldset>

 */

/*<form action="https://echo.htmlacademy.ru/courses" method="post">
    <label for="note">Текст заметки</label>
    <textarea id="note" name="note" rows="9">Пойми, в Норвегии только и говорят, что о море. Как оно бесконечно прекрасно… О закате, который они видели… О том, как солнце, погружаясь в волны, стало алым как кровь. И почувствовали, что море впитало энергию светила в себя, и солнце было укрощено, и огонь уже догорал в глубине.</textarea>
    <div class="buttons">
        <input type="submit" value="Сохранить">
    </div>
</form>*/
<script>
    if (window.localStorage) {
    var elements = document.querySelectorAll('[name]');

    for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
    var name = element.getAttribute('name');

    element.value = localStorage.getItem(name) || element.value;

    element.onkeyup = function() {
    localStorage.setItem(name, element.value);
};
})(elements[i]);
}
}
</script>

//simonenko.su/38146501854/improving-ux-for-web-form
/*
<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Испытание: через тернии к звёздам</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="exam.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
<header class="page-header">Форма отзыва</header>
<main>
  <form action="https://echo.htmlacademy.ru/courses" method="post" oninput="rating.value=sum.value">
   <fieldset> <legend>Личные данные</legend>
    <div class="half-width">
      <label for="id">ID отзыва</label>
      <input type="text" name="id" value="12345" disabled>
    </div>
    <div class="half-width">
      <label for="name">Имя путешественника</label>
      <input type="text" name="name" value="Кекс">
    </div>
    </fieldset>
    <fieldset>
    <legend>Отзыв о поездке</legend>
    <div class="half-width">
      <label for="country" >Страна визита</label>
      <input type="text" name="country" value="Норвегия">
    </div>
    <div class="half-width">
      <label for="city">Город</label>
      <select name="city">
        <option value="Осло" selected>Осло</option>
        </select>
   </div>
    <div class="half-width input">
    <label for="rating">Оценка поездки</label> 0 <input type="range" min="0" max="10" name="rating" id="rating" step="1" value="10"> 10
    </div>
    <div class="half-width output-area">
      <output class="output-area" name="sum" id="sum" for="rating" value="10">10</output>
    </div>
    <label for="review"> Текст отзыва</label> <textarea name="review" id="review" rows="5">Это было просто мяу!</textarea>

    </fieldset>
    <fieldset>
    <legend>Оценка отеля</legend>
    <div class="half-width">
      <label for="hotel">Название отеля</label><input type="text" placeholder="Название по-английски" name="hotel">
    </div>
    <div class="half-width">
      <label for="arrival_date">Дата въезда</label><input type="text" placeholder="В формате дд-мм-гггг" name="arrival_date">
    </div>
    <div class="one-third-width">
      <label for="color">Цвет кроватки</label><input type="color" name="color" value="#FF0000">
    </div>
    <div class="two-third-width">
      <label for="dish_rating">Оценка обедов</label><select name="dish_rating"> <option selected>Подушечки оближешь</option></select>
    </div>
    <label for="fish">Самая вкусная рыба</label><select multiple> <option selected>Норвежский лосось</option>
    <option>Зубатка</option><option selected>Морской окунь</option><option>Карась</option><option>Зеркальный карп</option></select></fieldset>

    <div class="buttons">
      <input type="submit" value="Оценить">
      <input type="reset" value="Сбросить">
    </div>
  </form>
 </main>
 <footer class="page-footer"></footer>
 </body>
</html>

===============================================================================================

Пример: проверка формы перед отправкой

Разберём следующий кейс — отправку формы при нажатии на кнопку submit. Допустим, мы хотим перед отправкой проверять введённые данные, потому что в поле ввода обязательно должно быть значение 'Кекс' и никакое другое. Разметка формы:

<form class="form" action="#" method="post">
  <input class="name" type="text" id="name" name="name">
  <label for="name">Введите имя</label>

  <button type="submit">Готово!</button>
</form>

При нажатии на кнопку «Готово» сработает событие отправки формы submit, и форма отправится вне зависимости от корректности введённого значения, поэтому мы должны перехватить отправку.

// Находим на странице форму и инпут
const form = document.querySelector('.form');
const name = document.querySelector('.name');

// Навешиваем на форму обработчик отправки
form.onsubmit = function(evt) {
  // Проверяем введённое значение на соответствие
  if (name.value !== 'Кекс') {
    // Если значение не подходит, отменяем автоматическую отправку формы
    evt.preventDefault();
    // И выводим предупреждение в консоль
    console.log('Вы не Кекс!');
  }
};

Здесь мы не дали отправить форму при неверно введённом значении. Но если всё в порядке, условие не выполнится, и форма будет отправлена как обычно.

 */
