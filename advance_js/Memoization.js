/*
Memoization: its a cache concept where it reduces the time consumption and 
puts the request into the cache. Its the same concept in react -usememo()
*/

// without memoization
var sum=0;
var calc =(num)=>{
    for(let i=0;i<num; i++){
        sum+=i;
    }
    return sum;
}

// ADD memoize
const memoize=(fun)=>{
    let cache={}
    return function(...args){
        let n=args[0];
        if(n in cache){
            return cache[n];
        }else{
            let result=fun(n)
            cache[n]=result
            return result;
        }
    }
}

console.time();
memoize(calc)
// console.log(calc(5));
console.timeEnd();