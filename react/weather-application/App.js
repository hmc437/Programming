import './App.css';
import React, { useState } from 'react';

const api = {
  key: "d6dab78cd0a8a69ca5418ad1454cef56",
  base: "https://api.openweathermap.org/"
}

function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const geoApiBase = 'http://api.openweathermap.org/geo/1.0/direct';
  const weatherApiBase = 'http://api.openweathermap.org/data/2.5/weather';
  
  const search = evt => {
    if (evt.key === "Enter") {
      const cityName = evt.target.value;
      fetch(`${geoApiBase}?q=${cityName}&limit=1&appid=${api.key}`)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            fetchWeather(lat, lon);
          } else {
            console.log('City not found');
          }
        })
        .catch(error => console.error('Error fetching geolocation data:', error));
    }
  };
  
  const fetchWeather = (lat, lon) => {
    fetch(`${weatherApiBase}?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(weatherData => {
        setWeather(weatherData);
        console.log(weatherData);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  };

  const dateBuilder =(d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day= days[d.getDay()];
    let date= d.getDate();
    let month= months[d.getMonth()];
    let year= d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp>16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className='caja-buscar'>
          <input
            type="text" 
            className="barra-buscar" 
            placeholder='Search...' 
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="caja-ubicacion">
            <div className="ubicacion"> {weather.name}, {weather.sys.country}</div>
            <div className="fecha">{dateBuilder(new Date())}</div>
          </div>
          <div className='caja-tiempo'>
            <div className="temperatura">
              {Math.round(weather.main.temp)}ºC
            </div> 
            <div className='tiempo'>{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
