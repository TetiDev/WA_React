import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from './Header';
import CurrentCity from './CurrentCity';
import DailyWeather from './DailyWeather';
import Footer from './Footer';

import { Context } from './context';
import { HelperData } from './helperData';
import { AxiosDayType } from './AxiocDayType';
import { AxiosWeekType } from './AxiosWeekType';

function App() {
  const [city, setCity] = useState('');
  const [dataDay, setDataDay] = useState<AxiosDayType>();
  const [dataWeek, setDataWeek] = useState<AxiosWeekType>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const curLatitude = position.coords.latitude;
      const curLongitude = position.coords.longitude;

      const urlCurCity = `https://api.openweathermap.org/data/2.5/weather?lat=${curLatitude}&lon=${curLongitude}&appid=${HelperData.apiKey}&units=metric`;
      (async () => {
        const responseCurCity = await axios.get(urlCurCity);
        setCity(responseCurCity.data.name);
      })();
    });
  }, []);

  useEffect(() => {
    (
      async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${HelperData.apiKey}&units=metric`;
        const responseDay = await axios.get(url);
        setDataDay(responseDay.data);
        const urlLatLon = `https://api.openweathermap.org/data/2.5/onecall?lat=${responseDay.data.coord.lat}&lon=${responseDay.data.coord.lon}&appid=${HelperData.apiKey}&units=metric`;
        const responseWeek = await axios.get(urlLatLon);
        setDataWeek(responseWeek.data);
      }
    )();
  }, [city]);

  return (
        <div className="App">
            <Context.Provider value={{
              city, setCity, dataDay, dataWeek,
            }}>
                <Header/>
                <CurrentCity/>
                <DailyWeather/>
                <Footer/>
            </Context.Provider>
        </div>
  );
}

export default App;
