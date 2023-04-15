// Базовая версия задания.

// Найти объект клика:
document.onclick = function (event) {
    let obj = event.target;

    // Создать массивы из списков:
    let menuItems = document.querySelectorAll('.menu__link')
    let menuArr = Array.from(menuItems);

    if (obj.parentElement.querySelector('ul')) {
     
        menuArr.forEach(element => {
            
            if (element.parentElement.querySelector('ul')) {
                element.parentElement.querySelector('ul').className = 'menu menu_sub';
            }});
            obj.parentElement.querySelector('ul').className = 'menu menu_sub menu_active';

        } else { 
            // Все подменю возвращаем в неактивное состояние.
            menuArr.forEach(ele => {
                if (ele.parentElement.querySelector('ul')) {
                    ele.parentElement.querySelector('ul').className = 'menu menu_sub';
                    return false 
        }});}

    return false // убрать потом, чтобы  ссылки в меню без подменю работали.
}