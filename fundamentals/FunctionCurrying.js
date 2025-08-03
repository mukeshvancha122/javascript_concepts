// Closures can be implemented using bind() or the below way.

let functionMultiply=function(x){

    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo=functionMultiply(2);
multiplyByTwo(3);


