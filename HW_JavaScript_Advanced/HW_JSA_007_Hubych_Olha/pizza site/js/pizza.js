//set up handler for window
window.addEventListener('load', init, false);

//handler for window
function init () {
    //=======================  define =================================
    let isInvalidPersonalInfo = true;  //flag - incorrect personal info
    let isValidChoicePizza = false; //flag  - correct choice of pizza
    let show_result_message; //flag - show result message

    let form = document.forms[0]; //get form
    let quantityOfFields = 0;
    let quantityOfContactFields = 0;

    //count how much text-field we have
    for(let i = 0; i < form.length; i++) {
        if(form.elements[i].type == "text") {
            quantityOfFields++;
            console.log(form.elements[i]);
        }
    }
    quantityOfFields -= 1; // subtract 1 text-field for price-box
    console.log(quantityOfFields);

    //set up handlers for elements
    for(let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].type == "checkbox") {  //set up handlers for all type checkbox
            form.elements[i].addEventListener('click', handlerCheck, false);
        }
        else if(form.elements[i].type == "text") { //set up handlers for all type text
            form.elements[i].addEventListener('change', handlerChange, false);
        }
    }
    //set up handler for form
    form.addEventListener('submit', handlerClick, false); 

    //============================== main  ==============================
    //define message to show it after submitting form
    
    if(show_result_message) {
        console.log(show_result_message);
        let message = "Ваш заказ принят. Ожидайте звонка менеджера";
        document.querySelector('#messageDone').style.color = 'green';
        document.querySelector('#messageDone').innerHTML = message;
    } 
    

    //handler for checkbox
    function handlerCheck () {
        let price = +this.dataset.price; //get price of element
        let sign; //definition of sign

        if(this.checked == true) { //if checkbox onclick
            sign = "+"; 
            if(this.name == "pizzaSize" ) { //if this is a size of pizza
                countSum(price, sign); //sum result
                isValidChoicePizza = true; //flag - checkbox is valid
            }
            else { //if this is ingredient element
                let tmp = this.dataset.checkId;//get it checkId
                if(tmp == "11") {
                    let main = document.querySelector('[data-main-check-id="1"]'); //get mainId of size of pizza
                    if(main.checked == true) { //check - is the size of pizza checked
                        this.checked = true; //check this ingredient-element
                        countSum(price, sign); //sum the price of this ingredient-element
                    }
                    else this.checked = false; //prohibite to check the ingredient
                }
                else if(tmp == "22") {
                    let main = document.querySelector('[data-main-check-id="2"]');
                    if(main.checked == true) {
                        this.checked = true;
                        countSum(price, sign);
                    }
                    else this.checked = false;
                }
                else if(tmp == "33") {
                    let main = document.querySelector('[data-main-check-id="3"]');
                    if(main.checked == true) {
                        this.checked = true;
                        countSum(price, sign);
                    }
                    else this.checked = false;
                }
            }
        }
        else {
            sign = "-";
            if(this.name != "pizzaSize" ) { //if it is  the ingredient element
                countSum(price, sign); //sum the result
            }
            else {
                    if(this.dataset.mainCheckId == "1") { //if the first size of pizza unchecked
                    countSum(price, sign); //sum the result
                    let ingred = document.querySelectorAll('[data-check-id="11"]');  //get all ingredients into this size of pizza
                    for(let i = 0; i < ingred.length; i++) {
                        if(ingred[i].checked == true) { //if some of the ingredients are checked
                            ingred[i].checked = false; //unchecked indredients
                            countSum(+ingred[i].dataset.price, sign);  //sum the result
                        }
                    }
                }
                else if(this.dataset.mainCheckId == "2") {
                    countSum(price, sign);
                    let ingred = document.querySelectorAll('[data-check-id="22"]');
                    for(let i = 0; i < ingred.length; i++) {
                        if(ingred[i].checked == true) {
                            ingred[i].checked = false;
                            countSum(+ingred[i].dataset.price, sign);
                        }
                    }
                }
                else if(this.dataset.mainCheckId == "3") {
                    countSum(price, sign);
                    let ingred = document.querySelectorAll('[data-check-id="33"]');
                    for(let i = 0; i < ingred.length; i++) {
                        if(ingred[i].checked == true) {
                            ingred[i].checked = false;
                            countSum(+ingred[i].dataset.price, sign);
                        }
                    }
                }  
            }
        }
    }
    //count cost
    function countSum (operand, operation) {
        let cost = document.forms[0].finalCost.value; //get field of cost
        cost = +cost;
        switch(operation) { //check the sign
            case "+":   document.forms[0].finalCost.value = cost + operand; //count sum
                        break;
            case "-": if(cost == 0) { //if cost is empty
                            document.forms[0].finalCost.value = "0"; //set up result 0
                        }
                        else {
                            document.forms[0].finalCost.value = cost - operand;//count sum
                        }
                        break;
        }
    }

    //handler for text fields
    function handlerChange () {
        let mainValue = this.value; //get value from field
        let pattern = this.dataset.pattern; //get pattern

        let message = this.dataset.msg; //get message
        let messageId = this.dataset.msgId; //get msgID

        mainValue = mainValue.toLowerCase();
        let result = mainValue.search(pattern); //check
        if(result == -1) { //if test is uncorrect
            document.getElementById(messageId).innerHTML = message; //show message
            isInvalidPersonalInfo = true; //set up flag - invalid data
        } 
        else {
            isInvalidPersonalInfo = false; //set up - valid data
            quantityOfContactFields++;       //count contact fields
            console.log(quantityOfContactFields);
        }
    }

    //handler for form
    function handlerClick (e) {
        let message;
        console.log(quantityOfContactFields);
        if(quantityOfContactFields == quantityOfFields) { //if all contact fields are filled (5 fields for contacts)
            if(isInvalidPersonalInfo == true || isValidChoicePizza== false) { //check validation flags
                message = "Выберите товары и заполните данные о доставке"; 
                document.querySelector('#messageMain').innerHTML = message; //set up message
                show_result_message = false;  //set up flag for result message
                e.preventDefault(); //stop submitting data
            }
            else {
            show_result_message = true;
            tempCount = 0;
            }
        }
        else {
            message = "Заполните все поля доставки товара"; 
            document.querySelector('#messageMain').innerHTML = message; //set up message
            show_result_message = false;  //set up flag for result message
            e.preventDefault(); //stop submitting data
        }
    }
}








