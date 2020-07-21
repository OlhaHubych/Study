class TrasportAuto {
}
let Car = (() => {
    class Car extends TrasportAuto {
        constructor(brandName, maxSpeed) {
            super();
            this.brandName = brandName;
            this.maxSpeed = maxSpeed;
            this.currentSpeed = 0;
            this.minSpeed = 0;
            this.currentColorCar = 'black';
        }
        faster(speed = 5) {
            if (speed > this.maxSpeed) {
                speed = this.maxSpeed;
            }
            else if (speed < this.minSpeed) {
                speed = this.minSpeed;
            }
            if (this.currentSpeed < this.maxSpeed) {
                this.currentSpeed += speed;
            }
            else
                this.currentSpeed = this.maxSpeed;
            console.log(`faster ${this.currentSpeed}`);
        }
        slower(speed) {
            if (speed < this.minSpeed) {
                speed = this.minSpeed;
            }
            else if (speed > this.maxSpeed) {
                speed = this.maxSpeed;
            }
            if (this.currentSpeed > this.minSpeed) {
                this.currentSpeed -= 5;
            }
            else
                this.currentSpeed = this.minSpeed;
            console.log(`slower ${this.currentSpeed}`);
        }
        get colorCar() {
            return `Color ${this.currentColorCar}`;
        }
        set colorCar(newColor) {
            if (this.currentSpeed == this.minSpeed) {
                this.currentColorCar = newColor;
            }
        }
    }
    Car.wheels = 4;
    return Car;
})();
Car.wheels;
let BMW = new Car('BMW', 30);
console.log(BMW);
BMW.faster();
BMW.slower(7);
BMW.colorCar = 'white';
console.log(BMW.colorCar);
//# sourceMappingURL=main.js.map