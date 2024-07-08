import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataForecastType } from '../../types';

export interface IAppState {
  currentCity: string,
  dataForecast: DataForecastType,
}

const initialState: IAppState = {
  currentCity: '',
  dataForecast: {
    current: {
      temp: 0,
      clouds: 0,
      dew_point: 0,
      dt: 0,
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      sunrise: 0,
      sunset: 0,
      wind_deg: 0,
      wind_gust: 0,
      wind_speed: 0,
      weather: [],
    },
    lat: 0,
    lon: 0,
    daily: [],
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    setDataForecast: (state, action: PayloadAction<DataForecastType>) => {
      state.dataForecast = action.payload;
    },
  },
});

export const {
  setCurrentCity,
  setDataForecast,
} = appSlice.actions;

export default appSlice.reducer;
