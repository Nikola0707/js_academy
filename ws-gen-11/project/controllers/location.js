const Location = require('../models/location')
const successResponse = require('../lib/handlers/success-response-sender');
const errorResponse = require('../lib/handlers/error-response-sender');
const locationWeatherByCoordinates = require ('../lib/openweather/location-weather-by-coordinates')
const locationPollutionByCoordinates = require('../lib/openweather/location-pollution-by-coordinates')

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const locations = await Location.find();
      successResponse(res, 'List of all locations', locations);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  fetchOne: async (req, res) => {
    try {
      let location = await Location.findById(req.params.id);
      if (!location) errorResponse(res, 400, 'No location with the provided id')

      location = location.toObject();
      location = {
        ...location,
        weather: await locationWeatherByCoordinates(location.lat, location.lon),
        pollution: await locationPollutionByCoordinates(location.lat, location.lon)
      }

      successResponse(res, `Location with id #${req.params.id}`, location);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  create: async (req, res) => {
    try {
      const location = await Location.create(req.body);
      successResponse(res, 'New location added', location);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  }
}