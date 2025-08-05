let arr=[17,89,55,78];
//let a=arr[0]
//let b=arr[1]
let [a,b,...c] = arr;//destructure
console.log(a, b, c); // Should print: 17 89 [55, 78]