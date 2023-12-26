const paymentSuccess = false;
const mark = 90;

function enrroll() {
  console.log("Course enrollment is in progress.");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("payment failed");
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log("Course on progress...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (mark >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 3000);
  });

  return promise;
}

function getCertificate() {
  console.log("Preparing your certificate!");

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats! You got the certificate");
    }, 1000);
  });
  return promise;
}

async function course() {
  try {
    await enrroll();
    await progress();
    const message = await getCertificate();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

course();
console.log("aage print hocse");

// enrroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
