function bankAccount(initialBalance) {
    var balance = initialBalance;
    return function () {
        return balance;
    }
}
var account = bankAccount(10000);
console.dir(account);