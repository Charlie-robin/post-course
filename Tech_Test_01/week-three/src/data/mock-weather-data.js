// LONDON

const weatherData = [
    {
      coord: { lon: -0.09, lat: 51.51 },
      sys: { country: "GB", timezone: 3600, sunrise: 1588566356, sunset: 1588620491 },
      weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
      main: {
        temp: 14.91,
        feels_like: 8.76,
        temp_min: 14.44,
        temp_max: 16.11,
        pressure: 1020,
        humidity: 58,
      },
      visibility: 10000,
      wind: { speed: 7.7, deg: 90 },
      clouds: { all: 20 },
      dt: 1588612177,
      id: 2643744,
      name: "City of London",
    },
    {
      coord: { lon: -82.19, lat: 36.6 },
      sys: { country: "US", timezone: -14400, sunrise: 1588588278, sunset: 1588637975 },
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
      main: {
        temp: 21.02,
        feels_like: 16.14,
        temp_min: 20,
        temp_max: 22,
        pressure: 1017,
        humidity: 20,
      },
      visibility: 16093,
      wind: { speed: 3.6, deg: 300 },
      clouds: { all: 1 },
      dt: 1588612548,
      id: 4749005,
      name: "City of Bristol",
    },
    {
      coord: { lon: -85.16, lat: 34.26 },
      sys: { country: "US", timezone: -14400, sunrise: 1588589249, sunset: 1588638429 },
      weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
      main: {
        temp: 27.44,
        feels_like: 28.53,
        temp_min: 27.22,
        temp_max: 28,
        pressure: 1015,
        humidity: 51,
      },
      visibility: 16093,
      wind: { speed: 1.5 },
      clouds: { all: 40 },
      dt: 1588612535,
      id: 4219762,
      name: "Rome",
    },
  ]
;

export default weatherData;
