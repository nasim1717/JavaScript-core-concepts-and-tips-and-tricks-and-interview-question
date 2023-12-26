class Person {
  // parrent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name}`);
  }
}

class Cricketer extends Person {
  // sub class
  constructor(name, age, type, country) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

let sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh");

sakib.eat();
