(function(){
    function $(id) {
        return document.querySelector(id);
    }
    let x = $('#number1'),
        y = $('#number2'),
        result = $('#result'),
        buttons = document.querySelectorAll('#btn-op'),
        btn_control = document.querySelectorAll('#btn-contr');

    let workers = ["js/log.js", "js/sqrt.js", "js/pow.js", "js/pow1.js"],
        worker = [];
        
    let sendDataX, 
        sendDataY,
        xOpen = false, 
        yOpen = false;

    //---------------- handlers  for input fields ---------------------------------------------
    x.addEventListener('change', function(ev) {
        console.log(ev.target.value);
        console.log(ev.target.dataset.pattern);
        console.log(ev.target.value.search(ev.target.dataset.pattern));
        if(ev.target.value.search(ev.target.dataset.pattern) != -1) {
            sendDataX = true;
        }
        else {
            sendDataX = false;
            result.style.color = "red";
            result.textContent = "Incorrect X number";
        }
    }, false);

    y.addEventListener('change', function(ev) {
        if(ev.target.value.search(ev.target.dataset.pattern) != -1) {
            sendDataY = true;
        }
        else {
            sendDataY = false;
            result.style.color = "red";
            result.textContent = "Incorrect Y number";
        }
    }, false);

    //---------------- handlers for buttons X operations/ X&Y operations  ----------------------
    btn_control[0].addEventListener('click', function(){
        
        console.log(buttons[0].style.display == "none");
            if(buttons[0].style.display === "none" || buttons[0].style.display === "") {
                buttons[0].style.display = "inline-block";
                buttons[1].style.display = "inline-block";
                xOpen = true;
                if(yOpen) {
                    y.style.visibility = "visible";
                    $('#y-lebel').style.visibility = "visible";
                }
                else {
                    y.style.visibility = "hidden";
                    $('#y-lebel').style.visibility = "hidden";
                } 
            }
        else {
            buttons[0].style.display = "none";
            buttons[1].style.display = "none";
            y.style.visibility = "visible";
            $('#y-lebel').style.visibility = "visible";
            xOpen = false;
            
            
        }
    }, false);

    btn_control[1].addEventListener('click', function(e){
        
            if(buttons[2].style.display === "none" || buttons[2].style.display === "") {
                buttons[2].style.display = "inline-block";
                buttons[3].style.display = "inline-block";
                y.style.visibility = "visible";
                $('#y-lebel').style.visibility = "visible";
                yOpen = true;
                
            }
            else {
                buttons[2].style.display = "none";
                buttons[3].style.display = "none";
                yOpen = false;
                if(xOpen) {
                    y.style.visibility = "hidden";
                    $('#y-lebel').style.visibility = "hidden";
                    xOpen = false;
                }
            } 
    }, false);

    //---------------- handlers for buttons Math-operations with launching workers ---------------
    for(let i = 0; i < buttons.length; i++)  {
        if(window.Worker) {
            worker[i] = new Worker(`${workers[i]}`);
            buttons[i].addEventListener('click', function (e) {
                if(i == 2 || i == 3) {
                    if(sendDataX && sendDataY) {
                        worker[i].postMessage([x.value, y.value]);
                    }
                    else {
                        sendData = false;
                        return false; 
                    }
                }
                else {
                    if(sendDataX) {
                        worker[i].postMessage(x.value); 
                    } 
                }
                
                worker[i].addEventListener('message', function (e) {
                        result.style.color = "black";
                        result.textContent = e.data;
                    }, false);
            }, false);
        }
    }
})();
    