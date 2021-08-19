const axios = require('axios');

module.exports = async (lat, lon, number) => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${number}&units=metric&lang=mk&appid=9b5fa6d25b8720bf3aa2591a22661c04`)

  const arr = []
  res.data.list.forEach(element => {
    const weather = {
      location: element.name,
      country: element.sys.country,
      temp: element.main.temp,
      description: element.weather[0].description
    }
    arr.push(weather)
  });
  return arr
}
