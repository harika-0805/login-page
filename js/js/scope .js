var a=10;//global scope
console.log(a);
function abc() {
    var a=20;
    console.log(a);
}
abc();
console/log(b);
var a=10;//global
console.log(a);
function abc(){
    console.log(a);//hoisting
    var a=20// if not mentioned it takes global value
}