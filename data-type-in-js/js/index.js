// premitive data type

// String
let namee = 'Vikram'
// console.log('this is my String ', namee); 
// or
console.log('this is my String ' + namee);

// typeof operator, to check data type
// console.log('this is my string', typeof namee);
// console.log('this is my string' + typeof namee);
// or
// console.log('this is my string ' + (typeof namee));
console.log('this is my string', (typeof namee));

// Numbers
let marks = 45
console.log('this is my string', marks);
console.log('this is my string', (typeof marks));

// boolean
let isMale = true
console.log('this gender type is', isMale);
// console.log('this gender type is', (typeof isMale));
console.log('this gender type is', typeof isMale);

// Null is premitive data type, but in js its shows object
let nullVar = null;
console.log('data type of null', (typeof nullVar));
console.log('value of nul', nullVar); 

// Undefined
let undef = undefined
console.log('data type of undefined:', (typeof undef));
console.log('value of undefined:', undef);

//
// Refernce data type

// array
arr1 = [1,3,4,2,56,7, true, "cvb"]
console.log('values of array: ', arr1);
console.log('data type of array', (typeof arr1));

// object literals
obj1 = {
    vikram: 56,
    vijay: 45,
    bobby: 32,
    jack: 44
}
console.log('Value in object:', obj1);
console.log('data type of object:', (typeof obj1));

// function as refrence data type
function findName(params) {
    
}
console.log('data type of function:', typeof findName);

// date as data type
let date = new Date();
console.log('data type of date:', typeof date);