addEventListener('message', function(e) {
    
    console.log(e.data[0], e.data[1]);
    let powResult = Math.pow(e.data[0], e.data[1]);
    postMessage(powResult);

}, false);