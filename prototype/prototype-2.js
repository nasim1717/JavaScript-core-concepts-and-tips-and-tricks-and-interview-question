function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("person is sleeping");
  },
  play() {
    console.log("person is playing");
  },
};

function PersonwithNew(name, age) {
  // let this = Object.create(PersonwithNew.prototype);
  this.name = name;
  this.age = age;

  return this;
}

PersonwithNew.prototype = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("person is sleeping");
  },
  play() {
    console.log("person is playing");
  },
};

const sakib = Person("Sakib", 34);
// sakib.play();
// console.log(sakib.name);
const tamim = Person("Takib", 34);

function test() {}
// console.log(test);

const Sakib = new PersonwithNew("sakib", 35);
const Tamim = new PersonwithNew("tamim", 35);
