function log(date, importance, message) {
    console.log(`${date.getHourse}: ${date.getMinutes} : ${date.getSeconds}: ${importance} : ${message}`);
}

let curriedLog = _.curry(log);
curriedLog(new Date(), "DEBUG", "some debug");

curriedLog(new Date()("DEBUG")("some debug"));

let logNow = curriedLog(new Date());

logNow("INFO", "info message");