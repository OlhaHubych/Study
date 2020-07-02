addEventListener('message', function(e) {
    let logResult;
    if(e.data == 0) logResult = 0;
    else logResult = Math.log2(e.data);
    console.log(e.data)

    postMessage(logResult);

}, false);
    
