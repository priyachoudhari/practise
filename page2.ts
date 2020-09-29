var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printInfo = function () {
        console.log("firstName: " + this.firstName);
        console.log("lastName:" + this.lastName);
        console.log("age:" + this.age);
        console.log("address:" + this.address);
    };
    return Person;
}());
var p1 = new Person();
console.log(p1);
p1.firstName = "Shubham";
p1.lastName = "Borse";
p1.age = 23;
p1.address = "Dhule";
p1.printInfo();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.printinfo = function () {
        console.log("firstName: " + this.firstName);
        console.log("lastName: " + this.firstName);
        console.log("age: " + this.age);
        console.log("empid: " + this.empid);
        console.log("address: " + this.address);
    };
    return Employee;
}());
var e1 = new Employee();
console.log(e1);
e1.firstName = "priya";
e1.lastName = "choudhari";
e1.age = 23;
e1.empid = 35992;
e1.address = "HGT";
e1.printinfo();
