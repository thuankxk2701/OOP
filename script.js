// 'use strict';
// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   //Never to this
//   // this.calcAge=function(){
//   //   console.log(2021-this.birthYear);
//   // }
// };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// //1. New {} is created
// //2.2 function is called,this ={}
// //3. {}linked to prototype
// //4. function automatically return {}
// Person.hey = function () {
//   console.log('Hey there 🖐️');
//   console.log(this);
// };

// Person.hey();
// ////////////////////////////////////////////////////////////////
// /*
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(jack, matilda);
// console.log(jack instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };
// jonas.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// // .prototypeOfLinkedObjects
// Person.prototype.species = 'Home Sapien';
// console.log(jonas.species, jack);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // Object prototypes
// console.log(jonas.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// const arr = [1, 2, 3, 5, 5, 6, 7, 6, 9, 1, 1, 12];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// // const set = new Set(arr);
// // console.log([...set]);
// console.dir(x => x + 1);
// ////////////////////////////////////////////////////////////////
// */
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// const bwm = new Car('BMW', 120);
// const mec = new Car('Mercedes', 95);
// bwm.accelerate();
// bwm.accelerate();
// bwm.brake();
// mec.brake();
// */
// // Class expression

// // const Preson= class{}
// // CLASS Declaration

// class PresonCl {
//   constructor(firstName, birthYear) {
//     this.fullName = firstName;
//     this.birthYear = birthYear;
//   }
//   // add method in .prototype
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }
//   greet = function () {
//     console.log(`Hey ${this.firstName}`);
//   };
//   get age() {
//     return 2021 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // static method
//   static hey() {
//     console.log('Hey there 🖐️');
//   }
// }
// const jessica = new PresonCl('Jessica Davis', 1999);
// const walter = new PresonCl('Walter white', 1999);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age); // take after top

// console.log(jessica.__proto__ === PresonCl.prototype);
// jessica.greet();
// // 1,classes are Not hoisted
// // 2. Class are first-class citizes
// //3. Class  are executed in strict mode

// const account = {
//   owner: 'Jonas',
//   movements: [200, 100, 321, -213, 21],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest); // 21
// account.latest = 50; // push 50 movements
// console.log(account.movements); //
// PresonCl.hey();
// // Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ == PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// ///////////////////////////////////////
// // operater news
// const Studen = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// // Linking Prototypes
// Studen.prototype = Object.create(Person.prototype);
// // Studen.prototype = Person.prototype;

// Studen.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I stydy ${this.course}`);
// };
// const mike = new Studen('Mike', 2007, 'Computer Science');
// mike.introduce();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Studen);
// Studen.prototype.constructor = Studen;
// console.dir(Studen.prototype.constructor);
// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.speedUS = 50;
// console.log(ford);
// */

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;

//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// // Link the prototype chain
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargetBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargetBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
/*
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
class StudenCl extends PresonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old, but as a studen I feel more like ${
        2021 - this.birthYear + 10
      } `
    );
  }
}
// const martha = new StudenCl('Martha Jones', 2021);
const martha = new StudenCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
// Inheritance Between "Class": Object.create!
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
const StudenProto = Object.create(PersonProto);
StudenProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudenProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudenProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/
////////////////////

// 1 public fields
// 2 private fields
// 3 public methods
// 4 private methods
// ( there is also the static public version)
/*
class Account {
  // 1. public fields(instances)
  locale = navigator.language;

  // 2. private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening account,${owner}`);
  }
  //3. public methods

  //public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
  static helper() {
    console.log('Helper');
  }
  //4) private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111, []);
console.log(acc1);

acc1.deposit(200);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
Account.helper();
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// Chỉ cần thên return This ở các method là dc
console.log(acc1.getMovements());
*/

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
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  chargetBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargetBattery()
  .accelerate();

console.log(rivian.speedUS);
