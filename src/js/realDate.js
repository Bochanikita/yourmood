export default function realDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  day = (`0${day}`).slice(-2);
  month = (`0${month}`).slice(-2);

  const dispdate = document.querySelector('.realtime__date');
  dispdate.innerHTML = `${day}.${month}.${year}`;
  setTimeout(realDate, 1000);
}
