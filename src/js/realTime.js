export default function realTime() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  hours = (`0${hours}`).slice(-2);
  minutes = (`0${minutes}`).slice(-2);

  const disptime = document.querySelector('.realtime__time');
  disptime.innerHTML = `${hours}:${minutes}`;
  setTimeout(realTime, 1000);
}
