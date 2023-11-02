function sum(x,y){
    return x+y    
}

const fun = () =>{
    console.log("I am new way to write a function")
}

//Arrow function
const func =(p,q)=>{
    return p*q
}

let a = 1
let b = 2
let c = 3
let d = fun()

console.log("The product of  given number is: ", func(9,10))
console.log(d)
console.log("Thhe sum of A and B is",sum(a,b))
console.log("Thhe sum of B and C is",sum(b,c))
console.log("Thhe sum of C and A is",sum(c,a))