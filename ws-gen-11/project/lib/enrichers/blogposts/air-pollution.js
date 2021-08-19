const axios = require('axios');

module.exports = async (blogPost) => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/air_pollution` +
    `?lat=${blogPost.city.coordinates.lat}&lon=${blogPost.city.coordinates.lon}` +
    `&appid=9b5fa6d25b8720bf3aa2591a22661c04`
  );
  const data = res.data.list[0];

  blogPost.city.air_pollution = {
    date: new Date(data.dt).toLocaleDateString("en-US"),
    carbon_monoxide: data.components.co,
    ozone: data.components.o3,
    sulphur_dioxide: data.components.so2
  }

  return blogPost
}