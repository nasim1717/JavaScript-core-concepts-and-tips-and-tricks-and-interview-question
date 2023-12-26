function Person(name, age) {
  // parent class
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  // sub class
  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.play = function () {
  console.log(`${this.name} is playing`);
};

let sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh");
console.log(sakib.eat());

console.log(sakib.play());
