function Person(name, age) {
  // let this = Object.create(null);
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} years old`);
  // return this
}

var sakib = new Person("Sakib", 35);
