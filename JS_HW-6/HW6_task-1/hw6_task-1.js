function onClick1() {
    console.log('Главная кнопка нажата');
    // При нажатии раскрыть весь список:
    listArr[0].className = 'dropdown__list dropdown__list_active';
    return false
}

/*function onClick2() {
    console.log('Выбор сделан');
    bottonArr[0].textContent = '';
    listArr[0].className = 'dropdown__list';
    //console.log('arrDropdown:', arrDropdown);
    return false
}*/

let botton = document.getElementsByClassName('dropdown__value');
let bottonArr = Array.from(botton);

let dropdownList = document.getElementsByClassName('dropdown__list'); //+
let listArr = Array.from(dropdownList);

let dropdown = document.querySelectorAll('.dropdown__link');
let dropItemArr = Array.from(dropdown);

console.log(bottonArr[0].textContent);

// Обработка первого клика:
bottonArr.forEach(element1 => {
    element1.addEventListener('click', onClick1);
    });

// Обработка второго клика (выбора);
document.onclick = function (event) {
    let obj = event.target;
    //let ind = dropItemArr.indexOf(obj);
    console.log(dropItemArr);
    dropItemArr.forEach(element => {
        console.log('closest=', element.className, element.textContent);
        });
    //listArr[0].className = 'dropdown__list';
    //bottonArr[0].textContent = dropItemArr[ind].textContent;
    console.log('bottonArr[0].textContent=', bottonArr[0].textContent);
    return false
}

/*for (var j=0; j < dropItemArr.length; j++) {
    dropItemArr[j].addEventListener('click', (evn) => {
        console.log('Выбор сделан');
        console.log('evn.target.textContent=', evn.target.textContent);
        bottonArr[0].textContent = evn.target.textContent;
        console.log('!!!!!!!', evn.target.textContent);
        // Закрыть список
        listArr[0].className = 'dropdown__list';
        console.log(bottonArr[0].textContent);
        return false
    }
    );
}*/