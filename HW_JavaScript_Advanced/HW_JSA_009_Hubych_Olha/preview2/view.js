function $ (elementId) {
    return document.querySelectorAll(elementId);
}

let img_arr = ["img/01.jpg", "img/02.jpg"];
    let main_img = $('#main-img');
    let img = [];

    for(let i = 0; i < main_img.length; i++) {
        img[i] = new Image();
        img[i].src = main_img[i];
    }