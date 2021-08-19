const axios = require('axios');

module.exports = async (blogPost) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather` +
    `?q=${blogPost.city.name}&appid=9b5fa6d25b8720bf3aa2591a22661c04`
  );
  const data = res.data;

  blogPost.city.coordinates = {
    lon: data.coord.lon,
    lat: data.coord.lat
  }

  blogPost.city.weather = {
    description: `${data.weather[0].main} (${data.weather[0].description})`,
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max
  }

  return blogPost
}