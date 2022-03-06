console.log("Callback function in javaScript.")

// dummy response from server
const students = [
    {name: "Vikram", age: 24},
    {name: "Bobby", age: 24}
]

// basically callback function is a function inside a function 
// OR IN layman terminology --> function k andar function
function enrollStudent(student, callback) {
    setTimeout(function() { // this is a callback function.
        students.push(student);
        console.log("enroll new Student.");
        callback();
    }, 3000);
    // callback(); // not do this here as callback here execute directly before setTimeout, And setTimeout will run after 3 seconds
}  

function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        }); 
        // with arrow function.
        // student in parameter is just one single object form students(array of objects)
        // students.forEach((student) => {
        //     str += `<li>${student.name}</li>`
        // }); 
        document.getElementById("students").innerHTML = str;
    }, 1000);
}

let newStudent = {name: "Sunny", age: 25}
enrollStudent(newStudent, getStudents); // passing getStudent function as parameter and treating this as callback function. 
// getStudents();