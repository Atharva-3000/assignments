/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(resolve, t);
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(resolve, t);
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve, t);
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    // Creating the promises but not awaiting them yet
    const promise1 = wait1(t1*1000);
    const promise2 = wait2(t2*1000);
    const promise3 = wait3(t3*1000);

    // Returning a promise that resolves when all three promises are resolved
    return Promise.all([promise1, promise2, promise3])
        .then(() => {
            const endTime = Date.now();
            return endTime - startTime;
        });
}

module.exports = calculateTime;
