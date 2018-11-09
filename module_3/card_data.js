'use strict'
//лоадинг
//перевести джесон обьект в таблицу класс картдата в картдата.джс
//кнопка клиер удаляет таблицу и из локал.сторедж
export default class CardData() {
    Get_info() {
		return fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=5157359818590564`
            .then(res => res.json())
            .then(obj => obj.ip);
    }