let product = {};
product.name = 'Ferrari LaFerrari';
product.price = 300000;

let student = {};
student.name = 'Jon';
student.scholarship = 100;

function sayMyName() {
    console.log(this.name);
}

product.say = sayMyName;
student.say = sayMyName;

product.say();
student.say();


product.showPrice = function () {
    console.log(this.name + ':  ' + this.price);
}

product.showPrice();

let lambo = {
    name: 'Lamborghini Diablo',
    price: 500000,
    say: sayMyName,
    showPrice() {
        console.log(this.name + ':  ' + this.price);
    }
}

lambo.say();
lambo.showPrice();

let students = new Map();
students.set('Ivan', 'Ivanov Ivan');
students.set('Petro', 'Vasylenko Petro');
console.log(students.get('Ivan'));

let studentsDict = {
    Ivan: 'Ivanov Ivan',
    Petro: 'Vasylenko Petro'
}

console.log(studentsDict['Ivan']); // studentsObj.Ivan

function Car(name, price) {
    this.name = name;
    this.price = price;
    this.say = sayMyName;
    // return this;
}

let chevy = new Car('Chevrolet Corvette', 50000);
let mustang = new Car('Ford Mustang', 45000);

class SuperCar {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    say() {
        console.log(this.name, this.price);
    }
}

let teslaRoadster = new SuperCar('Tesla Roadster', 250000);
teslaRoadster.say();

let teslaRoadsterExclusive = Object.create(teslaRoadster);
teslaRoadsterExclusive.price = 300000;
teslaRoadsterExclusive.say();

const teslaString = JSON.stringify(teslaRoadster);
console.log(teslaString);

const teslaExclusiveString = JSON.stringify(teslaRoadsterExclusive);
console.log(teslaExclusiveString);

const porsche = JSON.parse('{"name":"Porsche 911","price":275000}');

