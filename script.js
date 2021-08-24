'use strict';
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never to this
  // this.calcAge=function(){
  //   console.log(2021-this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

//1. New {} is created
//2.2 function is called,this ={}
//3. {}linked to prototype
//4. function automatically return {}
Person.hey = function () {
  console.log('Hey there 🖐️');
  console.log(this);
};

Person.hey();
////////////////////////////////////////////////////////////////
/*
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jack, matilda);
console.log(jack instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};
jonas.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
// .prototypeOfLinkedObjects
Person.prototype.species = 'Home Sapien';
console.log(jonas.species, jack);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object prototypes
console.log(jonas.__proto__.__proto__);

console.log(Person.prototype.constructor);
const arr = [1, 2, 3, 5, 5, 6, 7, 6, 9, 1, 1, 12];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
// const set = new Set(arr);
// console.log([...set]);
console.dir(x => x + 1);
////////////////////////////////////////////////////////////////
*/
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bwm = new Car('BMW', 120);
const mec = new Car('Mercedes', 95);
bwm.accelerate();
bwm.accelerate();
bwm.brake();
mec.brake();
*/
// Class expression

// const Preson= class{}
// CLASS Declaration

class PresonCl {
  constructor(firstName, birthYear) {
    this.fullName = firstName;
    this.birthYear = birthYear;
  }
  // add method in .prototype
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.firstName}`);
  };
  get age() {
    return 2021 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log('Hey there 🖐️');
  }
}
const jessica = new PresonCl('Jessica Davis', 1999);
const walter = new PresonCl('Walter white', 1999);

console.log(jessica);
jessica.calcAge();
console.log(jessica.age); // take after top

console.log(jessica.__proto__ === PresonCl.prototype);
jessica.greet();
// 1,classes are Not hoisted
// 2. Class are first-class citizes
//3. Class  are executed in strict mode

const account = {
  owner: 'Jonas',
  movements: [200, 100, 321, -213, 21],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest); // 21
account.latest = 50; // push 50 movements
console.log(account.movements); //
PresonCl.hey();
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ == PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// operater news
const Studen = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Linking Prototypes
Studen.prototype = Object.create(Person.prototype);
// Studen.prototype = Person.prototype;

Studen.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I stydy ${this.course}`);
};
const mike = new Studen('Mike', 2007, 'Computer Science');
mike.introduce();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Studen);
Studen.prototype.constructor = Studen;
console.dir(Studen.prototype.constructor);
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford);
*/
