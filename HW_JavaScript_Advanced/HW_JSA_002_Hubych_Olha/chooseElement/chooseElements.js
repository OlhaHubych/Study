(function () {
    //find buttons
    let butAllParagraphs    = document.getElementById('allParagraphs');
    let butAllLinks         = document.getElementById('allLinks');
    let butDiv              = document.getElementById('div');
    let butCancel           = document.getElementById('cancel');

    //choose all paragraphs - button handler
    butAllParagraphs.onclick = function () {
        //find all paragraphs
        let paragraphs = document.getElementsByTagName('p');
        for(let i = 0; i < paragraphs.length; i++) {
            //apply style
            paragraphs[i].style.border = "3px dotted red";
        }
    }
    //choose all links - button handler
    butAllLinks.onclick = function () {
        let links = document.getElementsByTagName('a');
        for(let i = 0; i < links.length; i++) {
            links[i].style.border = "3px dashed green";
        }
    }
    //choose div - button handler
    butDiv.onclick = function () {
        let div  = document.getElementById('test_di');
        div.style.border = "3px double blue";
    }
    //choose cancel - button handler
    butCancel.onclick = function () {
        //disable border style for all chosen elements
        let paragraphs = document.getElementsByTagName('p');
        for(let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.border = "none";
        }
        let links = document.getElementsByTagName('a');
        for(let i = 0; i < links.length; i++) {
            links[i].style.border = "none";
        }
        let div  = document.getElementById('test_di');
        div.style.border = "none";
    }
})();