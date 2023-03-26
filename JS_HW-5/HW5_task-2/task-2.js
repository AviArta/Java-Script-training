const cookie = document.getElementById('cookie');
const checkKlick = document.getElementById('clicker__counter')
const speed = document.getElementById('speed__counter')
const sec1 = document.getElementById('sec1')
const sec2 = document.getElementById('sec2')

//const date1 = new Date;
//sec1.textContent = date1.getSeconds();

cookie.onclick = () => {
  const date1 = new Date;
  sec1.textContent = date1.getSeconds();
  
  checkKlick.textContent = Number(checkKlick.textContent) + 1;

  if (checkKlick.textContent % 2 != 0) {
    cookie.width += 20;
    cookie.height +=20;
  } else {
    cookie.width -= 20;
    cookie.height -=20;
  }

  const date2 = new Date;
  sec2.textContent = date2.getSeconds();
  speed.textContent = 1 / (Number(date2.getSeconds()) - Number(date2.getSeconds())); 
  date1 = date2; //надо перезаписать начальные секунды на конечные после каждого клика.
}