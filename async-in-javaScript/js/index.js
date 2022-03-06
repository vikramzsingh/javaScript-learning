console.log("Async programming in javaScript");

// this is one way to use async code. 
setTimeout(() => { 
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log("This is index number:", + index);
    } 
}, 100);


console.log("done printing");