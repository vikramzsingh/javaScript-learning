console.log("Callback function in javaScript.")

// dummy response from server
const students = [
    {name: "Vikram", age: 24},
    {name: "Bobby", age: 24}
]

// basically callback function is a function inside a function 
// OR IN layman terminology --> function k andar function
function enrollStudent(student) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() { // this is a callback function.
            students.push(student);
            console.log("enroll new Student.");
            let error = false;
            if (!error) {
                console.log('Function: Your Promise has been resolved');
                resolve("Yo Promise is done");
            }
            else {
                console.log('Function: Your Promise not has been resolved');
                reject("sorry not fullfilled");
            }
        }, 5000);
    });     
}  

function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });
        console.log("students have been fetched.") 
        // with arrow function.
        // student in parameter is just one single object form students(array of objects)
        // students.forEach((student) => {
        //     str += `<li>${student.name}</li>`
        // }); 
        document.getElementById("students").innerHTML = str;
    }, 1000);
}

let newStudent = {name: "Sunny", age: 25}
enrollStudent(newStudent).then(function(resolveMsg) { // we can use then block, catch block as this function returning/ return type is Promise.
    getStudents();
    console.log("Vikram: Thank you for resolving. " + resolveMsg);  
}).catch(function(rejectMsg) {
    console.log("Vikram: very sorry. " + rejectMsg);
})

// OR we can write like this
// enrollStudent(newStudent).then(getStudents).catch(function(rejectMsg) {
//     console.log("Vikram: very sorry. " + rejectMsg);
// })