// symbols in javaScript
var cricket = Symbol.for("This is Cricket symbol");

var object = {
    name: "Sakib",
    [cricket]: "Bangladesh",
}

console.log(object);