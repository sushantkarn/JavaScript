let n = prompt("Enter the number: ")
n = Number.parseInt(n)
let sum =0
for(let i=0;i<n;i++){
    sum += (i+1)
}
console.log("The sum of the first " +n+ "natural number is " + sum)