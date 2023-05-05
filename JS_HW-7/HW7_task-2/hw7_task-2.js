// Повыщенный уровень сложности (два меню).

// Найти объект клика:
document.onclick = function (event) {
    let obj = event.target;

    // Создать массивы из списков:
    let menuItems = document.querySelectorAll('.menu__link')
    let menuArr = Array.from(menuItems);
    //console.log('menuArr:', menuArr);
    //console.log('menuArr:', menuArr.slice([0], [9]));
    //console.log('menuArr:', menuArr.slice([9], [18]));

    let ind = menuArr.indexOf(obj);
    //console.log(ind);

    //первое меню:
    if (0 <= ind <= 8) {
        console.log('Нажали на первое меню.');
        console.log('ind=', ind);
        // проверка, если меню было ранее открыто, то его закрыть
        if (obj.parentElement.querySelector('ul').className == 'menu menu_sub menu_active') {
            console.log('Повторный клик на открытом меню')
            obj.parentElement.querySelector('ul').className = 'menu menu_sub';
            return false
        }
        if (obj.parentElement.querySelector('ul')) {
     
            menuArr.slice([0], [9]).forEach(element => {
                
                if (element.parentElement.querySelector('ul')) {
                    element.parentElement.querySelector('ul').className = 'menu menu_sub';
                }});
                obj.parentElement.querySelector('ul').className = 'menu menu_sub menu_active';
    
            } else { 
                // Все подменю возвращаем в неактивное состояние.
                menuArr.slice([0], [9]).forEach(ele => {
                    if (ele.parentElement.querySelector('ul')) {
                        ele.parentElement.querySelector('ul').className = 'menu menu_sub';
                        return false 
            }});}
    
        return false // убрать потом, чтобы  ссылки в меню без подменю работали.

    //второе меню:
    } else {
        console.log('Нажали на второе меню.');

        // проверка, если меню было ранее открыто, то его закрыть
        if (obj.parentElement.querySelector('ul').className == 'menu menu_sub menu_active') {
            console.log('Повторный клик на открытом меню')
            obj.parentElement.querySelector('ul').className = 'menu menu_sub';
            return false
        }

        if (obj.parentElement.querySelector('ul')) {
     
            menuArr.slice([9], [18]).slice([0], [9]).forEach(element => {
                
                if (element.parentElement.querySelector('ul')) {
                    element.parentElement.querySelector('ul').className = 'menu menu_sub';
                }});
                obj.parentElement.querySelector('ul').className = 'menu menu_sub menu_active';
    
            } else { 
                // Все подменю возвращаем в неактивное состояние.
                menuArr.slice([9], [18]).forEach(ele => {
                    if (ele.parentElement.querySelector('ul')) {
                        ele.parentElement.querySelector('ul').className = 'menu menu_sub';
                        return false 
            }});}

        return false // убрать потом, чтобы  ссылки в меню без подменю работали.
    }
}
    
    // Базовая версия задания.
    /*if (obj.parentElement.querySelector('ul')) {
     
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
}*/