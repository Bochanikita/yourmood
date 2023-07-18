export default function wheather() {
  const apiKey = '7199b6220103ca8a019f29d439cdd7e9';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
  const inputbox = document.querySelector('.wheather__input');
  const searchbtn = document.querySelector('.wheather__button');
  const wheathericon = document.querySelector('.wheather__image');
  const citywheather = document.querySelector('.wheather__city');
  const wheatherblock = document.querySelector('.wheather__block');

  async function checkWheather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status === 404) {
      citywheather.innerHTML = 'Invalid city name';
      wheatherblock.style.display = 'none';
    } else {
      const data = await response.json();

      citywheather.innerHTML = data.name;
      document.querySelector('.wheather__tempreture').innerHTML = data.main.temp;

      if (data.weather[0].main === 'Clouds') {
        wheathericon.src = '/img/wheather/cloudy.svg';
      } else if (data.weather[0].main === 'Clear') {
        wheathericon.src = '/img/wheather/clear-day.svg';
      } else if (data.weather[0].main === 'Rain') {
        wheathericon.src = '/src/img/wheather/rain.svg';
      } else if (data.weather[0].main === 'Drizzle') {
        wheathericon.src = '/src/img/wheather/drizzle.svg';
      } else if (data.weather[0].main === 'Mist') {
        wheathericon.src = '/src/img/wheather/fog.svg';
      } else {
        wheathericon.src = '/src/img/wheather/clear.svg';
      }
    }
  }

  searchbtn.addEventListener('click', () => {
    checkWheather(inputbox.value);
  });
}
