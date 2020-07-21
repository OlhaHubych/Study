let Module1 = {};

Module1.rewriteParagraph = function ()  {
    let paragraphs = document.getElementsByTagName("p");

    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "PARAGRAPH";
    }
}