(function () {
    function $ (elementId) {
        return document.querySelectorAll(elementId);
    }

    //----------------------- definition for map ------------------
    let btn_show_map = $('#show-map'),
        btn_hide_map = $('#hide-map'),
        map = $('#map');
    //----------------------- definition for img ------------------
    let img = $('#main-img'),
    arr = ["img/03.jpg", "img/08.jpg", "img/09.jpg", "img/10.jpg", "img/11.jpg"],
    cache = [];
    for(let i = 0; i < arr.length; i++) {
        cache[i] = new Image();
        cache[i].src = arr[i];
    }

    //========================= show map =============================
    for(let i = 0; i < btn_show_map.length; i++) {
        btn_show_map[i].addEventListener('click', 
            function showMapHadler () {
                map[i].style.width = "100%";
                map[i].style.height = "450px";
                btn_hide_map[i].style.visibility = "visible";
        }, false);
    }
    //========================= hide map ==============================
    for(let i = 0; i < btn_hide_map.length; i++) {
        btn_hide_map[i].addEventListener('click', 
            function hideMapHandler () {
                map[i].style.width = "0px";
                map[i].style.height = "0px";
                btn_hide_map[i].style.visibility = "hidden";
        }, false)
    }
    //========================= changing img ===========================
    let isturn = false, inprogress = false;

    for(let i = 0; i < img.length; i++) {
        img[i].addEventListener('mouseover', function rotateImgHandler (e) {
            if(!inprogress) {
                inprogress = true;
                if(!isturn) {
                    e.target.style.transition = "transform 1s linear";
                    e.target.style.transform = "rotateY(90deg)";
                    setTimeout(function() {
                        isturn = true;
                        e.target.src = cache[i].src;
                        e.target.style.transition = "transform 1s";
                        e.target.style.transform = "rotateY(180deg)";
                        setTimeout(function() {inprogress = false;}, 1000);
                    }, 1000);
                }
                else {
                    e.target.style.transition = "transform 1s linear";
                    e.target.style.transform = "rotateY(90deg)";
                    setTimeout(function() {
                        isturn =  false;
                        e.target.src = img[i].dataset.src; 
                        e.target.style.transition = "transform 1s";
                        e.target.style.transform = "rotateY(180deg)";
                        setTimeout(function() {inprogress = false;}, 1000);
                    }, 1000);
                }
            }
        } , false);
    }

})();