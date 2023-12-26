var printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};

var sakib = {
  name: "Sakib",
  age: 35,
};

var tamim = {
  name: "Sakib",
  age: 35,
};

printPlayerNameFunciton(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName();
tamim.printPlayerName();
