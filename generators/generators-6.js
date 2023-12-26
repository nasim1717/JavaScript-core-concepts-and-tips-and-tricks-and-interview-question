const takeOrder = (customer) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`order taken form ${customer}`);
        }, 1000)
    });

};

const processOrder = (customer) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`order porcessed fo ${customer}`);
        }, 2000);
    });
};

const completeOrder = (customer) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`order completed for ${customer}`);
        }, 1000);
    });
};

async function* solution(customer) {
    yield await takeOrder(customer);
    yield await processOrder(customer);
    yield await completeOrder(customer);
}

const gen = solution("Karim");
// gen.next().then(({ value }) => console.log(value));
// gen.next().then(({ value }) => console.log(value));
// gen.next().then(({ value }) => console.log(value));

const promises = [gen.next(), gen.next(), gen.next()];

(async function () {
    for await (let p of promises) {
        console.log(p);
    }
})();