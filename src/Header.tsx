import React from 'react';
import { useDispatch } from 'react-redux';
import { HelperData } from './helperData';
import { SearchCity } from './SearchCity';
import { Capitalize } from './capitalize';
import { AppDispatch } from './store';
import { setCurrentCity } from './store/slices/appSlice';

export const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const currentCity = useSelector<RootState, string>((state) => state.app.currentCity);
  // const dataForecast = useSelector<RootState, string>((state) => state.app.dataForecast);

  const changeCity = (event: React.MouseEvent<HTMLSpanElement>) => {
    dispatch(setCurrentCity(Capitalize(event.currentTarget.id)));
  };

  return (
        <div>
            <header>
                <h1>WeatherWidget</h1>
            </header>
            <div className="block_weather">
                <div className="caption_city">
                    {HelperData.cities.map((city, key) => (
                        <span key={key} id={city} onClick={changeCity}>{city}</span>
                    ))}
                </div>
                <div className="search_city">
                    <SearchCity/>
                </div>
            </div>
        </div>
  );
};
