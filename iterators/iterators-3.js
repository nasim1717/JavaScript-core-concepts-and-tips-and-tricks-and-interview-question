function reange(start, end, step) {
    let current = start;
    return {
        [Symbol.iterator]: function () {
            return {
                next() {
                    let result;
                    if (current <= end) {
                        result = {
                            done: false,
                            value: current
                        };
                        current += step;
                        return result;
                    }
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

console.log([...Range(200, 1000, 5)]);