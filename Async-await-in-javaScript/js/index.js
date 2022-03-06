console.log("async-await in javaScript.")

// A async function returns a promise.
// Inside this async function we can wait for a Promise to resolve.
async function vikram() {
    console.log("Inside vikram function")
    
    // waiting for another Promise. 
    // wait for this Promise, then you will get response.
    // after seeing await this will go to this line console.log("****After calling vikram****"); and continues the execution of the rest of the program;
    // and also this will be executing at the backend separately. i.e async behaviour or can run multiple piece of code at once.
    const response = await fetch("https://api.github.com/users"); 
    console.log("before response");

    // waiting for another Promise. 
    // wait for response ki json ka.
    const users = await response.json(); 
    console.log("users resolved");
    return users;
}

console.log("Befor calling vikram");
let a = vikram();
console.log("****After calling vikram****");
console.log(a); // this promise is Pending at this point, it will only resolve when the entire async vikram() function will complete its execution. This will show Promise is Pending.
a.then((data) => console.log(data)); // a is not resolved yet, so next line will be executed.
console.log("last line of code.");

// now at this point, this will go back to await, and tell i have complete all my work.
// then this will ask from await have you completed your work. then await reply ruko mai ho geya complete.
// as soon as fetch await complete.
// then will execute this line console.log("before response");

// now at response await, will againg tell go do your rest of work.
// this will get reply, i have completed every thing, only you remaining.
// the code system will tell await you can work on your task, as soon as you done notify me.

// at last users will return with resolved promise.
// so a.then((data) => console.log(data)); is notifyed with resolved promise, it can now print/log data.

// NOTE:- the work of await will handled in asyncronous manner.