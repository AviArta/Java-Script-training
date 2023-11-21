const imgItems = document.querySelectorAll('.slider__item');
const imgArr = Array.from(imgItems);

const sliders = document.querySelectorAll('.slider__dot');
const sliderArr = Array.from(sliders);


function prev(index_obj) {
    if (index_obj < 1) {
        index_obj = imgArr.length - 1;
        imgArr[index_obj].className = 'slider__item slider__item_active';
        sliderArr[index_obj].className = 'slider__dot slider__dot_active';
        update_no_active(index_obj);
    } else if (index_obj <= imgArr.length - 1) {
        imgArr[index_obj - 1].className = 'slider__item slider__item_active';
        sliderArr[index_obj - 1].className = 'slider__dot slider__dot_active';
        index_obj--;
        update_no_active(index_obj);
    }  
} 


function nexter(index_obj) {
    if (index_obj == imgArr.length - 1) {
        index_obj = 0;
        imgArr[index_obj].className = 'slider__item slider__item_active';
        sliderArr[index_obj].className = 'slider__dot slider__dot_active';
        update_no_active(index_obj)
    } else if (index_obj >= 0) { 
        imgArr[index_obj + 1].className = 'slider__item slider__item_active';
        sliderArr[index_obj + 1].className = 'slider__dot slider__dot_active';
        index_obj++;
        update_no_active(index_obj);
    }  
}


function pointer(index_obj) {
    imgArr[index_obj].className = 'slider__item slider__item_active';
    sliderArr[index_obj].className = 'slider__dot slider__dot_active';
    update_no_active(index_obj)
}


function update_no_active(index_obj) {
    imgArr.forEach(e => {
        if (imgArr.indexOf(e) != index_obj) {
            imgArr[imgArr.indexOf(e)].className = 'slider__item';
            sliderArr[imgArr.indexOf(e)].className = 'slider__dot';
    }});
}


document.onclick = function (event) {
    let obj = event.target;
    let indexCounter = 0;
    let indexSlide = 0; 

    imgArr.forEach(e => {
        if (imgArr[imgArr.indexOf(e)].className !== 'slider__item slider__item_active') {
            indexCounter++;
        } else {
            indexSlide = indexCounter;
    }});
    
    if (obj.className == 'slider__arrow slider__arrow_next') {
        console.log('Стрелка ВПЕРЁД.');
        nexter(index_obj=indexSlide);

    } else if (obj.className == 'slider__arrow slider__arrow_prev') {
        console.log('Cтрелка НАЗАД.');
        prev(index_obj=indexSlide);
        
    } else if (obj.className = 'slider__dot') {
        console.log('Клик на ТОЧКИ');
        index_obj = sliderArr.indexOf(obj);
        pointer(index_obj=index_obj);
    }
}