/*Создайте экземпляр класса, в конструктор которого пользователь будет передавать строковые значения.
 Установите в классе метод для определения функции генератора, которая на каждом значении в свойствах класса устанавливает yield. 
 При вызове данной функции из класса проверьте все значения, введенные пользователем и остановите перебор – в случае если 
 пользователь ввел числовое значение. Ошибку выведите в консоль.
*/


class Generator {
    public arr:string[] = [];

    constructor(public items:string[]){
       for(let i = 0; i < items.length; i++) {
           this.arr.push(items[i]);
       }  
    }

    *addYield(item:number) {
        yield this.arr[item];
    }
}

let generatorString = new Generator(["to", "my", "cold", "98", "sky", "baby"]);

let pattern = /^\d+$/;
let result = "";

for(let i = 0; i < generatorString.arr.length; i++) {

    if(!pattern.test(generatorString.arr[i])) {
        generatorString.addYield(i);
        result += generatorString.arr[i];
        console.log(result);
    }
    else throw new Error("Числа передавать запрещено.");
    
}






/*
let a1: number [] = [2,5,7,8];

let a3 = a1.map(value => value % 2 == 0);
let a4 = a1.filter(value => value % 2 == 0);

console.log("map:" + a3);
console.log("filter:" + a4);
*/

            
