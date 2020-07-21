(function () {
    // ================================ definition ===================================
    //get button-elements
    let goUp = document.querySelector('#btnUp');
    let goDown = document.querySelector('#btnDown');
    let goLeft = document.querySelector('#btnLeft');
    let goRight = document.querySelector('#btnRight');

    //set up handlers
    goUp.onclick = goUpHandler;
    goDown.onclick = goDownHandler;
    goLeft.onclick = goLeftHandler;
    goRight.onclick = goRightHandler;

    //count height and width of field
    let main_div = document.querySelector('.block');
    let main_height = window.getComputedStyle(main_div, null)['height'];
    main_height = main_height.slice(0, length-2);
    main_height = parseInt(main_height);
    console.log(main_height);
    
    let main_width = window.getComputedStyle(main_div, null)['width'];
    main_width = main_width.slice(0, length-2);
    main_width = parseInt(main_width);
    console.log(main_width);

    //count block's width and height
    let block = document.querySelector('.block-car');
    let block_height = window.getComputedStyle(block, null)['height'];
    block_height = block_height.slice(0, length-2);
    block_height = parseInt(block_height);
    console.log(block_height);

    let block_width = window.getComputedStyle(block, null)['width'];
    block_width = block_width.slice(0, length-2);
    block_width = parseInt(block_width);
    console.log(block_width);

    //count edges of field - block won't have to step outside
    let topEdge = main_height - block_height;
    let leftEdge = main_width - block_width;
    console.log(topEdge);

    //set up step
    let step = 50;

    //set up message if user wiil try to step ouyside of field
    let messageAlert = document.createElement('p'),
        show_car = "block-car fas fa-car",
        crash_car = "block-car fas fa-car-crash",
        show_car_color = "royalblue",
        crash_car_color = "red";

    //======================================== main ========================================
    // ---------- down handler ---------
    function goDownHandler () {
        let down = block.style.top; //take current position
        block.className = show_car;
        block.style.color = show_car_color;
        console.log(down);
        
        if(down == "") { //if it is the first step
            block.style.top = step + "px"; //do it
            console.log(down);
        }
        else {
            down = down.slice(0, length-2); //take only numbers without 'px'
            down = parseInt(down); //convert it to number
            console.log(down);
            
            if(down >= topEdge) { //if user try to step outside
                block.className = crash_car;
                block.style.color = crash_car_color;
                messageAlert.innerHTML = "This is the bottom line. A step is not allowed!"; //show massage
                messageAlert.className = "alert";
                document.body.prepend(messageAlert);
                setTimeout(() => {
                    messageAlert.remove(); //hide message
                }, 2000);
            }
            else { //if steps are inside of field
                block.style.top = down + step + "px"; //do step
                block.className = show_car;
                block.style.color = show_car_color;
                console.log(down);
            }
        }
        console.dir(block);
    }
    //------------ up handler --------------
    function goUpHandler () {
        let up = block.style.top;
        block.className = show_car;
        block.style.color = show_car_color;
        console.log(up);

        if(up == "") {
            block.className = crash_car;
            block.style.color = crash_car_color;
            messageAlert.innerHTML = "This is the top line. A step is not allowed!";
            messageAlert.className = "alert";
            document.body.prepend(messageAlert);
            setTimeout(() => {
                    messageAlert.remove();
                }, 2000);
        }
        else {
            up = up.slice(0, length-2);
            up = parseInt(up);
            console.log(up);
            if(up <= 0) {
                block.className = crash_car;
                block.style.color = crash_car_color;
                messageAlert.innerHTML = "This is the top line. A step is not allowed!";
                messageAlert.className = "alert";
                document.body.prepend(messageAlert);
                setTimeout(() => {
                    messageAlert.remove();
                }, 2000);
            }
            else {
                block.style.top = up - step + "px";
                block.className = show_car;
                block.style.color = show_car_color;
                console.log(up);
            }

        }
    }
    //---------- left handler ------------
    function goLeftHandler () {
        let left = block.style.left;
        block.className = show_car;
        block.style.color = show_car_color;
        console.log(left);

        if(left == "") {
            block.className = crash_car;
            block.style.color = crash_car_color;
            messageAlert.innerHTML = "This is the left line. A step is not allowed!";
            messageAlert.className = "alert";
            document.body.prepend(messageAlert);
            setTimeout(() => {
                    messageAlert.remove();
                }, 2000);
        }
        else {
            left = left.slice(0, length-2);
            left = parseInt(left);
            console.log(left);
            if(left <= 0) {
                block.className = crash_car;
                block.style.color = crash_car_color;
                messageAlert.innerHTML = "This is the left line. A step is not allowed!";
                messageAlert.className = "alert";
                document.body.prepend(messageAlert);
                setTimeout(() => {
                    messageAlert.remove();
                }, 2000);
            }
            else {
                block.style.left = left - step + "px";
                block.className = show_car;
                block.style.color = show_car_color;
                console.log(left);
            }
        }
    }
    //----------- right handler ------------
    function goRightHandler () {
        let right = block.style.left;
        block.className = show_car;
        block.style.color = show_car_color;
        console.log(right);

        if(right == "") {
            block.style.left = step + "px";
        }
        else {
            right = right.slice(0, length-2);
            right = parseInt(right);
            console.log(right);
            if(right >= leftEdge) {
                block.className = crash_car;
                block.style.color = crash_car_color;
                messageAlert.innerHTML = "This is the right line. A step is not allowed!";
                messageAlert.className = "alert";
                document.body.prepend(messageAlert);
                setTimeout(() => {
                    messageAlert.remove();
                }, 2000);
            }
            else {
                block.style.left = right + step + "px";
                block.className = show_car;
                block.style.color= show_car_color;
            }
        }
    }
    
} )();