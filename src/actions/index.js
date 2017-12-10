import API_KEY from '../API_KEY';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = Symbol('FETCH_WEATHER');

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = fetch(url).then(res => res.json());
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}