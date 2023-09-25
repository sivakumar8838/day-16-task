let siva = document.getElementById('siva');

let countdown1 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='10';
        callback();
    }, 1000);
}

let countdown2 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='9';
        callback();
    }, 1000);
}
let countdown3 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='8';
        callback();
    }, 1000);
}

let countdown4 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='7';
        callback();
    }, 1000);
}

let countdown5 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='6';
        callback();
    }, 1000);
}

let countdown6 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='5';
        callback();
    }, 1000);
}

let countdown7 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='4';
        callback();
    }, 1000);
}

let countdown8 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='3';
        callback();
    }, 1000);
}

let countdown9 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='2';
        callback();
    }, 1000);
}

let countdown10 = function(callback){
    setTimeout(() => {
        siva.innerHTML ='1';
        callback();
    }, 1000);
}
countdown1(function(){
    countdown2(function(){
        countdown3(function(){
            countdown4(function(){
                countdown5(function(){
                  countdown6(function(){
                    countdown7(function(){
                        countdown8(function(){
                            countdown9(function(){
                                countdown10(function(){
                                  setTimeout(() => {
                                    siva.innerHTML = 
                                    `<p><span id="happy">HAPPY</span></p>
                                    <p><span id="independence">INDEPEDENCE</span> </p>
                                    <p><span id="day">DAY</span></p>`
                                   },1000)
                               })
                                  })
                                })
                            })
                        })
                    })
                  })
                })
            })
        })
