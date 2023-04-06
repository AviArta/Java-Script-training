// Найти объект клика:
document.onclick = function (event) {
    let obj = event.target;

    obj.className = 'tab tab_active'

    // Создать массивы из списков:
    let first = document.querySelectorAll('.tab')
    let arrFirst = Array.from(first);
    let second = document.querySelectorAll('.tab__content')
    let arrSecond = Array.from(second);

    // Определить индекс элемента, на который кликнули, в созданном массиве:
    let ind = arrFirst.indexOf(obj);
    arrSecond[ind].className = 'tab__content tab__content_active';
    
    //Поставить остальные элементы в первоначальное состояние:
    arrFirst.forEach(element => {
        if (arrFirst.indexOf(element) != ind) {
            arrFirst[arrFirst.indexOf(element)].className = 'tab';
            arrSecond[arrFirst.indexOf(element)].className = 'tab__content';
        }
    });
 }
