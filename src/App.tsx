import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';
import Footer from './Footer';
import { HelperData } from './helperData';
import { AppDispatch, RootState } from './store';
import { setCurrentCity, setDataForecast } from './store/slices/appSlice';
import DailyWeather from './DailyWeather';
import { CurrentCity } from './CurrentCity';
// import { CurrentCity } from './CurrentCity';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState<string | null>(null);
  const currentCity = useSelector<RootState, string>((state) => state.app.currentCity);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude } = position.coords;
          const { longitude } = position.coords;
          const urlCurCity = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${HelperData.apiKey}&units=metric`;
          (async () => {
            const responseCurCity = await axios.get(urlCurCity);
            dispatch(setCurrentCity(responseCurCity.data.name));
          })();
        },
        (geolocationError) => {
          setError(geolocationError.message);
        },
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    (
      async () => {
        const urlNewCity = `https://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=${HelperData.apiKey}`;
        const responseNewCity = await axios.get(urlNewCity);
        const { lat, lon } = responseNewCity.data[0];
        const urlLatLon = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${HelperData.apiKey}&units=metric`;
        const responseWeek = await axios.get(urlLatLon);
        dispatch(setDataForecast(responseWeek.data));
      }
    )();
  }, [currentCity]);

  return (
        <div className="App">
            {error && <p>Error: {error}</p>}
            <Header/>
            <CurrentCity/>
            <DailyWeather/>
            <Footer/>
        </div>
  );
}

export default App;
