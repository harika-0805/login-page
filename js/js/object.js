var emp={'eid':101,'ename':'John','esal':5000};
var emp2=Object.create(emp);
console.log(emp,typeof emp);
console.log(Array.isArray(emp)); // Should print false
function greet() {
    console.log('Hello, ' + this.ename);
}
greet ();

//2. Anonymous function
anon=function() {
    console.log('Hello, Anonymous Function');
}

Anon();
for(var index in games) {
    console.log(index, games[index]);
}
console.log("----forEach----");
function disp(value, index, array) {
    console.log(index, value);
}
games.forEach(disp);
