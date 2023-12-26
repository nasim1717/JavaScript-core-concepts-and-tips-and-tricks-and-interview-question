function myFunc() {
    const PVT = Symbol('my private value');

    return {
        modify(obj) {
            obj[PVT] = true;
        },
        output(obj) {
            return obj[PVT];
        }
    }
}

const value = myFunc();
const obj = { a: 1, b: 2 };

value.modify(obj);
console.log(value.output(obj));