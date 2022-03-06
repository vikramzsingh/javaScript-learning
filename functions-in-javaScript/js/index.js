console.log("function in JavaScript");

let namee = "Vikram";
console.log(`${namee} happy new year`)

function greet(name, thank="Thanks you") {
    let msg = `${name} happy new year ${thank}`;
    return msg
} 
let name1 = "Vikram Singh"
let va1 = greet(name1, "Thanks a lot")
console.log(va1)

// another syntax for function
const myGreet = function(name, thank="thanks you") {
    let msg = `${name} hello, ${thank}`
    return msg
} 
let va2 = myGreet(name1, "Thanks a lot.")
console.log(va2)

//by object
const myObj = {
    name: "Vikram",
    game: function() {
        return "GTA";
    }
}
console.log(myObj.game()) // game has function evaluation, to execute this we need to call with parabthesis(). i.e game()