function SimpleNumbers(a) {
    let resList = [1];
    for (let i=1; i <=1000; i++) {
        let counter = 0;
        for (let j=1; j<=i; j++) {
            if (i % j === 0) {
                counter++;
            }
        }
        if (counter === 2) {
            resList.push(i);
        }
    }
    return console.log(resList.slice(0, a));
}

console.time();
userNumber = process.argv[2];
SimpleNumbers(userNumber);
console.timeEnd();