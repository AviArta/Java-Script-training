// функция, возвращающая в качестве результата функцию, проверяющую пароль пользователя
function getPasswordChecker(rightPassword) {
    return function(variantPassword) {
        return variantPassword == rightPassword
    }
}

// Функция не по заданию, оставила на память)
// Определяет валидность пароля
function checkValidPassword(password) {
    // от 7 до 14 символов, любой цифро-буквенный символ, вкл подчеркивание
    let rightPassword = /^[A-Za-z]\w{7,15}$/; 
    return function() {
        return password.match(rightPassword)
    }
}

let getPassword = getPasswordChecker('AKuvshinova_92');

console.log(getPassword(('AKuvshinova_92')));
console.log(getPassword(('AKuvshinova_92_')));
console.log(getPassword(('%;%:;?№*%?::?%:%?:%')));
console.log(getPassword(('AKUVSHINOVA_92')));