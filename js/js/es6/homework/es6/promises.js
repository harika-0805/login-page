new Promise((resolve,reject)=>{
    if (true) {
        resolve("success");
        console.log("promise resolved successsfully");
    } else {
        reject("error");
        console.log("promise rejected");
    }
});

//async,await example
async function createPromise (value) {
    try {
         await new Promise((resolve, reject) => {
            setTimeout(() => {
                 resolve(value);
                },3000);
        });
       return value;
    } catch (error) {
      throw error;
    }
}
async function main() {
    try {
        const value = await createPromise(10);
        console.log(`Resolved value: ${value}`);
    } catch (error) {
        console.log(`Rejected error: ${error}`);
    }
}
//program for promise
var delay=function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds*1000);
               
    });
}

 delay(2).then(function(){
    console.log("2 seconds have passed");
});
//promise with arrow function
let delayy = seconds => {
    return new Promise(resolve => 
        setTimeout(resolve, seconds * 1000));
    };
delay(1).then(() => console.log("1 second has passed"));
delay(2).then(() => console.log("3 seconds have passed"));
let delay2 = seconds => {
    return new Promise(resolve => setTimeout(()=>resolve(`${seconds} seconds completed`) ,seconds* 1000));
    }
    delay2(3).then((message) => console.log(message));
    delay2(3).then((message) => message.toUpperCase()).then(message =>message+"!!!").then(message=> console.log(message));
    