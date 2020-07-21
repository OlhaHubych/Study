(function () {
    let getBlock = function (class_name) {
        let block = document.querySelector(class_name);
        return block;
    }

    //------------------------- definition --------------------------
    //get divs and set up their start steps
    let block1 = getBlock('.first');
    let left_step_b1 = 10;
    let top_step_b1 = 10;

    let block2 = getBlock('.second');
    let left_step_b2 = 0;
    let top_step_b2 = 10;

    let block3 = getBlock('.third');
    let left_step_b3 = 0;
    let top_step_b3 = 0;

    //-------------------------- main ------------------------------
    //animation  for first div - trajectory: rectangle
    setInterval(function () {
        if(left_step_b1 >= 1000) { 
            if(top_step_b1 >= 500) {
                setInterval(function () {
                    if(left_step_b1 <= 10) {
                    if(top_step_b1 <=10) {
                        block1.style.backgroundColor = 'black';
                    }
                    else  {
                        top_step_b1 -= 10;
                        block1.style.top = top_step_b1 + "px";
                    }
                    }
                    else {
                        left_step_b1 -= 10;
                        block1.style.left = left_step_b1 + "px";
                    }
                }, 50);
            }
            else {
                block1.style.top = top_step_b1 + "px";
                top_step_b1 += 10;
            }
        }
        else  {
            block1.style.left = left_step_b1 + "px";
            left_step_b1 += 10;  
        }
    }, 50);
    
    //animation for second div - trajectory: down-right-up
    setInterval(function () {
        if(top_step_b2 >= 500) {
            if(left_step_b2 <= 50) {
                setInterval(function () {
                    if(top_step_b2 <= 10) {
                        block2.style.backgroundColor = 'black';
                    }
                    else {
                        top_step_b2 -= 10;
                        block2.style.top = top_step_b2 + "px";
                    }
                }, 50);
            }
            left_step_b2 += 50;
            block2.style.left = left_step_b2 + "px";
            
        }
        else {
            block2.style.top = top_step_b2 + "px";
            top_step_b2 += 10;
        }
    }, 50);
    
    //animation for third - trajectory: down-right
    setInterval(function () {
        if(top_step_b3 >= 600) {
            if(left_step_b3 >= 400) {
                block3.style.backgroundColor = 'black';
            }
            else {
                block3.style.left = left_step_b3 + "px";
                left_step_b3 += 10;
            }
        }
        else {
            block3.style.top = top_step_b3 + "px";
            top_step_b3 += 20;
        }
    }, 50);
})();