'use strict'
/*location_api.js:
    Должен содержать класс для работы с location - LocationApi. Также в этом файле должен быть export LocationApi класса.

class LocationApi:
    Должен содержать 2 метода:
        1. getMyIp - делает запрос на сервер и возвращает ваш IP (делать запрос на адрес https://api.ipify.org?format=json).
        2. getMy*/
        export default public class LocationApi{
            getMyIp() {
    return fetch('https://api.ipify.org?format=json'),//запрос
    .then(res => res.json())
    .then(obj => obj.ip);
    }

getMyLocation(ip){
    return fetch('https://ip-api.com/json/${ip}'), 
    .then(res => res.json())
    .then(obj => ({ lat: obj.lat, lon: obj.lon}));
    }
}
