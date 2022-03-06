console.log("Promises in JavaScript.")

/* 
    generally when we make a promiss there will be Three scenarios
    1. Promiss --> resolve (i can resolve my Promiss) OR
    2. Promiss --> reject ( i can reject Promiss)     OR
    3. Promiss --> pending (neither resolved nor rejected)

    // Generally Promiss have 2 cases:- resolve and reject.
*/

// this func1 function telling i will run a function to resolve Promise, 
// if i'm not able to resolve this Promise i will reject Promise.
// while executing this Promise. The Promise will be in Pending State or Pending promise.
function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // basically there will be a database call.
            // then will check http.statusCode like 200 or OK.
            // if 200 set error as false.
            // if other than 200, i.e 400, 500 det error as true.
            // then work on your promise based on error or some other kind of indicator/flag.
            const error = true; 
            if (!error) {
                console.log('Function: Your Promise has been resolved');
                resolve("Yo promise is done"); // this function will be the function in then block.
            }
            else {
                console.log('Function: Your Promise has not been resolved');
                reject("Sorry not fullfilled"); // this function will be the function in catch block. 
            }
            
        }, 2000);
    });
}

// then means if Promise is resolved.
func1().then(function(resolveMsg) { // function inside then is resolve(); function in func1().
    console.log("Vikram: Thanks for resolving. " + resolveMsg);
}).catch(function(rejectMsg) { // function inside catch is reject(); function in func1().
    console.log("Vikram: very sorry. " + rejectMsg);
})