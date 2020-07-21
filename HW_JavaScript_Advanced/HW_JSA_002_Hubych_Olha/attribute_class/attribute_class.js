let Module = {};

Module.findClass = function (name_class) {
    let elem = document.getElementsByClassName(name_class);
    console.log(elem);
    return elem;
}

// let MyQuery = {};
// MyQuery.FindClass = function(element){
//     console.log(element);
//     this.class = document.getElementsByClassName(`${element}`);
//     return console.log(this.class);
// }

// MyQuery.FindClass("redButton");

//me other realisation
// let Module = {};

// Module.findClass = function(name_class) {
//     ================================= define function ================================
//     let firstElementsHaveAttributeClass  = []; //for child elements (first line) and elements without class attribute (descendants)
//     let secondElementsHaveAttributeClass = []; //for child elements from first line which have class attribute

//     /* first step
//     find first line children of body who have attribute class 
//     and elements without class attribute */ 
//     for(let i = 0; i < document.body.children.length; i++) {
//         if(document.body.children[i].getAttribute('class') != "") {
//             firstElementsHaveAttributeClass.push(document.body.children[i]);
//         }
//     }
//     console.log(firstElementsHaveAttributeClass);

//     /* second step
//     find body descendants of children elements from first line which have class attribute
//     to find elements with class attribute */
//     for(let i = 0; i < firstElementsHaveAttributeClass.length; i++) {
//         if(firstElementsHaveAttributeClass[i].children != 0)  {
//             for(let j = 0; j < firstElementsHaveAttributeClass[i].children.length; j++){
//                 if(firstElementsHaveAttributeClass[i].children[j].getAttribute('class') != "") {
//                     secondElementsHaveAttributeClass.push(firstElementsHaveAttributeClass[i].children[j]);
//                 }
//             }
//         }
//     }
//     console.log(secondElementsHaveAttributeClass);

//     find class by name
//     let findClass = function (collectionElements) {
//         let nameClass = [];
//         for(let i = 0; i < collectionElements.length; i++) {
//             if(collectionElements[i].getAttribute('class') == name_class) {
//                 nameClass.push(collectionElements[i]);
//             }
//         }
//         return nameClass;
//     }

//     =========================== main =====================================
//     find class by name in first step collection
//     let firstElemNameClass= findClass(firstElementsHaveAttributeClass);
//     find class by name in second step collection
//     let secondElemNameClass = findClass(secondElementsHaveAttributeClass);

//     collect all results
//     let finalElemNameClass = firstElemNameClass.concat(secondElemNameClass);

//     console.log(finalElemNameClass);
// }