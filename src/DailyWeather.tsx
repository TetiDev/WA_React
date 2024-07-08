import React from 'react';
import { useSelector } from 'react-redux';
import { DayWeather } from './DayWeather';
import { RootState } from './store';
import { DataForecastType } from './types';

export default function DailyWeather() {
  const dataForecast = useSelector<RootState, DataForecastType>((state) => state.app.dataForecast);
  return (
    <div>
      <div>
        <div className="block_weather">
          <div className="days_weather">
            {dataForecast.daily
              .filter((elem, index) => index < 5)
              .map((elem, index) => <DayWeather key={index} data={elem}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
