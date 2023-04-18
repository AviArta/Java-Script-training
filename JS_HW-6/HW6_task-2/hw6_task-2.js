let sumbols = document.querySelectorAll('.symbol');
let sumbolArr = Array.from(sumbols);

let wins = document.querySelector('.status__wins');
let loss = document.querySelector('.status__loss');

let area = document.getElementsByTagName('html');
let textarea = Array.from(area);

let counterYes = 0;
let counterNo = 0;

function onKey(event) {
    
    sumbolArr.forEach(element1 => {

        if (event.key == element1.textContent.toLowerCase()) {
            element1.className = 'symbol symbol_correct';
            counterYes++;
            console.log('counterYes', counterYes);
            if (counterYes == sumbolArr.length * 2) {
                console.log('Всё слово правильное!');
                wins.textContent = Number(wins.textContent) + 1;
            }
        } else {
            console.log('Я тут.');
            /*counterNo--;
            console.log('counterNo', counterNo);
            loss.textContent = Number(wins.textContent) + 1;*/
        }
        console.log('counterYes', counterYes);
    });
}

textarea.forEach(element2 => {
    element2.addEventListener('keydown', onKey);
    element2.addEventListener('keyup', onKey);
});