let imgItems = document.querySelectorAll('.slider__item');
let imgArr = Array.from(imgItems);

let sliders = document.querySelectorAll('.slider__dot');
let sliderArr = Array.from(sliders);


function next(number) { // переключает все элемены до [0]
    console.log('Длина =', imgArr.length, 'number =', number);
    if (number < imgArr.length - 1) {
        console.log('number меньше (5 - 1) =', number);
        imgArr[number + 1].className = 'slider__item slider__item_active';
        sliderArr[number + 1].className = 'slider__dot slider__dot_active';

        //Поставить остальные элементы в первоначальное состояние:
        imgArr.forEach(e => {
            if (imgArr.indexOf(e) != number + 1) {
                imgArr[imgArr.indexOf(e)].className = 'slider__item';
                sliderArr[imgArr.indexOf(e)].className = 'slider__dot';
        }});
        number++;

    } else {
        console.log('number равен длине =', number);
        number = 0;
        imgArr[imgArr.length - 1].className = 'slider__item';
        sliderArr[imgArr.length - 1].className = 'slider__dot';
        imgArr[number].className = 'slider__item slider__item_active';
        sliderArr[number].className = 'slider__dot slider__dot_active';
        //number++;
}}

function prev(number) {
    if (number >= 1) {
        console.log('number =', number); 
        imgArr[number - 1].className = 'slider__item slider__item_active';
        sliderArr[number - 1].className = 'slider__dot slider__dot_active';
        number--;

        //Поставить остальные элементы в первоначальное состояние:
        imgArr.forEach(e => {
            if (imgArr.indexOf(e) != number) {
                imgArr[imgArr.indexOf(e)].className = 'slider__item';
                sliderArr[imgArr.indexOf(e)].className = 'slider__dot';
        }});

    } else {
        console.log('А теперь тут!!!!, number =', number);
        number = imgArr.length - 1;
        imgArr[0].className = 'slider__item';
        imgArr[number].className = 'slider__item slider__item_active';
        sliderArr[0].className = 'slider__dot';
        sliderArr[number].className = 'slider__dot slider__dot_active';
    }
    
} 

function pointer(number) {
    imgArr[number].className = 'slider__item slider__item_active';
    sliderArr[number].className = 'slider__dot slider__dot_active';

    //Поставить остальные элементы в первоначальное состояние:
    imgArr.forEach(e => {
        if (imgArr.indexOf(e) != number) {
            //console.log('imgArr[imgArr.indexOf(element)] =', imgArr.indexOf(element));
            imgArr[imgArr.indexOf(e)].className = 'slider__item';
            sliderArr[imgArr.indexOf(e)].className = 'slider__dot';
    }});
}

document.onclick = function (event) {
    let counter = 0;
    let obj = event.target;
    console.log('obj.className=', obj.className);

    if (obj.className == 'slider__arrow slider__arrow_next') {
        console.log('ВПЕРЁД');
        // Определить индекс элемента, на который кликнули, в созданном массиве:
        imgArr.forEach(img => {
            if (img.className.includes( 'slider__item slider__item_active')) {
                next(counter);
            }
            counter++;
        });
        
    } else if (obj.className == 'slider__arrow slider__arrow_prev') {
        console.log('НАЗАД');
        // Определить индекс элемента, на который кликнули, в созданном массиве:
        imgArr.forEach(img => {
            if (img.className.includes( 'slider__item slider__item_active')) {
                prev(counter);
            }
            counter++;
        });
        

    } else if (obj.className = 'slider__dot') {
        console.log('ТОЧКИ');
        obj.className = 'slider__dot slider__dot_active';
        // Определить индекс элемента, на который кликнули, в созданном массиве:
        counter = sliderArr.indexOf(obj);
        console.log('!!!', counter);
        pointer(counter);     
    }  
    
}