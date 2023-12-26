class Person {
  constructor(name, age) {
    this.name = name; //property
    this.age = age;
  }

  eat() {
    // method
    console.log(`${this.name} is eating`);
  }

  get setName() {
    // gater
    return "Sumit";
  }
  set setName(name) {
    // setter
    this.name = name;
  }

  static isEqualAge(Cricketer1, cricketer2) {
    console.log(`I am static method`);
    return Cricketer1.age === cricketer2.age;
  }
}

let sakib = new Person("Sakib", 35);
let tamim = new Person("Tamim", 34);
// console.log(sakib.setName);
sakib.setName = "Tamim";
console.log(sakib.name);

consoole.log(Person.isEqualAge(sakib, tamim));
