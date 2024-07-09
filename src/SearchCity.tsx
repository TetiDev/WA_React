import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from './store';
import { setCurrentCity } from './store/slices/appSlice';

export const SearchCity: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const refInput = useRef<HTMLInputElement>(null);

  const searchCity = (event:React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setCurrentCity(refInput.current!.value));
  };

  return (
    <div>
      <form onSubmit={searchCity}>
         <div style={{ width: '90%' }}>
           <input type="search" ref={refInput} placeholder="Search..." className="name_city_search" />
         </div>
         <div>
           <input type="submit" value="Ok" className="btn_submit"/>
         </div>
      </form>
    </div>
  );
};
