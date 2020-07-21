
enum Glass { 
    Small = 1, 
    Big = 2 
}; 

enum Toppings { 
    Choco = 1, 
    Caramel = 2, 
    Berries = 3 
};
enum Price {
    GlassSm = 10,
    GlassBig = 25,

    TopChoco = 5,
    TopCaram = 6,
    TopBerr = 10,

    Marsh = 5
};

let totalPrice : number = 0;

function countIceCreamPrice (glass: number = Glass.Small,  marshmall?: boolean, default_topping : number = Toppings.Choco, users_topping?: number[]) {


    let getGlass = (glass = Glass.Small) => {
        if(glass == Glass.Small) {
            console.log("Выбран маленький стакан 10 грн");
            totalPrice += Price.GlassSm;
        }
        else if(glass == Glass.Big) {
            console.log("Выбран большой стакан 25 грн");
            totalPrice += Price.GlassBig;
        }
        else {
            console.log("Выбран стакан по-умолчанию: маленький 10грн");
            totalPrice += Price.GlassSm;
        }
        return totalPrice;
    }

    let getToppings = (default_topping: number = Toppings.Choco, users_topping?: number[]) => {
        if(users_topping) {
            let add_def : number = 0;
            for(let i = 0; i < users_topping.length; i++) {
                if(users_topping[i] == Toppings.Choco) {
                    console.log("Выбрана начинка: шоколад 5 грн");
                    totalPrice += Price.TopChoco;
                }
                else if(users_topping[i] == Toppings.Caramel) {
                    console.log("Выбрана начинка: карамель 6 грн");
                    totalPrice += Price.TopCaram;
                }
                else if(users_topping[i] == Toppings.Berries) {
                    console.log("Выбрана начинка: ягоды 10 грн");
                    totalPrice += Price.TopBerr;
                }
                else {
                    add_def += 1;
                    continue;
                }
            }

            if(add_def == 0) {
                return totalPrice;
            }
            else if(add_def == users_topping.length) {
                console.log("Выбрана начинка по-умолчанию: шоколад 5 грн");
                totalPrice += Price.TopChoco;
                return totalPrice;
            }
            else return totalPrice;
        }

        else {
            console.log("Выбрана начинка по-умолчанию: шоколад 5 грн");
            totalPrice += Price.TopChoco;
            return totalPrice; 
        }
    } 

    let getMarsh = (marshmall?: boolean) => {
        if(marshmall === true) {
            console.log("Маршмеллоу добавлено 5 грн");
            return totalPrice += Price.Marsh;
        }
        else {
            console.log("Без маршмеллоу");
        }
    }

    getGlass(glass);
    getMarsh(marshmall);
    getToppings(default_topping, users_topping);

    return totalPrice;
}

function takeOrder () {

    let userOrder :         [number, boolean, number, number[]] = [,,,[]];
    let glassValue :        number;
    let marshmallow :       boolean;
    let topValue:           number;
    let choice :            boolean;
    let arr_toppings :      number [] = [];


    glassValue = Number(prompt("Выберите стакан: 1 - маленький 10 грн, 2 - большой 25 грн. По-умолчанию посчитается маленький стакан", "1"));
    userOrder[0] = glassValue;

    marshmallow = Boolean(confirm("Добавить маршмеллоу? 5 грн"));
    userOrder[1] = marshmallow;

    choice = confirm("Доступные начинки: Шоколад 5 грн, Карамель 6 грн, Ягоды 10 грн. Можно выбрать одну или несколько начинок. Для личного выбора нажмите ОК, для выбора по-умолчанию(шоколад), нажмите Cancel");
    if(choice) {
        let go: boolean;
        do {
            topValue = Number(prompt("Выберите начинку: 1 - Шоколад 5 грн, 2 - Карамель 6 грн, 3 - Ягоды 10 грн."));
            let newLength = arr_toppings.push(topValue);
            if(newLength < 3) {
                go = confirm("Продолжить - ОК, для выхода - Cancel");
            }
            else break;
        }
        while(go);

        userOrder[2] = undefined;
        userOrder[3] = arr_toppings;
    } 
    else {
        userOrder[2] = Toppings.Choco;
        userOrder[3] = undefined;
    }
    return userOrder;
}

let orderItems = takeOrder();
let message: string = `Сумма заказа ${countIceCreamPrice(orderItems[0], orderItems[1], orderItems[2], orderItems[3])} грн`;
console.log(message);


