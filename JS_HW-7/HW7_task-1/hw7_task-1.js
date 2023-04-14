function onClickModalOpen() {
    console.log('Нажали на СДЕЛАТЬ ХОРОШО.');
    modal1.className = 'modal'; 
    modal2.className = 'modal modal_active';
}

function onClickModalClose() {
    console.log('Нажали на КРЕСТИК.');
    modal1.className = 'modal'; 
    modal2.className = 'modal';
}

console.log('Запуск сразу с открытым первым окном.')

let modal1 = document.getElementById('modal_main');
let modal2 = document.getElementById('modal_success');

modal1.className = 'modal modal_active'; 

let modalMakeGood = document.getElementsByClassName('btn btn_danger modal__close show-success');
let modalMakeGoodArr = Array.from(modalMakeGood);

modalMakeGoodArr.forEach(el => {
    el.addEventListener('click', onClickModalOpen);
    });

let close = document.getElementsByClassName('modal__close modal__close_times');
let closeArr = Array.from(close);
    
closeArr.forEach(e => {
    e.addEventListener('click', onClickModalClose);
    });


