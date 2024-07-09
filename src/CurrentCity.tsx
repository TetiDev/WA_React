import React, {
  useCallback, useState,
} from 'react';
import { useSelector } from 'react-redux';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import { RootState } from './store';
import { DataForecastType } from './types';
import { capitalize } from './capitalize';
import { HelperData } from './helperData';

export const CurrentCity: React.FC = () => {
  const currentCity = useSelector<RootState, string>((state) => state.app.currentCity);
  const dataForecast = useSelector<RootState, DataForecastType>((state) => state.app.dataForecast);
  const { current } = dataForecast;
  const [switchTemp, setSwitchTemp] = useState<'cel' | 'far'>('cel');

  // const imgName = current && current.weather[0] ? current.weather[0].description.replace(' ', '_') : '';
  const imgName = current && current.weather[0] ? HelperData.iconWeather[current.weather![0].icon] : '';
  const date = new Date(dataForecast.current?.dt! * 1000);
  const options: DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
  const curDate = date.toLocaleDateString('en-US', options);

  const switchTemperature = useCallback((event: any) => {
    if (event.target.className === 'measureC') {
      setSwitchTemp('cel');
    } else {
      setSwitchTemp('far');
    }
  }, [switchTemp]);

  const getTemperature = useCallback(() => {
    if (!dataForecast.current) {
      return '';
    }

    const temp = switchTemp === 'cel' ? dataForecast.current.temp : (dataForecast.current.temp * 9) / 5 + 32;
    return dataForecast.current ? Math.round(temp) : 0;
  }, [currentCity, switchTemp]);

  return (
        <div>
            <div className="current_city">
                <div className="current_city_header">
                    <img className="ico_pict_day" src="img/pin.png" alt="" width={30}/>
                    <span className="caption_current_city">{capitalize(currentCity)}</span>
                </div>
                <div className="block_weather block_weather__color">
                    <div className="weather_city">
                        <div style={{ width: '60%' }}>
                            <img className="pict_day"
                                 src={`img/${imgName}.png`}
                                 height="140"
                                 alt="type"
                            />
                             <p className="type_weather">{current && current.weather[0] ? capitalize(current.weather[0].description) : ''}</p>
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
                                    <img className="pict_day" src="img/wind.png" height="40" alt="wind"/>
                                </div>
                                <div style={{ marginLeft: '20px' }}>
                                    <p>Wind</p>
                                    <span className="speed_wind">{`${dataForecast.current ? Math.round(dataForecast.current.wind_speed) : 0} km/h`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
