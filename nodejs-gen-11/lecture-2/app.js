const cities = require('./cities-data')
const findLargestCity = require('./largest-city')

const city = findLargestCity(cities)

console.log(city)
printMail(city)
printPDF(city)

// Single Responsibility Principle