addEventListener('message', function(e) {
    let sqrtResult;
    if(e.data == 0) sqrtResult = 0;
    else sqrtResult = Math.sqrt(e.data);
    console.log(sqrtResult);
    
    postMessage(sqrtResult);

}, false);