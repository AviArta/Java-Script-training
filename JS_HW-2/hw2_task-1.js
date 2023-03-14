function SimpleNumbers(a, n) {
    let resList = [1];
    for (let i=1; i <= n; i++) {
        let counter = 0;
        for (let j=1; j<=i; j++) {
            if (i % j === 0) {
                counter++;
            }
        }
        if (counter == 2) {
            resList.push(i);
            if (resList.length == a) {
                console.log(resList);
                break;
            }
        }
    }
}

console.time();
userNumber = process.argv[2];
SimpleNumbers(userNumber, 100000);
console.timeEnd();