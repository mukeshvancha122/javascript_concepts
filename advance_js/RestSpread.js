// rest operator and the spread operators


function sum(a,b,c,...others){
    console.log(others);
}

sum(1,2,3,4,5,6,6)

var arr=['a','b','c','d']

function getNames(name1,name2,name3){
 console.log(name1)
}

getNames(...arr)
var student={
    name:"Mukesh",
    age:10
}

const{...rest}=student