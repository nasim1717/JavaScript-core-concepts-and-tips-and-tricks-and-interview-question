var printName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1}, ${v2}, ${v3}`);
};

var sakib = {
  name: "Sakib",
  age: 35,
};

var v1 = "Hansome";
var v2 = "All-rounder";
var v3 = "Best Player";

var v = [v1, v2, v3];

// printName.call(sakib, v1, v2, v3);

// printName.apply(sakib, v);

var newFunc = printName.bind(sakib, v1, v2, v3);
newFunc();
