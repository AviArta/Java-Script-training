// функция, возвращающая в качестве результата фунцию, проверяющую пароль пользователя
function getPasswordChecker(variantPassword) {
    rightPassword = 'AKuvshinova_92';
    return function() {
        if (variantPassword == rightPassword) {
            return true
        } else {
            return false
        }
    }
}

// Функция не по заданию, оставила на память)
function checkValidPassword(password) {
    // от 7 до 14 символов, любой цифро-буквенный символ, вкл подчеркивание
    let rightPassword = /^[A-Za-z]\w{7,15}$/; 
    return function() {
        if (password.match(rightPassword)) {
        return true
        } else {
            return false
        }
    }
}

let variantPassword1 = getPasswordChecker('AKuvshinova_92');
let variantPassword2 = getPasswordChecker('1fghHjcbf');
let variantPassword3 = getPasswordChecker('06567489');
let variantPassword4 = getPasswordChecker('AKuvshinova_922');

console.log(variantPassword1());
console.log(variantPassword2());
console.log(variantPassword3());
console.log(variantPassword4());