
let timerMm = document.getElementById('minits')
let timerSs = document.getElementById('seconds')


function timerMinits () {
  setInterval(() => {
    let timeM = timerMm.textContent;
    if (timeM > 0) {
      timerMm.textContent = '0' + (Number(timerMm.textContent) - 1);
      timerSs.textContent = 60; 
    } else {
      window.clearInterval(timeOut);
    }
  }, 60000);
}

function timerSeconds () {
  setInterval(() => {
    let timeS = timerSs.textContent;
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
  }, 1000);
} 

function total_() {
  return timerMinits(), timerSeconds()
}

total_();



// Изначальный вариант только с секундами:

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