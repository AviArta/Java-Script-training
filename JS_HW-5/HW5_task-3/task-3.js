const holes = document.getElementsByClassName('hole');
const holesArr = Array.from(holes);

function clicker () {
    const counterDead = document.getElementById('dead');
    const counterLost = document.getElementById('lost');

    for (let i = 0; i < holesArr.length; i++) {
        holesArr[i].onclick = () => {
            if (holesArr[i].className.includes('hole_has-mole')) {
                counterDead.textContent = Number(counterDead.textContent) + 1;
            } else {
                counterLost.textContent = Number(counterLost.textContent) + 1;
        }}
    }
}

clicker();