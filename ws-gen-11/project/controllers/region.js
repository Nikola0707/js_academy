const Region = require('../models/region')
const successResponse = require('../lib/handlers/success-response-sender');
const errorResponse = require('../lib/handlers/error-response-sender');
const regionWeatherByCoordinates = require('../lib/openweather/region-weather-by-coordinates')

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const regions = await Region.find();
      successResponse(res, 'List of all regions', regions);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  fetchOne: async (req, res) => {
    try {
      let region = await Region.findById(req.params.id);
      if (!region) errorResponse(res, 400, 'No region with the provided id')

      region = region.toObject();
      region = {
        ...region,
        weather: await regionWeatherByCoordinates(region.lat, region.lon, region.number),
      }

      successResponse(res, `Region with id #${req.params.id}`, region);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  create: async (req, res) => {
    try {
      const region = await Region.create(req.body);
      successResponse(res, 'New region added', region);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  }
}