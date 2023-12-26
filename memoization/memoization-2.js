// memoization in javaScript

function add(...x) {
    return x.reduce((sum, curVal) => sum + curVal);
}

// hiher order function
const memo = (func) => {
    let cache = {};
    return function (...x) {
        const key = JSON.stringify(x);
        if (cache[key]) {

            return cache[key];
        } else {
            const result = func(...x);
            cache[key] = result;
            return result;
        }
    }
}

const calculate = memo(add);

console.log(calculate(10.10, 10, 10));
console.log(calculate(10, 10, 19));
