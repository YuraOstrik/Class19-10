import './weather.css';
import React, { useEffect, useState } from 'react';

export function Weather() {
  const [state, setState] = useState({
    city: 'Odesa',
    temperature: '',
    icon: '',
    sunrise: '',
    sunset: ''
  });
  // Замените 'YOUR_API_KEY' на ваш собственный API-ключ OpenWeatherMap
  const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${apiKey}&units=metric&lang=ru`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const temp = data.main.temp;
        const icon = data.weather[0].icon;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        setState({
          city: data.name,
          temperature: temp,
          icon: icon,
          sunrise: sunrise,
          sunset: sunset
        });
      })
      .catch((error) => {
        console.error('Ошибка при получении погоды:', error);
      });
  }, [1]);
  return (
    <div>
      <h1>
        Прогноз погоды - <span id="city">{state.city}</span>
      </h1>
      <div id="weather">
        Температура: {state.temperature}°C
      </div>
      {state.icon && (
        <img
          id="img"
          src={`https://openweathermap.org/img/wn/${state.icon}@2x.png`}
          alt="погода"
        />
      )}
      <div id="sunrise">Рассвет: {state.sunrise}</div>
      <div id="sunset">Закат: {state.sunset}</div>
    </div>
  );
}

