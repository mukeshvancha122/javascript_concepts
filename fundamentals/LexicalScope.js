/*
Lexical scoping: defines the scope of the variables

Global scope: top
local: variables defined in the function or a block
block scope and the nested scope
*/

// variable shadowing : always try avoiding its the bad practice
let n = 5;  // Outer variable
function a() {
    let n = 10;  // Inner variable that shadows the outer one
    console.log(n);  // 10 (inner n is used here)
}
a(); 
console.log(n);  // 5 (outer n is still used here)