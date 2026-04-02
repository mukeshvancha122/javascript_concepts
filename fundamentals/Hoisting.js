/**
 * Js phases: memory phase(memory is create for functions and variables in global context)
 *  phase 2 - compilation where the actual allocation is done.
 * Hoisting: Its the declaration scope for the var, function during the compilation phase (2)
 * Temporal dead zone (TDZ) is the important concept: Its only occurred with the variables initialized with let and const
 */


/* 1) Var Hoisting; the declaration is hoisted to the top, 
but its value is not assigned until the code execution reaches the variable’s 
initialization. 
This results in the variable being assigned undefined during the hoisting phase */
console.log(x);
// undefined
var x=9;

/* 2) Let and const Hoisting: Remain the TDZ:I f the block until their declaration 
is encountered. Accessing them before their declaration will throw a ReferenceError.

Variable is hoisted but in the TDZ
*/

console.log(a);
let a = 10;
const b = 20;

/* 3) Function hoisting */
hello();
function hello(){
    console.log("hellow");
} 

// 4) Function expression hoisting
history();
var history = () =>{
    console.log("history")
}

// 7. re-declaring variables: Can be done using var
var c=20;
var c=30; 
