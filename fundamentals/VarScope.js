// function example(){
    
//     console.log(a);
//     var a=10;
// } gives undefined

// function example(){
//     var a=10;
//     // var a=20
//     console.log(a);
// }

// example();

function scopeCheck(){
    let a = 10;
    var b = 20;
    const c = 30;
    console.log(a);
}

console.log(a);
console.log(b);
console.log(c);
