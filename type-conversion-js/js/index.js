// type conversion

// String to int
let myVar = 34
myVar = String(myVar)
console.log(myVar, (typeof myVar));

// Boolean to string
let booleanVar = true;
booleanVar = String(booleanVar); 
console.log(booleanVar, (typeof booleanVar));

// Date to String
let date = new Date();
console.log(date, (typeof date));
date = String(date);
console.log(date, (typeof date));

// array to String
arr1 = [1,2,4,2,55]
console.log(arr1, (typeof arr1), arr1.length);
arr1 = String(arr1);
console.log(arr1, (typeof arr1), arr1.length);

// other technique for conversion
let i = 34
console.log(i.toString(), (typeof i.toString()));

// String to Number
let str = "2345.738"
console.log(str, (typeof str));
str = Number(str);
console.log(str, (typeof str));

// String to Number with parseInt
let number = parseInt('34.45');
console.log(number, (typeof number));

// String to Number with tiFixed()
let num = parseFloat('34.4548989');
console.log(num.toFixed(2), (typeof num));
