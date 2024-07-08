export type DataForecastType = {
  current?: CurrentType,
  daily: DailyType[],
  lon?: number,
  lat?: number,
};

type CurrentType = {
  temp: number,
  clouds: number,
  dew_point: number,
  dt: number
  feels_like: number,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number,
  wind_deg: number,
  wind_gust: number,
  wind_speed: number,
  weather: WeatherType[]
};

type WeatherType = {
  description: string,
  main: string,
  icon: string
};

export type DailyType = {
  feels_like?: FeelsType,
  temp?: TempType,
  weather?: WeatherType[],
  dt: number
};

type FeelsType = {
  day: number,
  eve?: number,
  morn?: number,
  night?: number
};

type TempType = {
  day: number,
  min?: number,
  max?: number,
  night?:number,
  eve?: number,
  morn?: number,
};
