// function counter() {  
//     // Private variable
//     let count = 0; 
//     return function () {  
//         // Access and modify the private variable
//         count++;
//         return count;
//     };
// }

// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());

function createDiscountCalculator(discountRate) {
  // Closure remembers 'discountRate'
  return function(price) {
    return price - (price * discountRate);
  };
}

const tenPercentOff = createDiscountCalculator(0.10);
const twentyPercentOff = createDiscountCalculator(0.20);

console.log(tenPercentOff(100)); // 90
console.log(twentyPercentOff(100)); // 80



// Memory Leaks: Excessive use of closures may retain unnecessary references to variables, causing memory issues.
// Performance Overhead: Overusing closures might lead to larger memory usage due to retained scopes.