console.log("Enter the task you wish to perform:\n 1)Addition\n 2)Subtraction\n 3)Multiplication\n 4)Division\n 5)Square\n");
let choice = prompt("Enter your choice number: ");

switch(choice){
    case 1:
        var n1 = prompt("Enter the first number");
        var n2 = prompt("Enter the second number");
        console.log("The addition of given numbers is: ", n1+n2);
        break;
    case 2:
        var n1 = prompt("Enter the first number");
        var n2 = prompt("Enter the second number");
        console.log("The subtracrtion of given numbers is: ", n1-n2);
        break;
    case 3:
        var n1 = prompt("Enter the first number");
        var n2 = prompt("Enter the second number");
        console.log("The multiplication of given numbers is: ", n1*n2);
        break;
    case 4:
        var n1 = prompt("Enter the first number");
        var n2 = prompt("Enter the second number");
        console.log("The division of given numbers is: ", n1*n2);
        break;
    case 5:
        let n = prompt("Enter the number");       
        console.log("The square of given numbers is: ", n*n);
        break;
    default:
        console.log("Invalid input");
}console.log("Done");