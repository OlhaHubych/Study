class Cat {
    constructor() {
        this.nameCat = "Snow";
        this.type = "domestic cat";
        this.zooType = "cat";
        this.leavingPlace = "house";
        this.paws = 3;
        this.favoriteFood = ["milk", "meat"];
    }
    eat() {
        return `Cat ${this.nameCat} eats ${this.favoriteFood}.`;
    }
    move() {
        return `This cat ${this.nameCat} moves by paws. It has ${this.paws} paws.`;
    }
    introduce() {
        return `Hi, My name is ${this.nameCat}, I'm a ${this.type}. In the nature I'am called "${this.zooType}". I leave in the ${this.leavingPlace}.`;
    }
}
class Bird {
    constructor() {
        this.type = "wild world bird";
        this.zooType = "hummingbird / colibri";
        this.leavingPlace = "wild world";
    }
    eat() {
        return `This bird ${this.zooType} eats insects`;
    }
    move() {
        return `This bird ${this.zooType} flies in the air`;
    }
    introduce() {
        return `Hi, I'm a ${this.type}. In the nature I'am called "${this.zooType}". I leave in the ${this.leavingPlace}.`;
    }
}
class Fish {
    constructor() {
        this.nameFish = "Fishy";
        this.type = "domestic fish";
        this.zooType = "Astronotus ocellatus";
        this.leavingPlace = "aquarium";
        this.favoriteFood = ["pisces", "caviar"];
    }
    eat() {
        return `This fish ${this.nameFish} eats ${this.favoriteFood}.`;
    }
    move() {
        return `This fish ${this.nameFish} has fins and swims`;
    }
    introduce() {
        return `Hi, My name is ${this.nameFish}, I'm a ${this.type}. In the nature I'am called "${this.zooType}". I leave in the ${this.leavingPlace}.`;
    }
}
let cat = new Cat();
console.log(cat.introduce() + "\n" + cat.move() + "\n" + cat.eat());
let fish = new Fish();
console.log(fish.introduce() + "\n" + fish.move() + "\n" + fish.eat());
let bird = new Bird();
console.log(bird.introduce() + "\n" + bird.move() + "\n" + bird.eat());
//# sourceMappingURL=interface.js.map