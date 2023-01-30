let age = 37;

function futureAge (age) {
    let ageInFuture = age += 5;
    return (`in 5 years i will be ${ageInFuture}`);
}
console.log(futureAge(age));