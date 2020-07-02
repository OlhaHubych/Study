addEventListener('message', function(e) {
    
    console.log(e.data[0], e.data[1]);
    let pow1Result = Math.pow(e.data[0], 1/e.data[1]);
    postMessage(pow1Result);

}, false);