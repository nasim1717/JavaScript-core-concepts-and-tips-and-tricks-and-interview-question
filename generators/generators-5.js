function* generator() {
    let k = yield a + b;
    let m = yield a + b + k;

    yield a + b + k + m;
}

var gen = generator(10, 20);

console.log(gen.next());
console.log(gen.next(50));
console.log(gen.next(100));