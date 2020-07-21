import { Cat, Fish, Bird } from "./classes.js";

let cat = new Cat();
console.log(cat.introduce() + "\n" + cat.move() + "\n" + cat.eat());

let fish = new Fish();
console.log(fish.introduce() + "\n" + fish.move() + "\n" + fish.eat());

let bird = new Bird();
console.log(bird.introduce() + "\n" + bird.move() + "\n" + bird.eat());