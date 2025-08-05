class Parent{
  
    constructor(a){
         console.log(`P cons ${a}`)
    }
}

class child extends Parent{
constructor(a,b){
    super(a);
    console.log(`C cons ${b}`)
    }
    money(){
        console.log("Child")
    }
}
let c=new child(10,20);
c.money();
    

