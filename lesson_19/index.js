'use strict'
//Human  ({name ='Yulia', years = 20});
function Human(name ='Yulia', years = 20){
            this.name,
            this.years,
}
Human.prototype.sayHello = function(){ console.log( `Hello, my name is  ${this.name}, i am ${this.years} years old` ) };
function AlevelStudent(name, years,marks){
    Human.call(this, name, years);
    this.marks = marks;
}
AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.averageMark = function(){
    let sum = 0;
    for(let i in this.marks) {
        sum += this.marks[i];
    }
    let result = sum / this.marks.length;
    return result;
    console.log(result);
}
