var ArrayWrapper = function (nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
    return [...this.nums].reduce((cur, pre) => cur + pre, 0);
}

ArrayWrapper.prototype.toString = function () {

    return `[${this.nums}]`;
}
const obj1 = new ArrayWrapper([1, 2]);
console.log(obj1.toString())
