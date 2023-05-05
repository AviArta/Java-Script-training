let botton = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list'); 
let dropdown = document.querySelectorAll('.dropdown__link');
let dropdownArr = Array.from(dropdown);

function onClick1() {
    console.log('Главная кнопка нажата.');
    // При нажатии раскрыть весь список:
    dropdownList.className = 'dropdown__list dropdown__list_active';
}

function onClick2() {
    document.onclick = function (event) {
        console.log('Выбор сделан.');
        let obj = event.target;
        // Меняем текст главной кнопки на выбранный:
        botton.textContent = obj.textContent;
        dropdownList.className = 'dropdown__list';
        return false
    }
}

// Обработка первого клика:
botton.addEventListener('click', onClick1);

// Обработка клика выбора:
dropdownArr.forEach(element => {
    element.addEventListener('click', onClick2);
});

//  e.preventDefault(); - отменяет значение браузера по умолчанию, страница не перегружается