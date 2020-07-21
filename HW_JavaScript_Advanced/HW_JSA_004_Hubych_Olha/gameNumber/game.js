(function () 
{
    //----------------------------- definition ----------------------------------

    //=========================constructor for tooltip===========================
    function Tooltip () {
        this.tooltip = document.createElement('div'); //tooltip - it is a div
        this.tooltip.style.position = 'absolute'; 
        this.tooltip.style.left = '0px';
        this.tooltip.style.top = '0px';
        this.tooltip.style.visibility = 'hidden';
        this.tooltip.className = 'tooltip'; //style for tooltip
    }

    //tooltip's methods
    Tooltip.prototype.show = function (text) { //show tooltip
        this.tooltip.innerHTML = text; //add text
        this.tooltip.style.visibility = 'visible'; 

        if(this.tooltip.parentNode != document.body) {
        document.getElementsByClassName('tool')[0].append(this.tooltip);//add tooltip in DOM
        }
            
    }

    Tooltip.prototype.hide = function ()  { //hide tooltip
        this.tooltip.style.visibility = "hidden";
    }
    //==================== end tooltip's constructor ================================

    //random function to create main-number
    let number = (Math.ceil(Math.random() * 100)); // returns a random integer from 1 to 100

    let btnCheck = document.querySelector('#btnCheck');
    let btnShowResult = document.querySelector('#showResult');
    let modal = document.querySelector('#window-modal');
    let text_modal = document.querySelector('#text-modal');
    let btn_close_modal = document.querySelector('#btn-close');

    let user_number;
    let pattern = /^\d+$/;
    let winMessage = document.querySelector('#message');
    let tooltip = new Tooltip();

    btnCheck.addEventListener('click', btnCheckHandler, false); 
    btnShowResult.addEventListener('click', btnShowResultHandler, false);
    window.addEventListener('click', function (event){
        if(event.target == modal) {
            modal.style.display = "none";
        }
    }, false);
    btn_close_modal.addEventListener('click', function () {
        modal.style.display = "none";
    }, false);
    
    //---------------------------------------- main --------------------------------------------
    //handler for checking numbers
    function btnCheckHandler () {
        user_number = document.querySelector('#uNumber').value; //get user-s  number from field
        
        if(user_number <= 0 || user_number > 100 || (user_number.search(pattern) == -1))  { //check for interval
            modal.style.display = "block"; //show modal window
            text_modal.innerHTML = "Incorrect format. Count from 1 to 100";
        }
        else if(user_number == number) {    //if user gets to know main-number
            winMessage.innerHTML = "You win!";
        }
        else if(user_number < number) {
            tooltip.show('My number is greater');
            window.setTimeout(function () {
                tooltip.hide();
            }, 2000);
        }
        else {
            tooltip.show('My number is less');
            window.setTimeout(function () {
                tooltip.hide();
            }, 2000);
        }
    }

    //handler for button - show result
    function btnShowResultHandler () {
        document.querySelector('#uNumber').value = number;
    }
})();