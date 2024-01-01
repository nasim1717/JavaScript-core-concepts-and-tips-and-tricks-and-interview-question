const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate",
    },
}

// const { name, age } = user;
const { education: { degree } = {} } = user;
console.log(degree);

const users = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate",
        school: {
            name: "Rangpur Zilla School",
        },
    },
};

const { education: { school: name } = {} } = users;
console.log(name);