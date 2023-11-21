// Повыщенный уровень сложности (два меню).

let submenu = document.querySelectorAll('.menu__item .menu_sub');
let submenuArr = Array.from(submenu);
console.log('submenuArr:', submenuArr);

let menuItems = document.querySelectorAll('.menu__item')
let menuArr = Array.from(menuItems);

// убрать переход по ссылкам только для меню с подменю
document.onclick = function() {
    return false
}

submenuArr.forEach(a => {
    let wn = a.parentElement;
    let wnParent = wn.closest('.menu__item');
    console.log('wnParent:', wnParent);
    wnParent.addEventListener('click', onclick);
    return false
});

function onclick(event) {
    let element = event.target.parentElement;
    let e = element.querySelector('.menu_sub');

    // проверка, если меню было ранее открыто, то его закрыть
    if (e.className == 'menu menu_sub menu_active') {
        console.log('Повторный клик на открытом меню');
        e.className = 'menu menu_sub';
        return false
    }
    // раскрить меню по клику
    e.className = 'menu menu_sub menu_active';

    // остальные подменю в неактивное состояние
    submenuArr.forEach(menu => {
        if (menu != e) {
            menu.className = 'menu menu_sub';
        }    
        //return false
    });
    return false
}