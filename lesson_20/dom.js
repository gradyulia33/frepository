'use strict
/*dom.js:
    Должен содержать класс для работы с dom - Dom. Также в этом файле должен быть export Dom класса.

class Dom:
    Должен содержать 3 метода:
        1. showPreloader - работатет с dom елементом preloader и показывает его
        2. hidePreloader - работатет с dom елементом preloader и скрывает его
        3. setCoordinates(coordinates) - работатет с dom елементом в которые надо поместить текст с коодинатами
'*/
export default class Dom{
    constructor() { 
        this.body = document.getElementsByTagName('body')[0]; 
        this.showPreloader(){
            let preload = document.createElement('div');
            this.preload.style.background="url(preloader.svg)" 
        }
        this.hidePreloader() {
            this.preload.remove();
        } 
        this.setCoordinates(coordinates){
                let res = document.createElement('div');
                res.id = 'res';
                res.innerText = `${coordinates}`;
                document.body.prepend(res);
        }
}
