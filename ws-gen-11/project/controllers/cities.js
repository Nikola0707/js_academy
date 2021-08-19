const City = require('../models/city')
const successResponse = require('../lib/handlers/success-response-sender');
const errorResponse = require('../lib/handlers/error-response-sender');

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const cities = await City.find();
      successResponse(res, 'List of all cities', cities);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  fetchOne: async (req, res) => {
    try {
      const city = await City.findById(req.params.id);
      if (!city) errorResponse(res, 400, 'No city with the provided id')
      
      successResponse(res, `City with id #${req.params.id}`, city);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  create: async (req, res) => {
    try {
      const city = await City.create(req.body);
      successResponse(res, 'New city created', city);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  }
}