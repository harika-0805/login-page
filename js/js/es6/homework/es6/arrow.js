//anonymous arrow function
 abc =()=>{
    console.log("hello");
}
abc()
  
let add = (a,b) =>a+b;
add = (a,b) => console.log(a + b);
add(4,5);
//map
const numbers=[1,2,3,4,5];
const doubled=numbers.map(num=>num*2);
console.log(doubled);
//reduce
const numberss = [1,2,3,4,5];
const sum=numberss.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum);
//filter
const filtered=numbers.filter(num=>num%2==0);
console.log(filtered);
//split
const splitString=(str,delimiter)=>str.split(delimiter);
const sentence="javascript is awesome"
const words = splitString(sentence, " ");
console.log(words); // Output: ["JavaScript", "is", "awesome"]

// Split into characters
const characters = splitString(sentence, "");
console.log(characters); // Output: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "i", "s", " ", "a", "w", "e", "s", "o", "m", "e"]

// Split using a specific character
const parts = splitString(sentence, "a");
console.log(parts); // Output: ["J", "v", "Script is ", "wesome"]
