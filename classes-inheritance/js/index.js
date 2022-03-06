console.log("classes inheritance")

class Employee {
    constructor(givenName, age) {
        this.name = givenName;
        this.age = age;
    }

    greet() {
        return `My name is ${this.name}.`
    }

    // static method, cannot use this keyword
    static add(a, b) {
        return a + b;
    }
}

emp = new Employee("Vikram", 23);
console.log(emp)
console.log(emp.name);
// non-static refered by instance of class. i.e emp
console.log(emp.greet())
// static method is refered by class add(). i.e Employee
console.log(Employee.add(2, 4))


// Inheritance example
class Programmer extends Employee {
    constructor(givenName, age, myCity) {
        // invoke parent class constructor
        super(givenName, age);
        this.city = myCity;
    }

    favoriteCity() {
        if (this.city == "Pathankot") {
            return this.city;
        } 
        else {
            return "Delhi"
        }
    }

    static multiply(a, b) {
        return a * b;
    }
}

programmer = new Programmer("Vikram Singh", 23, "Jalander");
console.log(programmer)
console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.city)
console.log(programmer.favoriteCity())    
console.log(Programmer.multiply(2, 3))
console.log(typeof(Programmer.multiply(2, 3)))