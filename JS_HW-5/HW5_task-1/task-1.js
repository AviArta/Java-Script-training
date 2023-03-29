const timerHh = document.getElementById('hours')
const timerMm = document.getElementById('minits')
const timerSs = document.getElementById('seconds')

function timer1 () {
  setInterval(() => {
    const timeH = timerHh.textContent;
    if (timeH > 0) {
    timerHh.textContent = '0' + Number(timerHh.textContent) - 1;
    } else {
      window.clearInterval(timeOut);
    }
  }, 5000);} // 3600000

function timer2 () {
  setInterval(() => {
    const timeM = timerMm.textContent;
    if (timeM > 0) {
      timerMm.textContent = '0' + (Number(timerMm.textContent) - 1);
    } else {
      window.clearInterval(timeOut);
    }
  }, 2000); // 60000
}

function timer3 () {
  setInterval(() => {
    const timeS = timerSs.textContent;
    if (timeS > 0) {
      if (timeS < 10) {
        timerSs.textContent = '0' + (Number(timerSs.textContent) - 1);
      } else {
        timerSs.textContent = Number(timerSs.textContent) - 1;
      }
    } else {
      document.location.assign('https://netology.ru');
      window.clearInterval(timeOut);
    }
  }, 500);
} 

function total() {
  return timer1(), timer2(), timer3()
}

total();


//setInterval(() => {
  //const timeH = timerHh.textContent;
  //const timeM = timerMm.textContent;
  //const timeS = timerSs.textContent;

  //if (timeS > 0) {
  //timerSs.textContent = Number(timerSs.textContent) - 1;
  //} else {
  //alert('Вы победили!');
  //document.location.assign('https://netology.ru');
  //window.clearInterval(timeOut);
  //}
//}, 1000)