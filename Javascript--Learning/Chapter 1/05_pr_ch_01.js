//Adding string and number
let a = "Sushant";
let b = 56;
console.log(a + b);
// Output: Sushant56

//Find the data type
console.log(typeof (a + b));
// Output: string

//Trying to change the const object in JavaScript
const c = {
  name: "Sushant",
  class: "CSE D",
  Roll_No: "22cs184",
  isCR: false,
};

console.log(c["class"]);
// Output: CSE D

// c = 22
// Error: Assignment to constant variable.

//Trying to add new key to const objects
c["friend"] = "Sachin";
c["Buddy"] = "Shubhum";
console.log(c);
// Output: { name: 'Sushant', class: 'CSE D', Roll_No: '22cs184', isCR: false, friend: 'Sachin', Buddy: 'Shubhum' }

const dict = {
  clarsach: "an ancient Irish and Scottish harp.",
  prolegomenon: "a preliminary discussion",
  pluvial: "of or relating to rain, especially much rain",
  qiviut:
    "the soft, dense, light-brown woolly undercoat of the musk ox, used in making fabrics.",
  "shalach manoth":
    "the practice of giving gifts to one another or to people in need on Purim.",
};

console.log(dict.qiviut);
// Output: the soft, dense, light-brown woolly undercoat of the musk ox, used in making fabrics.
console.log(dict["clarsach"]);
