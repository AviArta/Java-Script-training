function SimpleNumbers(a) {
    let resList = [1];
    for (let i=1; resList.length < a; i++) {
        let counter = 0;
        for (let j=1; j<=i; j++) {
            if (i % j === 0) {
                counter++;
            }
        }
        if (counter == 2) {
            resList.push(i);
            if (resList.length == a) {
                return resList;
            }
        }
    }
}

console.time();
userNumber = process.argv[2];
console.log(SimpleNumbers(userNumber));
console.timeEnd();