var includes = Symbol("my own array includes method");
Array.prototype[includes] = () => {
    console.log("This is my array includes function");
}

var myArray = [1, 2, 3];

console.log(myArray.includes(2));
console.log(myArray["includes"](2))

myArray[includes](2)
