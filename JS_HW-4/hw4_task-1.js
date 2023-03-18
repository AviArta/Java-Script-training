function getPasswordChecker(password) {
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

let password1 = getPasswordChecker('fghH_cbf');
let password2 = getPasswordChecker('1fghHjcbf');
let password3 = getPasswordChecker('06567489');
let password4 = getPasswordChecker('?:%;?;*%;*');

console.log(password1());
console.log(password2());
console.log(password3());
console.log(password4());