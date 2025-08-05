const getData=()=>{
    return newPromise((resolve)=>{
        setTimeout(()=>{
            resolve('data received');
        }, 1000);
    })
}
module.exports = getData;