function onClickPrev() {
    console.log('НАЗАД');
    console.log('imgArr.length', imgArr.length);
    //console.log('counter', counter);
    if (counter > 0) {
        console.log('Я тут.')
        let activeImg = counter - 1;
        console.log('counter =', counter, 'activeImg =', activeImg);
        imgArr[counter].className = 'slider__item';
        //console.log('counter =', counter, 'activeImg =', activeImg);
        imgArr[activeImg].className = 'slider__item slider__item_active';
        sliderArr[counter].className = 'slider__dot';
        sliderArr[activeImg].className = 'slider__dot slider__dot_active';
        counter--;
    } else {
        console.log('А теперь тут!!!!');
        counter = imgArr.length;
        activeImg = counter - 1;
        imgArr[0].className = 'slider__item';
        console.log('counter =', counter, 'activeImg =', activeImg);
        imgArr[activeImg].className = 'slider__item slider__item_active';
        sliderArr[0].className = 'slider__dot';
        sliderArr[activeImg].className = 'slider__dot slider__dot_active';
        counter--;
    }
}

function onClickNext() {
    console.log('ВПЕРЁД');
    //console.log('imgArr.length', imgArr.length);
    if (counter < imgArr.length - 1) {
        let activeImg = counter + 1;
        imgArr[counter].className = 'slider__item';
        //console.log('counter =', counter, 'activeImg =', activeImg);
        imgArr[activeImg].className = 'slider__item slider__item_active';
        sliderArr[counter].className = 'slider__dot';
        sliderArr[activeImg].className = 'slider__dot slider__dot_active';
        counter++;
    } else {
        //console.log('counter=', counter);
        activeImg = 0;
        imgArr[counter].className = 'slider__item';
        //console.log('counter =', counter, 'activeImg =', activeImg);
        imgArr[activeImg].className = 'slider__item slider__item_active';
        sliderArr[counter].className = 'slider__dot';
        sliderArr[activeImg].className = 'slider__dot slider__dot_active';
        counter = 0;
    }    
}

let btnPrev = document.getElementsByClassName('slider__arrow slider__arrow_prev');
let btnNext = document.getElementsByClassName('slider__arrow slider__arrow_next');

let btnPrevArr = Array.from(btnPrev);
btnPrevArr.forEach(element1 => {
    element1.addEventListener('click', onClickPrev);
    });

let btnNextArr = Array.from(btnNext);
btnNextArr.forEach(element2 => {
    console.log('Вперёд__')
    element2.addEventListener('click', onClickNext);
    });

let imgItems = document.querySelectorAll('.slider__item');
let imgArr = Array.from(imgItems);

let counter = 0;

let sliders = document.querySelectorAll('.slider__dot');
let sliderArr = Array.from(sliders);

// !!! КОД РАБОТАЕТ ТОЛЬКО ОТДЕЛЬНО на стрелки или точки !!!

/*document.onclick = function (event) {
    let obj = event.target;
    console.log('obj.className=', obj.className);

    // если нажали на точки:
    if (obj.className = 'slider__dot') {
        obj.className = 'slider__dot slider__dot_active';

        // Определить индекс элемента, на который кликнули, в созданном массиве:
        let ind = sliderArr.indexOf(obj);
        
        if (ind >= 0) {
            console.log('Нажали слайдер', ind + 1);
            imgArr[ind].className = 'slider__item slider__item_active';
    
        //Поставить остальные элементы в первоначальное состояние:
            imgArr.forEach(element => {
                if (imgArr.indexOf(element) != ind) {
                    //console.log('imgArr[imgArr.indexOf(element)] =', imgArr.indexOf(element));
                    imgArr[imgArr.indexOf(element)].className = 'slider__item';
                    sliderArr[imgArr.indexOf(element)].className = 'slider__dot';
                }
            });
        } 
    
    // !!! ЭТА ЧАСТЬ НЕ РАБОТАЕТ !!!
    // если нажали стрелки:
    /*} else if (obj.className == 'slider__arrow') {
        console.log('Нажали за границей слайдера и ВПЕРЁД/НАЗАД.');
        console.log('obj.className =', obj.className);
        if (obj.className == 'slider__arrow slider__arrow_next') {
            btnNextArr.forEach(element2 => {
                console.log('Вперёд__')
                element2.addEventListener('click', onClickNext);
                });
        } else if (obj.className == 'slider__arrow slider__arrow_prev') {
            btnPrevArr.forEach(element1 => {
                element1.addEventListener('click', onClickPrev);
                });
        }
    } else {
        console.log('Нажали за границей слайдера и кнопкок ВПЕРЁД/НАЗАД.');
    }    
}*/
