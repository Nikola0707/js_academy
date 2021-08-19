const axios = require('axios')

module.exports = async (lat, lon) => {
  const res = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=9b5fa6d25b8720bf3aa2591a22661c04`)

  return {
    co: res.data.list[0].components.co,
    pm10: res.data.list[0].components.pm10,
    pm2_5: res.data.list[0].components.pm2_5
  }
}