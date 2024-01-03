String.prototype[Symbol.iterator] = function () {
    let count = this.length;
    return {
        next() {
            if (count > 0) {
                count--;
                return { done: false, value: "JS" };
            }
            return { done: true };
        }
    }
}

console.log([..."bangldesh"]);