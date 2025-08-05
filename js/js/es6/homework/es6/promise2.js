const { type } = require("os")


let delay = seconds => {
    return new Promise((resolve,reject)=> {
        if(typeof seconds !== 'number' || seconds < 0) {
            reject(new Error("Invalid input: seconds must be a non-negative number"));
        }
        setTimeout(() => resolve(`${seconds} seconds completed`), seconds * 1000);
    }) 
    }
    delay(-1).then((message) => console.log(message))
    .catch((error) => console.error(error.message));
    // async function to handle the promise
    async function foo(){
        console.log("1");
        await promiseHooks.resolve("2");
        console.log("3");
    }
    //
    console.log(1);
    setTimeout(() => 
        console.log(2));
    promise.resolve.resolve().then(() => 
        console.log(3));

