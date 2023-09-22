let countdown = function(a, callback) {
    if(a >= 0) {

        setTimeout(function() {
            document.getElementById('siva').innerHTML=a;
            countdown(a - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function() {
    document.getElementById('siva').innerHTML =
        `<p>HAPPY</p>
        <p>INDEPEDENCE </p>
        <p>DAY</p>`
});