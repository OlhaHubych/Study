(function () {
    //get all  elements with attributes 'watermark'
    let wmarkElements = document.querySelectorAll('[watermark]');
    
    for(let i = 0; i < wmarkElements.length; i++) {
        if(wmarkElements[i].type == "text") {//check - if elements is text-field
            wmarkElements[i].value = wmarkElements[i].attributes.watermark.value; //write watermark into  value
            wmarkElements[i].style.color = 'gray'; //set up style for watermark
            wmarkElements[i].style.fontStyle = 'italic';

            //define handlers for focus and blur for text-field element
            wmarkElements[i].addEventListener('focus', handlerFocusElem, false);
            wmarkElements[i].addEventListener('blur', handlerBlurElem, false);
        }
    }

    function handlerFocusElem () {
       if(this.value == this.attributes.watermark.value) { //if user takes focus
            this.value = "";
            this.style.color = 'black';
            this.style.fontStyle = 'normal';
       }
    }

    function handlerBlurElem () {
        if(this.value == "") { //if user hasn't written any symbols
            this.value = this.attributes.watermark.value;
            this.style.color = 'gray';
            this.style.fontStyle = "italic";
        }
    }
})();