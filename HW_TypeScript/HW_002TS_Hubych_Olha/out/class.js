class Car {
    constructor(modelName, nameSeller = "SellerBigHouse") {
        this.modelName = modelName;
        this.nameSeller = nameSeller;
    }
    showModel() {
        console.log("Model:" + this.modelName);
    }
    changeModelName(newModelName) {
        this.modelName = newModelName;
        return this.modelName;
    }
    showSeller() {
        return "Seller: " + this.nameSeller;
    }
}
class BMW extends Car {
    constructor(year, _cost, _discount, distribUsedCar, transmission, powerEngine, sits, maxSpeed) {
        super("BMW 4-Series");
        this.year = year;
        this._cost = _cost;
        this._discount = _discount;
        this.distribUsedCar = distribUsedCar;
        this.transmission = transmission;
        this.powerEngine = powerEngine;
        this.sits = sits;
        this.maxSpeed = maxSpeed;
    }
    set model(newModel) {
        this._model = super.changeModelName(newModel);
    }
    get model() {
        return this._model;
    }
    showGeneralCharacteristics() {
        console.log(`Transmission: ${this.transmission}
         \nPower engine: ${this.powerEngine}kW
         \nSits: ${this.sits} 
         \nMax Speed ${this.maxSpeed} km/h`);
    }
    showDistributorsOfUsedCar() {
        console.log(`In order to buy some used car see our partners:`);
        for (let i = 0; i < this.distribUsedCar.length; i++) {
            console.log(`${this.distribUsedCar[i]} \n`);
        }
    }
    showYear() {
        console.log("Year:" + this.year);
    }
    showCostAndSeller() {
        let seller = super.showSeller();
        console.log(`${seller} has price ${this._cost}`);
    }
    countDiscount() {
        return this._cost * this._discount;
    }
    showPriceWithDiscount() {
        let newPrice = this.countDiscount();
        console.log(`Price with discount: ${newPrice}`);
    }
}
class Audi extends Car {
    constructor(year, _cost, _discount, distribUsedCar, transmission, powerEngine, sits, maxSpeed) {
        super("Audi A8");
        this.year = year;
        this._cost = _cost;
        this._discount = _discount;
        this.distribUsedCar = distribUsedCar;
        this.transmission = transmission;
        this.powerEngine = powerEngine;
        this.sits = sits;
        this.maxSpeed = maxSpeed;
    }
    showGeneralCharacteristics() {
        console.log(`Transmission: ${this.transmission}
         \nPower engine: ${this.powerEngine}kW
         \nSits: ${this.sits} 
         \nMax Speed: ${this.maxSpeed} km/h`);
    }
    showDistributorsOfUsedCar() {
        console.log(`In order to buy some used car see our partners:`);
        for (let i = 0; i < this.distribUsedCar.length; i++) {
            console.log(`${this.distribUsedCar[i]} \n`);
        }
    }
    showYear() {
        console.log("Year:" + this.year);
    }
    showCostAndSeller() {
        let seller = super.showSeller();
        console.log(`${seller} has price ${this._cost}`);
    }
    countDiscount() {
        return this._cost * this._discount;
    }
    showPriceWithDiscount() {
        let newPrice = this.countDiscount();
        console.log(`Price with discount: ${newPrice}`);
    }
}
class Ferrari extends Car {
    constructor(year, _cost, _discount, distribUsedCar, transmission, powerEngine, sits, maxSpeed) {
        super("Ferrari California");
        this.year = year;
        this._cost = _cost;
        this._discount = _discount;
        this.distribUsedCar = distribUsedCar;
        this.transmission = transmission;
        this.powerEngine = powerEngine;
        this.sits = sits;
        this.maxSpeed = maxSpeed;
    }
    showGeneralCharacteristics() {
        console.log(`Transmission: ${this.transmission}
         \nPower engine: ${this.powerEngine}kW
         \nSits: ${this.sits} 
         \nMax Speed: ${this.maxSpeed} km/h`);
    }
    showDistributorsOfUsedCar() {
        console.log(`In order to buy some used car see our partners:`);
        for (let i = 0; i < this.distribUsedCar.length; i++) {
            console.log(`${this.distribUsedCar[i]}\n`);
        }
    }
    showYear() {
        console.log("Year:" + this.year);
    }
    showCostAndSeller() {
        let seller = super.showSeller();
        console.log(`${seller} has price ${this._cost}`);
    }
    countDiscount() {
        return this._cost * this._discount;
    }
    showPriceWithDiscount() {
        let newPrice = this.countDiscount();
        console.log(`Price with discount: ${newPrice}`);
    }
}
let newBMW = new BMW(2017, 200000, 0.5, ["SonyCar", "SystemTech", "SkyBlue Company"], "auto", 184, 4, 236);
newBMW.showModel();
newBMW.showYear();
newBMW.showGeneralCharacteristics();
newBMW.showCostAndSeller();
newBMW.showPriceWithDiscount();
newBMW.showDistributorsOfUsedCar();
newBMW.model = "BMW 5-Series";
newBMW.showModel();
console.log("------------------");
let newAudi = new Audi(2018, 500000, 0.3, ["DadyCan Company"], "manual", 340, 5, 250);
newAudi.showModel();
newAudi.showYear();
newAudi.showGeneralCharacteristics();
newAudi.showCostAndSeller();
newAudi.showPriceWithDiscount();
newAudi.showDistributorsOfUsedCar();
console.log("------------------");
let newFerrari = new Ferrari(2017, 650000, 0.6, ["MilkFuel", "Red Coaster", "TechAnimal"], "auto", 350, 2, 270);
newFerrari.showModel();
newFerrari.showYear();
newFerrari.showGeneralCharacteristics();
newFerrari.showCostAndSeller();
newFerrari.showPriceWithDiscount();
newFerrari.showDistributorsOfUsedCar();
//# sourceMappingURL=class.js.map