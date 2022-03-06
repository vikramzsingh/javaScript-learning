console.log('conditioanls and switches');

// == check/compare value.
let age = 19;
if(age == 19) {
    console.log('Age is 19');
} 
else if(age == 65) {
    console.log('Age is 65');
} 
else {
    console.log('Age is not 19');
}

// != check/compare value.
if(age != 19) {
    console.log('Age is not 19');
} 
else if(age != 65) {
    console.log('Age is not 65');
} 
else {
    console.log('Age is not 19');
}

// === check/compare type or value.
let age1 = '19';
if(age1 === 19) {
    console.log('Age is 19');
} 
else if(age1 === 65) {
    console.log('Age is 65');
} 
else {
    console.log('Age is not 19');
}

// === check/compare type or value.
if(age1 !== 19) {
    console.log(`Age is not '19'`);
} 
else if(age1 !== 65) {
    console.log('Age is not 65');
} 
else {
    console.log('Age is not 19');
}

// 
const vari = 32
if (vari) {
    console.log('vari is defined'); 
}

if(typeof vari !== 'undefined') {
    console.log('vari 2nd check is defined');
}
else {
    console.log('vari is not defined');
}

// 
let isDrive = true;
if(isDrive && age == 19) {
    console.log('you can drive');
}
else {
    console.log('you cannot drive');
}

if(isDrive || age == 1) {
    console.log('you can drive');
}
else {
    console.log('you cannot drive');
}

// ternary operator
console.log(age==45 ? 'Age is 45' : 'Age is not 45');

// switch
switch (age) {
    case 18:
        console.log('Age is 18');
        break;
    
    case 19:
        console.log('Age is 19');
        break;

    case 20:
        console.log('Age is 20');
        break;
    
    default:
        console.log('Age is specified');
        break;
}