import React, { useContext } from 'react';
import { Context } from './context';
import { HelperData } from './helperData';
import { SearchCity } from './SearchCity';
import { Capitalize } from './capitalize';
import { ContextDataType } from './ContextDataType';

export const Header: React.FC = () => {
  const context = useContext<ContextDataType | null>(Context);

  const changeCity = (event:React.MouseEvent<HTMLSpanElement>) => {
    context!.setCity(Capitalize(event.currentTarget.id));
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
          <SearchCity />
        </div>
      </div>
    </div>
  );
};
