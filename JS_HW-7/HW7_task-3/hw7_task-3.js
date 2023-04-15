function onClickPrev() {
    console.log('НАЗАД');
}

function onClickNext() {
    console.log('ВПЕРЁД');

    imgArr.forEach(img => {
        let ind1 = imgArr.indexOf(img);

        if (ind1 < imgArr.length - 1) {
            let ind2 = ind1 + 1;
            imgArr[ind1].className = 'slider__item';
            console.log('ind1 =', ind1, 'ind2 =', ind2);
            imgArr[ind2].className = 'slider__item slider__item_active';
            //console.log('imgArr[ind2] =', imgArr[ind2].className);
            //ind1++;
        } 
        ind1++;
    });
}

let btnPrev = document.getElementsByClassName('slider__arrow slider__arrow_prev');
let btnNext = document.getElementsByClassName('slider__arrow slider__arrow_next');

let btnPrevArr = Array.from(btnPrev);
btnPrevArr.forEach(element1 => {
    element1.addEventListener('click', onClickPrev);
    });

let btnNextArr = Array.from(btnNext);
btnNextArr.forEach(element2 => {
    element2.addEventListener('click', onClickNext);
    });

let imgItems = document.querySelectorAll('.slider__item');
let imgArr = Array.from(imgItems);