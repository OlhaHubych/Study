abstract class TrasportAuto {
    abstract faster(): void;
    abstract slower(speed: number): void;
    protected currentSpeed: number;
    
}




class Car extends TrasportAuto{
    public static wheels: number =  4;
    protected currentSpeed: number = 0;
    //private maxSpeed: number = 30;
    private minSpeed: number =  0;
    private currentColorCar: string = 'black';

    constructor(
        public readonly brandName: string,
        private maxSpeed: number)
    {
        super();
    }

    faster(speed: number = 5) {
        if(speed > this.maxSpeed) {
            speed = this.maxSpeed;
        }
        else if(speed < this.minSpeed) {
            speed = this.minSpeed;
        }

        if(this.currentSpeed < this.maxSpeed)  {
            this.currentSpeed += speed;
        }
        else this.currentSpeed = this.maxSpeed;

        console.log(`faster ${this.currentSpeed}`);
    }
    slower(speed: number) {
        if(speed < this.minSpeed) {
            speed = this.minSpeed;
        }
        else if(speed > this.maxSpeed) {
            speed = this.maxSpeed;
        }

        if(this.currentSpeed > this.minSpeed) {
            this.currentSpeed -= 5;
        }
        else this.currentSpeed =  this.minSpeed;
        console.log(`slower ${this.currentSpeed}`);
    }

    get colorCar() {
        return `Color ${this.currentColorCar}`;
    }

    set colorCar(newColor: string) {
        if(this.currentSpeed == this.minSpeed) {
            this.currentColorCar = newColor;
        }
    }
}

Car.wheels;
let BMW = new Car('BMW', 30);
console.log(BMW);

BMW.faster();
BMW.slower(7);

BMW.colorCar = 'white';
console.log(BMW.colorCar);








