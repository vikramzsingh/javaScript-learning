console.log("variables in JavaScript");
// Variables in JavaScript
// var, let, const

// Scope is globle for var 
var name = 'vikram';
var channel;
channel = 'testing var'
console.log(name);
console.log(channel);

// const are not changable
const ownerName = 'bobby'
console.log(ownerName);

// you cannot assign a complete new array to arr1, e.g arr1 = [3,5,2,55,6]
// you can push or pop elements in const arr1 
const arr1 = [12,334,65,7,9]
console.log(arr1);

arr1.push(45);
console.log(arr1);

arr1.pop();
// console.log('poped from arr1', arr1.pop());
console.log(arr1);

// you cannot assign a complete new object to obj1, e.g obj1 = { name: 'Vikram', age: 23}
// you add new key-values in const obj1 
const obj1 = { name: 'bobby', age: 21}
console.log(obj1);

obj1.hobby = 'gamming'
console.log(obj1);

// delete obj1.hobby; 
delete obj1["hobby"] 
console.log(obj1);


// let has local scope
{
    let channel = 'testing var 2'
    console.log(channel);
}

console.log(channel)

