var object = {};
object.name = "javaScript";
object.estd = "1999";
object[Symbol("founder")] = "Brendan Eich"; //symbol property hidden thake loop use korle bojha jabe

// console.log(object);

for (let key in object) {
    console.log(key)
}
