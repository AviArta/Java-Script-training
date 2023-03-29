const holes = document.getElementsByClassName('hole');
const holesArr = Array.from(holes);

function clicker () {
    const counterDead = document.getElementById('dead');
    const counterLost = document.getElementById('lost');

    for (let i = 0; i < holesArr.length; i++) {
        holesArr[i].onclick = () => {
            if (holesArr[i].className.includes('hole_has-mole')) {
                counterDead.textContent = Number(counterDead.textContent) + 1;
                if (counterDead.textContent == 10) {
                    alert('Победа!');
                    document.location.reload();
                    //counterDead.textContent = 0;
                    //counterLost.textContent = 0;
                }
            } else {
                counterLost.textContent = Number(counterLost.textContent) + 1;
                if (counterLost.textContent == 5) {
                    alert('Вы проиграли.');
                    document.location.reload();
                    //counterDead.textContent = 0;
                    //counterLost.textContent = 0;
                }
        }}
    }
}

clicker();