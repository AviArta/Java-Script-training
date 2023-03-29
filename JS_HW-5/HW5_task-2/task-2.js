const cookie = document.getElementById('cookie');
const checkKlick = document.getElementById('clicker__counter');
const speed = document.getElementById('speed__counter');
let sec11 = 0;
let sec22 = 0;

let date1 = new Date();

cookie.onclick = () => {
  let sec1 = date1.getSeconds() + (date1.getMilliseconds() / 1000);
  console.log('Начальные секунды:', sec1);
  
  checkKlick.textContent = Number(checkKlick.textContent) + 1;

  if (checkKlick.textContent % 2 != 0) {
    cookie.width += 20;
    cookie.height +=20;
  } else {
    cookie.width -= 20;
    cookie.height -=20;
  }

  let date2 = new Date();
  let sec2 = date2.getSeconds() + (date2.getMilliseconds() / 1000);
  console.log('Конечные секунды:', sec2);

  let delta = (Number(sec2) - Number(sec1)).toFixed(1);
  console.log('delta:', delta);
  
  let speedD = Math.abs((1 / delta).toFixed(2)); 
  speed.textContent = speedD;
 
  date1 = new Date();
  sec1.textContent = date1.getSeconds();
}