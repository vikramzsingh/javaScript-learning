console.log('Array and Object.');

const marks = [23, 45, 57, 99, 675];
const fruits = ['Apple', 'Grapes', 'Orange'];
const mixed = ['bobby', 23 ,[2, 56], { name: 'Vikram' }];

let arr = new Array(2, 37, 5, 6, 7, 12, 'Vikram');

console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(marks);

// property of Array
console.log(arr.length);

// method of Array
console.log(Array.isArray(arr));
let notarr = 'not array'
console.log(Array.isArray(notarr)); // from Array class isArray method.

arr[0] = 'Vikram added';
console.log(arr)

let arrElementVal = arr[0];
console.log(arrElementVal);

// indexOf() method
let value = arr.indexOf(12);
console.log(value); 

let value1 = arr.indexOf(1000);
console.log(value1);

// mutate or modify array or add element in the end of array.
arr.push(8988);
console.log(arr);

// add element in the start of array.
arr.unshift(4321)
console.log(arr); 

// remove from end of the array.
arr.pop();
console.log(arr);

// remove from start of the array.
arr.shift();
console.log(arr);

// remove multiple elements.
arr.splice(1, 3);
console.log(arr);

// reverse array
arr.reverse();
console.log(arr);

// NOTE:- all these methods changing original array.

let arr2 = [12, 9, 8, 7, 6, 5];
arr = arr.concat(arr2);
console.log(arr); 

// Objects in javaScript.
let myObj = {
    name: 'Vikram',
    'last name': 'Singh',
    age: 23,
    isActive: true,
    marks: [23, 43, 67, 88]
}
console.log(myObj);
console.log(myObj.marks);
console.log(myObj.name);
console.log(myObj['last name']);
console.log(myObj['name']);
console.log(myObj['age']);
console.log(myObj.age);
console.log(myObj.isActive);