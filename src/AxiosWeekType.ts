export type AxiosWeekType = {
  current?: CurrentType,
  daily: DailyType[],
  lon?: number,
  lat?: number,
};

type CurrentType = {
  temp: number,
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

type WeatherType = {
  description: string,
  icon: string
};
