export default function timer() {
  const timerdisp = document.querySelector('.timer__time');
  const btnplay = document.querySelector('.timer__btn_play');
  const btnpause = document.querySelector('.timer__btn_pause');
  const timerwork = document.querySelector('.timer__work');
  const timerrest = document.querySelector('.timer__rest');

  const minutes = 50;
  let seconds = '00';
  const restminutes = 10;
  let workInterval = 0;
  let restInerval = 0;
  let isPaused = false;

  timerdisp.innerHTML = `${minutes}:${seconds}`;

  function startRest() {
    seconds = 59;

    timerrest.classList.add('timer__rest_active');

    let restmin = restminutes - 1;

    function restFunction() {
      if (!isPaused) {
        timerdisp.innerHTML = `${restmin}:${seconds}`;

        seconds -= 1;

        if (seconds === 0) {
          restmin -= 1;
          seconds = 59;
          if (restmin === -1) {
            seconds = '00';
            timerdisp.innerHTML = `${minutes}:${seconds}`;
            console.log('rest');
            timerrest.classList.remove('timer__rest_active');
            clearInterval(restInerval);
          }
        }
      }
    }
    restInerval = setInterval(restFunction, 1000);
  }
  function startTimer() {
    seconds = 59;

    timerwork.classList.add('timer__work_active');

    let workminutes = minutes - 1;

    function timerFunction() {
      if (!isPaused) {
        timerdisp.innerHTML = `${workminutes}:${seconds}`;

        seconds -= 1;

        if (seconds === 0) {
          workminutes -= 1;
          seconds = 3;
          if (workminutes === -1) {
            console.log('work');
            timerwork.classList.remove('timer__work_active');
            clearInterval(workInterval);
            startRest();
          }
        }
      }
    }
    workInterval = setInterval(timerFunction, 1000);
  }

  function Start() {
    btnplay.classList.remove('timer__btn_play');
    // btnplay.classList.add('timer__btn_pause');
    btnplay.style.display = 'none';
    btnpause.removeAttribute('disabled', '');
    startTimer();
  }
  function Pause() {
    if (btnpause.classList.contains('timer__btn_pause')) {
      btnpause.classList.remove('timer__btn_play');
    } else {
      btnpause.classList.add('timer__btn_play');
    }
    if (!isPaused) {
      isPaused = true;
    } else {
      isPaused = false;
    }
  }

  btnplay.addEventListener('click', Start, { once: true });
  btnpause.addEventListener('click', Pause);
}
