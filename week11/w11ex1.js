console.log("Hello");

let person1 = {
    firstName : "Kyle",
    "Last Name" : "Intendencia",
    age : 20,
    lastAccess : new Date(),
    address : {streetnum : 18, streetname : "Summitview cres.", city : oshawa},
    print : function(){console.log('The name is ${this.firstname} ${this["Last name"]}')}
};

console.log(person1.firstName);
console.log(person1["firstName"]);
console.log(person1["Last Name"]);
console.log(person1.age);
person1.age = 22;
console.log(person1.age);
console.log(person1.lastAccess);
console.log(person1.address.city);

person1.height = "176 cm";

//creating objects using function constructor

function PersonV2(first="John",last="Doe",age=18){
    this.firstName = first;
    this[lastName] = last;
    this.age = age;
    this.lastAccess = new Date();
    this.print = function(){console.log('The name is ${this.firstname} ${this.LastName}')};
}

let p1 = new PersonV2("Sam", "Tom", 34);
let p2 = new PersonV2("Lewis", "Zach", 31);
let p3 = new PersonV2();
console.log(p1.firstName)
p1.print();

PersonV2.prototype.height = "166 cm";

console.log(p1.height);

p1.height = "226 cm";

console.log(p1.height)

//creating objects using classes

class personV3{
    #firstName;
    lastName;
    age;
    constructor(first, last, age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    print(){console.log('The name is ${this.firstname} ${this.LastName}')}
}

let p4 = new personV3("Max", "Motar", 14);

p4.print();
//console.log(p4.#firstName);

class student extends personV3{
    grade;
    constructor(first,last,age,grade){
        super(first,last,age);
        this.grade = g;
    }
}

let s1 = new student("DD", "MM", 23,88)
s1.print();
console.log(s1.grade);