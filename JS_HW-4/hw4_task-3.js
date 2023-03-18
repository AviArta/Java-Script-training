const { rejects } = require('assert');
const { resolve } = require('path');

const rl = require('readline').createInterface(process.stdin, process.stdout);

let randomNumber = Math.floor(Math.random() * 1000);

let counter = 0;

function questionToUser(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (answer) => {
            resolve(answer);
            //reject(new Error('Что-то не так.')); //этого блока не будет
        })
    })
}

async function input(counter) {
    while (true) {
        const answer = await questionToUser('Введите число от 1 до 1000: ');
        counter++;
        let result;
        if (answer == 'q') {
            console.log('Вы вышли из игры.')
            rl.close();
            return
        }
        if (answer == randomNumber) {
            console.log(`Это попытка ${counter}: Поздравляем, вы угадали! Это число ${randomNumber}. Игра окончена.`);
            rl.close();
            return
        }
        if ((answer < 1 || answer >= 1001) && (answer != randomNumber))
            throw 'Должно быть введено число от 1 до 1000. Чтобы попробовать ещё раз, перезапустите игру.';
        if (answer != randomNumber) {
            if (answer > randomNumber) {
                result = 'больше';
            } else if (answer < randomNumber) {
                result = 'меньше';
            }
            console.log (`Это попытка ${counter}: вы ввели: ${answer}, это ${result} загаданного числа.`);
        }
        console.log('Для проверки кода: загаданное число:', randomNumber);
    }
}

input(counter++);