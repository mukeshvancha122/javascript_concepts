// Higher order functions: Takes one function as parameter and returns another as a result

function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);

// map, reduce, filter and few other are part of HOF

const arr = [1,3,5,7,8,9]

const sq = arr.map((n)=>{
    n*n;
})
console.log(sq);

const even = arr.filter((n)=>{
    n%2==0;
})
console.log(even)

// higher order functions have: Memoization, currying, function composition
