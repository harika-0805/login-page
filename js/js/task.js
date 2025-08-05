// Create an array of numbers
let numbers = [42, 7, 19, 3, 25];

// Sort ascending
let sortedAsc = numbers.slice().sort((a, b) => a - b);
console.log("Sorted Ascending:", sortedAsc);

// Sort descending
let sortedDesc = numbers.slice().sort((a, b) => b - a);
console.log("Sorted Descending:", sortedDesc);

var arr=[1, 2, 3, 4, 5];
console.log(arr)
function square(x) {
    return x * x;
}
var res=arr.map(square);
console.log(res); // Should print: [1, 4, 9, 16, 25]
function isEven(x)  {
    return x % 2 === 0;
}
var evens=arr.filter(isEven);
console.log(evens); // Should print: [2, 4]
numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
},30);
console.log(sum); // Should print: 15
function max(a, b) {
    return a > b ? a : b;
}
console.log(numbers.reduce(max)); // Should print: 5