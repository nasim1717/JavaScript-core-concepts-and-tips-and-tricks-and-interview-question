var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. xxxx",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

var sakib = Person("Sakib", 35);
sakib.printName();
sakib.father.printName();
