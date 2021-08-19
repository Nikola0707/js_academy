const express = require('express');
const app = express();

app.use(express.json());

let countries = [];

app
  .get('/countries', (req, res) => {
    console.log('query params: ', req.query)
    res.send(countries);
  })
  .post('/countries', (req, res) => {
    countries.push(req.body)

    res.send({
      message: "You have successfully created a new country",
      country: req.body
    });
  })
  .delete('/countries', (req, res) => {
    countries = countries.filter(country => {
      return country.name != req.body.name
    });

    res.send(countries);
  });

app.listen(3000, () => { 
  console.log('App is running on port 3000...');
});