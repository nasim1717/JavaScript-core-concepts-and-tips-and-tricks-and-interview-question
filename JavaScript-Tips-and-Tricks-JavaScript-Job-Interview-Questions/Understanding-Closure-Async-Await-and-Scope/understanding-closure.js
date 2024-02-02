// function timer(n) {
//     console.log("Start timer");

//     for (var i = 0; i <= n; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("End timer");
// }

function timer(n) {
    console.log("Start timer");

    for (let i = 0; i <= n; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log("End timer");
}

timer(4);
