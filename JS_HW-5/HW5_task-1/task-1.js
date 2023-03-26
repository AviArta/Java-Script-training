//const timerHh = document.getElementById('hours')
//const timerMm = document.getElementById('minits')
const timerSs = document.getElementById('seconds')

setInterval(() => {
  //const timeH = timerHh.textContent;
  //const timeM = timerMm.textContent;
  const timeS = timerSs.textContent;

  if (timeS > 0) {
  timerSs.textContent = Number(timerSs.textContent) - 1;
  } else {
  //alert('Вы победили!');
  document.location.assign('https://netology.ru');
  window.clearInterval(timeOut);
  }
}, 1000)
  

// Запуталась с часами, требует доработки.