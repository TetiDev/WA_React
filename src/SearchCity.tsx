import React, { useContext, useRef } from 'react';
import { Context } from './context';

export const SearchCity: React.FC = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const context = useContext(Context);

  function searchCity(event:React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    context!.setCity(refInput.current!.value);
  }

  return (
    <div>
      <form onSubmit={searchCity}>
         <div style={{ width: '90%' }}>
           <input type="search" ref={refInput} placeholder="Search..." className="name_city_search" />
         </div>
         <div style={{ width: '10%' }}>
           <input type="submit" value="Ok" className="btn_submit"/>
         </div>
      </form>
    </div>
  );
};
