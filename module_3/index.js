'use strict'

 class Human{
     constructor(obj){
    this.name = obj.name;
    this.age = obj.age;
     }
     sayHello(){
     console.log( `Hello, my name is  ${this.name}, i am ${this.age} years old` );  
     }
 }
 class AlevelStudent extends Human{
     static whAreYou(){
        console.log('I am student !');
    }
    static fromHuman(human){
       return new AlevelStudent({name: human.name, age: human.age, marks:[]});
    }
     constructor(obj){
         super(obj);
         this.marks = obj.marks;
         this._power = 0;
     }

     get power(){
         return Math.random();
     }

     set power(value){
       if (typeof value === 'number' && value >= 0){
           this._power = value;
       }
    }

     get avarege(){
         return this.avaregeMark();
     }
//pilotocteg.github.io.alphabet
set power(value){
       this.marks.push(value);  
      }

     sayHello() {
         super.sayHello();
         console.log('I am good!');
     }
     averageMark(){
        let sum = 0;
        for(let i = 0; i < this.marks.lenght; i += 1){
            sum += this.marks[i];
        }
    
        console.log(sum / this.marks.lenght);
    }
 }
AlevelStudent.MIN_MARK = 0;
AlevelStudent.MAX_MARK = 20;