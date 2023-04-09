function onClick1() {
    console.log('Кнопка нажата');

    // При нажатии раскрыть весь список:
    for (var i=0; i < dropdownList.length; i++) {
        dropdownList[i].className = 'dropdown__list dropdown__list_active';
    }
}

function onClick2() {
    console.log('Выбор сделан');
    //console.log('arrDropdown:', arrDropdown);
    console.log('botton[i].textContent=', botton[i].textContent, 'dropdown[j].textContent=', dropdown[j].textContent);
    botton[i].textContent = dropdown[j].textContent;

    let item = document
    //document.onclick = function (event) {
        //let obj = event.target;
        //console.log('obj.textContent=', obj.textContent);
    
        // Создать массивы из списков:
        //let arrDropdown = Array.from(dropdown);
  
     //}
}

// Обработка первого клика:
const botton = document.getElementsByClassName('dropdown__value');
const dropdownList = document.getElementsByClassName('dropdown__list');
const dropdown = document.getElementsByClassName('dropdown__item')

for (var i=0; i < botton.length; i++) {
    botton[i].addEventListener('click', onClick1);
    console.log('botton[i].textContent:', botton[i].textContent);
}

for (var i=0; i < dropdownList.length; i++) {
    dropdownList[i].addEventListener('click', onClick1);
}

// Обработка второго клика (выбора);
for (var j=0; j < dropdown.length; j++) {
    dropdown[j].addEventListener('click', (evn) => {
        console.log('Выбор сделан');
        console.log('evn.target.textContent=', evn.target.textContent);
        botton[0].textContent = evn.target.textContent;
    }
    );
}



