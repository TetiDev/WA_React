import React, { useContext } from 'react';
import { Context } from './context';
import { DayWeather } from './DayWeather';

export default function DailyWeather() {
  const context = useContext(Context);
  // console.log(context?.dataWeek?.daily, '8888');
  return (
    <div>
      <div>
        <div className="block_weather">
          <div className="days_weather">
            {context?.dataWeek?.daily?.filter((elem, index) => index < 4).map((elem, index) => <DayWeather key={index} data={elem}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}
