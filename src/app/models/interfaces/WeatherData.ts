export interface weatherData {
  coord: {
    lon: number,
    lat: number
  },

  weather: [
    {
    id: number,
    main: string,
    description: string,
    icon: string
    }
  ];
  base: string,
  main: {
    feels_like: number,
    humidity: number,
    temp: number,
    temp_max: number,
    temp_min: number,
    pressure: number
  },
  visibility: number,
  wind: {
    deg: number,
    speed: number
  },
  clouds: {
    all: number,
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id:number,
  name: string,
  cod: number

}
