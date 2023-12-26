// expection: only work for normal function will not work for arrow function

var sakib = {
  name: "Sakib",
  age: 35,
  printPlayerName: function () {
    console.log(this.name);
  },
};

sakib.printPlayerName();
