import React from 'react';
import { DateTime } from 'luxon';
import { DailyType } from './AxiosWeekType';
import { HelperData } from './helperData';

type DayWeatherProps = {
  data: DailyType,
};

export const DayWeather: React.FC<DayWeatherProps> = ({ data }) => {
  const iconName = HelperData.iconWeather[data.weather![0].icon];
  return (
    <div>
      <div className="day_weather">
        <p className="week_day">{DateTime.fromSeconds(data.dt).setLocale('en').weekdayShort}
        </p>
        <p className="date_day">{DateTime.fromSeconds(data.dt).setLocale('en').toFormat('LLLL dd')}</p>
        {/* <img className="pict_day" src={`img/${imgName}.png`} height="50" alt="pict" */}
        <img className="pict_day" src={`img/${iconName}.png`} height="50" alt="pict"
        />
        <p><span className="temp_day">{Math.round(data.temp!.day)}°</span></p>
      </div>
    </div>
  );
};
