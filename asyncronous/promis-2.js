// description: onek gula promise ek sathe shob resolve korar por eksathe result pai

const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise 2 resolved`);
  }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// Promise.all([promise1, promise2]).then((res) => {
//   console.log(res);
// });

/* --------------
       promise gular race hoebe, promise gula ek sathe suru kore dey ebong jey promise ta age resolve hoye jai sey promis ta diye dey
    --------------
*/

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
