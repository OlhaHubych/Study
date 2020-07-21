/*
Создайте интерфейс, описывающий поведение животного (свойства, методы передвижения). 
Примените данный интерфейс к классу Cat, Bird, Fish. Подумайте, какие свойства должны быть опциональными.
*/

interface Animal {
    name?: string;
    type: string;
    zooType: string;
    leavingPlace: string; 
    favoriteFood?: string [];

    eat: () => string;
    move: () => string;
}

class Cat implements Animal {
    nameCat = "Snow";
    type = "domestic cat";
    zooType = "cat";
    leavingPlace = "house";

    paws: number = 3;
    favoriteFood = ["milk", "meat"];

    eat(): string {
        return `Cat ${this.nameCat} eats ${this.favoriteFood}.`;
    }

    move(): string {
        return `This cat ${this.nameCat} moves by paws. It has ${this.paws} paws.`;
    }
    introduce(): string {
        return `Hi, My name is ${this.nameCat}, I'm a ${this.type}. In the nature I'am called "${this.zooType}". I leave in the ${this.leavingPlace}.`
    }
   
}

class Bird implements Animal {
    type = "wild world bird";
    zooType = "hummingbird / colibri";
    leavingPlace = "wild world";

    eat(): string {
        return `This bird ${this.zooType} eats insects`;
    }

    move(): string {
        return `This bird ${this.zooType} flies in the air`;
    }
    introduce(): string {
        return `Hi, I'm a ${this.type}. In the nature I'am called "${this.zooType}". I leave in the ${this.leavingPlace}.`
    }

}

class Fish implements Animal {
    nameFish = "Fishy";
    type = "domestic fish";
    zooType = "Astronotus ocellatus";
    leavingPlace = "aquarium";
    favoriteFood = ["pisces", "caviar"];

    eat(): string {
        return `This fish ${this.nameFish} eats ${this.favoriteFood}.`;
    }

    move(): string {
        return `This fish ${this.nameFish} has fins and swims`;
    }
    introduce(): string {
        return `Hi, My name is ${this.nameFish}, I'm a ${this.type}. In the nature I'am called "${this.zooType}". I leave in the ${this.leavingPlace}.`
    }
}

let cat = new Cat();
console.log(cat.introduce() + "\n" + cat.move() + "\n" + cat.eat());

let fish = new Fish();
console.log(fish.introduce() + "\n" + fish.move() + "\n" + fish.eat());

let bird = new Bird();
console.log(bird.introduce() + "\n" + bird.move() + "\n" + bird.eat());
