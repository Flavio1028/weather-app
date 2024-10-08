export interface WeatherDatas {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: String,
      description: String,
      icon: String
    }
  ],
  base: String,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    contry: String,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: String,
  code: number
}
