export type AxiosDayType = {
  coord?: CoordType,
  main?: MainType,
  wind?: WindType,
  weather?: WeatherType[],
  name?: string,
  dt?: number
};

type WindType = {
  speed: number
};

type WeatherType = {
  description: string,
  main: string
};

type CoordType = {
  lon: number,
  lat: number
};

type MainType = {
  temp: number
};
