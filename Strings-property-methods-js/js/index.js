const namee = 'Vikram';
const greeting = 'good Morning';
console.log(greeting + ' ' + namee);
// or
console.log(greeting, namee);

let html;
html = "<h1>hello javaScript</h1>"+
       "<h1> learning in progress</h1>";

console.log(html)

html = html.concat('this', ' str2', ' str3');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[0]);
console.log(html[1]);

console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log('Index of h:', html.indexOf('h'));
console.log(html.indexOf('this'));

// if string not present returns -1
console.log(html.indexOf('snkskma'))

// Check character at this index
console.log(html.charAt(0));
console.log(html.charAt(1));

// check is string ends with given String-input
console.log(html.endsWith('str3'));
console.log(html.endsWith('str3gehbdsh'));

// is Given String contains
console.log(html.includes('this'))
console.log(html.includes('bhfdsjbf'));

// substring
console.log(html.substring(0,3));

// slice
console.log(html.slice(0, 6));
console.log(html.slice(-4));

// split, we give para as space ' ', char or anything, it split String by the passes para in split().
console.log(html.split(''));
console.log(html.split(' '));
console.log(html.split('this'));
console.log(html.split('this')[1].split('s'));

// replace, first occurence
console.log(html.replace('this', 'it'));

// template literal
let fruit1 = 'Apple';
let fruit2 = 'Grapes\''; // \' is used to apply comma
let myHtml = `Hello, 
              <h1>${fruit1} is a fruit</h1>
              <p>and ${fruit2} is also a fruit.</p>
`;
console.log(myHtml);
document.body.innerHTML = myHtml;