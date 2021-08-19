const axios = require('axios');

module.exports = async (lat, lon) => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely,current&appid=9b5fa6d25b8720bf3aa2591a22661c04`)

  return {
    location: res.data.timezone,
    dt: res.data.daily[0].dt,
    morning: res.data.daily[0].temp.morn,
    day: res.data.daily[0].temp.day,
    evening: res.data.daily[0].temp.eve,
    night: res.data.daily[0].temp.night,
    min: res.data.daily[0].temp.min,
    max: res.data.daily[0].temp.max
  }
}
