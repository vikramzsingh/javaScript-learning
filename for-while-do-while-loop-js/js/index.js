console.log("Looping in JavaScript");

let a = 34;
a += 1; // or a = a + 1
a++;
console.log(a);

// for loop
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// while loop
let j = 0;
while (j < 100) {
  console.log(j);
  // j += 1;
  j++;
}

//do while loop
let k = 0;
do {
  if (k === 5) {
    // break;
    k++;
    continue;
  }
  console.log(k + 1);
  k++;
} while (k < 10);

console.log("done");

// arr loop with forEach
arr = [2, 3, 2, 4, 5, 64, 2];
arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});

// obj loop in javascript
obj = {
  name: "Vikram",
  age: 23,
  marks: 45,
  address: "Pathankot",
};

for (let key in obj) {
  console.log(`${key} of Object is ${obj[key]}`);
}
