let age = prompt("Enter your age")
if (age<0){
    console.log("You have enter the wrong age")
}else if(age>=0 || age<=17){
console.log("You can't drive a bike")
}else if (age>18 || age<=40){
    console.log("You can ride a bike")
}
console.log("Done")