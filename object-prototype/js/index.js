console.log("Object prototype")

let obj1 = {
    name: "Vikram",
    age: 23
}
console.log(obj1)

function Obj(givenName, age) {
    this.name = givenName
    this.age = age
}

// editing prototypr of our object
// or adding a function in our object prototype to return name
Obj.prototype.getName =  function() {
    return this.name
}

let obj2 = new Obj("Vikram Singh", 23)
console.log(obj2)
