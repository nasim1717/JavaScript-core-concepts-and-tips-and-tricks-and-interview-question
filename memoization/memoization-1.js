// memoization in javaScript

function add(x) {
    return 10 + x;
}

// hiher order function
const memo = (func) => {
    let cache = {};
    return function (x) {
        if (cache[x]) {
            console.log('result from cache');
            return cache[x];
        } else {
            console.log("calculating result");
            const result = func(x);
            cache[x] = result;
            return result;
        }
    }
}

const calculate = memo(add);

console.log(calculate(10));
console.log(calculate(10));
