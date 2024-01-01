async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json(response);
        console.log(data)
    } catch (er) {
        console.log(er)
    }

    return data
}

function bigWork() {
    return getData(); // ay khane asole ekta promise return korbe kono data return korbe na jodi data pete jai tai jekhan theke bigWork function call hocse sekhane await use kote hobe nice dekhano ace
}

(async function () {
    const result = await bigWork()
})()