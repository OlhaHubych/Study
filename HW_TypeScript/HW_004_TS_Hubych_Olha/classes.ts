//if it was export Animal than there can be import {Animal}

import { Interface as Animal } from "./interfaces.js";

export class Cat implements Animal {
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

export class Bird implements Animal {
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

export class Fish implements Animal {
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
