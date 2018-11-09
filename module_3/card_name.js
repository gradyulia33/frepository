'use strict'
//npm i modulename"mask-input"@1.0.1
//запрос с номером карты
//лоадинг
//перевести джесон обьект в таблицу класс картдата в картдата.джс
//кнопка клиер удаляет таблицу и из локал.сторедж
/*<form>
        <input type="text" class="word" minlength="2">
        <input type="number" class="width"  min="50" max="500">
        <input type="number" class="higth"  min="50" max="500">
        <input type="submit" class= "get"  onclick="func()">
       </form>
*/


function Card_name() {
    const input = document.getElementsByClassName('js-input-selector');
    number.value = input.value;
    function validate(input) {
        input.value = input.value.replace(/[^0-9]/, "");}
    }
    
}