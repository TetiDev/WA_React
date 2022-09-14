import React, {
  useCallback, useContext, useState,
} from 'react';
import { Context } from './context';
import { Capitalize } from './capitalize';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export default function CurrentCity() {
  const context = useContext(Context);
  const [switchTemp, setSwitchTemp] = useState<'cel' | 'far'>('cel');

  // console.log(context!.dataDay);
  const imgName = context!.dataDay ? context!.dataDay.weather![0].description.replace(' ', '_') : '';
  const date = new Date(context!.dataDay?.dt! * 1000);
  const options:DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
  const curDate = date.toLocaleDateString('en-US', options);

  const switchTemperature = useCallback((event: any) => {
    if (event.target.className === 'measureC') {
      setSwitchTemp('cel');
    } else {
      setSwitchTemp('far');
    }
  }, [switchTemp]);

  const getTemperature = useCallback(() => {
    if (!context!.dataDay) {
      return '';
    }

    const temp = switchTemp === 'cel' ? context!.dataDay!.main!.temp : (context!.dataDay!.main!.temp * 9) / 5 + 32;
    return context!.dataDay ? Math.round(temp) : 0;
  }, [context, switchTemp]);

  return (
    <div>
      <div className="current_city">
        <div className="current_city_header">
          <img className="ico_pict_day" src="https://img.kidico.com.ua/shecode/Group_1.png" alt="" />
          <span className="caption_current_city">{context!.city}</span>
        </div>
        <div className="block_weather block_weather__color">
          <div className="weather_city">
            <div style={{ width: '60%' }}>
              <img className="pict_day"
                   src={`img/${imgName}.png`}
              // src="https://img.kidico.com.ua/shecode/sunny.png"
                // {`img/${context.data.weather[0].description}.png`}
                height="140"
                alt="type"
              />
              <p className="type_weather">{context!.dataDay ? Capitalize(context!.dataDay.weather![0].description) : ''}</p>
              <p className="cur_date">{curDate}</p>
            </div>
            <div style={{ width: '40%', position: 'relative' }}>
              <div>
                <span className="current_temp_day">{getTemperature()}</span>
                <span className="current_measure">°</span>
              </div>
              <div
                style={{
                  padding: '0', position: 'absolute', top: 0, right: 0,
                }}
              >
                <a href="#" className="measureC" onClick={switchTemperature}>°C</a>
                <span className="measureHr"> / </span>
                <a href="#" className="measureF" onClick={switchTemperature}>°F</a>
              </div>
              <div style={{ display: 'flex' }}>
                <div>
                  <img className="pict_day" src="img/wind.png" height="40" alt="wind" />
                </div>
                <div style={{ marginLeft: '20px' }}>
                  <p>Wind</p>
                  <span className="speed_wind">{context!.dataDay ? Math.round(context!.dataDay.wind!.speed) : 0}</span>
                  <span> km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
