fru=["apple", "banana", "cherry"];
fru.splice(fru, 1, 1, "orange");
console.log(fru); // Should print: ["apple", "orange", "cherry"]
fru.splice(1, 1);
console.log(fru); // Should print: ["apple", "cherry"]
const fruits = ["apple", "banana", "cherry"];
fruits.copyWithin(0, 1, 2);
const fruits = ["apple", "banana", "cherry"];
document.getElementById("demo").innerHTML = fruits. toString();
const myArr = [1, 2, 3, 4, 5, 6];
var a=[1, 2, 3, 4, 5];
a.slice(1, 3);
console.log(a); // Should print: [2, 3]
console.log(Array.isArray(a)); // Should print: true