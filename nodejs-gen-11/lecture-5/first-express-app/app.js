const express = require('express')
const app = express()

app
  .get('/history', (request, response) => {
    response.send('Ova e history page');
  })
  .post('/location', (req, res) => {
    response.send('Ova e location page');
  })
  .put('/number', (req, res) => {
    res.send('070-443-213');
  })
  .patch('/city', (req, res) => {
    res.send('Skopje');
  });

app.listen(3000, () => {
  console.log('Aplikacijata e startuvana na porta 3000...')
});
