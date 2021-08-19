var express = require('express');
var router = express.Router();
const doctorsController = require('../controllers/doctors');
const patientsController = require('../controllers/patients')

router
  .get('/', doctorsController.getAll)
  .get('/doctors', doctorsController.getAll)
  .get('/doctors/:id', doctorsController.getOne)
  .get('/doctors/create', doctorsController.create)
  .post('/doctors', doctorsController.postCreate)
  .post('/doctors/:id', doctorsController.postUpdate)
  .delete('/doctors/:id', doctorsController.delete)
  .get('/doctors/:id/patients', doctorsController.patients)
  .get('/patients', patientsController.getAll)
  .get('/patients/:id', patientsController.getOne)
  .get('/patients/create', patientsController.create)
  .post('/patients', patientsController.postCreate)
  .post('/patients/:id', patientsController.postUpdate)
  .delete('/patients/:id', patientsController.delete)

module.exports = router;
