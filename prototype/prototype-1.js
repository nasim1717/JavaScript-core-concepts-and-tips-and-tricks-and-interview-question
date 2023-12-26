const personMethods = {
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

function Person(name, age) {
  let person = Object.create(personMethods);
  person.name = name;
  person.age = age;

  // let person = {}
  // person.name = name;
  // person.age = age;
  // person.eat = personMethods.eat;
  // person.sleep = personMethods.sleep;
  // person.play = personMethods.play;

  return person;
}

const sakib = Person("Sakib", 34);
// sakib.play();
// console.log(sakib.name);
const tamim = Person("Takib", 34);

function test() {}
// console.log(test);
