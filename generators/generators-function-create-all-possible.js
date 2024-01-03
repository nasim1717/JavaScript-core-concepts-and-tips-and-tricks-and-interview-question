// As Generator Functions
// function *myGenerator() {}
// or
// function* myGenerator(){}
// or
// function * myGenerator(){}

// As Generator methods
const myGenerator = function* () { }

// Generator arrow functions
// can't use it with arrow functions
// let generator = * () => { }

// Inside class
class myClass(){
    * myGenerator(){ }
}

// Inside object literal
const myObject = {
    *myGenerator() { }
}