//constructor
function Handler (selector, event, handler, capture) {
    this.selector = selector;
    this.event = event;
    this.handler = handler;
    this.capture = capture;
}

//set up handler for element
Handler.prototype.setHandler = function () {
    let element = document.querySelector(this.selector);
    element.addEventListener(this.event, this.handler, this.capture);
} 


