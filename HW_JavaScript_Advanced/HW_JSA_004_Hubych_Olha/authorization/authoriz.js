(function () {
    //=============================== definition =============================
    //constructor for tooltip
    let Tooltip = function () {
        this.tooltip = document.createElement('div');
        this.tooltip.style.visibility = 'hidden';
        this.tooltip.position = 'absolute';
        this.tooltip.className = 'tooltip'
    }
    //methods
    //show tooltip
    Tooltip.prototype.show = function (text) {
        this.tooltip.innerHTML = text;
        this.tooltip.style.visibility = "visible";

        if(this.tooltip.parentNode != document.body) { //if tooltip isn't in document
            document.body.prepend(this.tooltip);
        }
    }
    //hide tooltip
    Tooltip.prototype.hide = function () {
        this.tooltip.style.visibility = "hidden";
    }

    //get button
    let btnLogin = document.querySelector('#btnLogin');
    btnLogin.onclick = btnLoginHandler;

    //create tooltip
    let tooltip = new Tooltip();
    //text for tooltip
    let text;

    //function for checking if login and password are correct
    let checkAutorization = function (uLogin, uPassword) {
        if(uPassword == '12345' && uLogin == 'admin') {
            return 1;
        }
        else if(uPassword != '12345' || uLogin != 'admin') {
            return 0;
        }
    }

    //function for checking if some field isn't empty
    let ckeckEmptyField = function (uLogin, uPassword) {
        if(uPassword == '' && uLogin == '') {
            return 0;
        }
        else if(uPassword  == '' && uLogin != '') {
            return -1;
        }
        else if(uLogin == '' && uPassword != '') {
            return -2;
        }
        else return 1;
    }

    //================================= main ====================================
    //handler for button Login 
    function btnLoginHandler () {
        //get values of login and pasw
        let pasw_field = document.querySelector('#pass');
        let password = pasw_field.value;
        let log_field = document.querySelector('#user');
        let login = log_field.value;
        
        //check if fields aren't empty
        let check_field = ckeckEmptyField(login, password);
        if(!check_field) { //if both fields are empty
            text = "Укажите логин и пароль";
            tooltip.show(text); //show tooltip
            //highlight both fields with color
            pasw_field.style.backgroundColor = 'lightcoral'; 
            log_field.style.backgroundColor = 'lightcoral';

            setTimeout(function () {
                tooltip.hide(); //hide tooltip
                //come back common color of fields
                pasw_field.style.backgroundColor = 'white';
                log_field.style.backgroundColor = 'white';
            }, 2000);
        }
        else if(check_field == -1) { //if passw is empty
            text = "Укажите пароль";
            tooltip.show(text);
            pasw_field.style.backgroundColor = 'lightcoral';

            setTimeout(function () {
                tooltip.hide();
                pasw_field.style.backgroundColor = 'white';
            }, 2000);
        }
        else if(check_field == -2) { //if login is empty
            text = "Укажите логин";
            tooltip.show(text);
            log_field.style.backgroundColor = 'lightcoral';

            setTimeout(function () {
                tooltip.hide();
                log_field.style.backgroundColor = 'white';
            }, 2000);
        }
        else { //if login and passw are full
            if(checkAutorization(login, password)) { //check correct values
                text = 'Вы авторизованы';
                tooltip.tooltip.style.backgroundColor = 'lightgreen';
                tooltip.show(text); //show tooltip

                setTimeout(function () {
                    tooltip.hide();
                }, 2000);
            }
            else { //if values aren't correct
                text = 'Неверный логин или пароль';
                tooltip.show(text); //show tooltip, but don't tell user what exactly is uncorrect
                tooltip.tooltip.style.backgroundColor = 'lightcoral';
                pasw_field.style.backgroundColor = 'lightcoral';
                log_field.style.backgroundColor = 'lightcoral';
                
                setTimeout(function () {
                    tooltip.hide();//hide tooltip
                    pasw_field.style.backgroundColor = 'white';
                    log_field.style.backgroundColor = 'white';
                }, 2000);
            }
        }
    }
})();