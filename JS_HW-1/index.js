const randomNumber = Math.floor(Math.random() * 1000)
console.log('Загаданное число:', randomNumber);


while (true) {
    const numberFromUser = prompt("Введите число от 1 до 1000:")
    console.log('Пользователь загадал:', numberFromUser);

    if (numberFromUser == "q") {
        alert("Выход из игры.");
        break;
        console.log('Итог: выход из игры.');
    } else if (!isNaN(+numberFromUser) && (+numberFromUser <= 1000 && +numberFromUser >= 0)) {
    if (numberFromUser == randomNumber) {
        alert("Поздравляем! Вы угадали!");
        console.log('Итог: пользователь угадал число.');
    } else {
        alert("Вы не угадали.");
        console.log('Итог: пользователь не угадал число.');
        }
    } else {
        alert("Вы ввели не число от 0 до 1000.");
        console.log('Итог: пользователь ввел не число от 0 до 1000.');
    }
}
