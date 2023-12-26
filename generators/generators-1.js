
// ----------- first ----------

function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
};

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



// ---------- seceond ---------

// function* generator() {
//     yield 1;
//     yield 2;
//     return "I am finished";
//     yield 3;
//     yield 4;
// };

// let iterator = generator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());