const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/travel-log', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});
app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../dist')));

const Recommendations = require('./models/Recommendations');

app.get('/location/:locationId', async (req, res) => {
  const locations = await Recommendations.find();
  res.json(locations);
});

app.post('/location/new', (req, res) => {
  const location = new Recommendations({
    location: req.body.location,
  });
  location.save((err) => {
    if (err) res.status(500).send(err);
    else res.send(location);
  });
});

app.put('/location/:locationId/restaurant/new', (req, res) => {
  Recommendations.findOneAndUpdate(
    { location: req.params.locationId },
    (err, rec) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        rec.restaurants.push({
          name: req.body.restaurants.name,
          cuisine: req.body.restaurants.cuisine,
          rating: req.body.restaurants.rating,
        });
      }
      rec.save((err, updatedRec) => {
        if (err) return res.status(500).send(err);
        else res.send(updatedRec);
      });
    }
  );
});

app.put('/location/:locationId/bar/new', (req, res) => {
  Recommendations.findOneAndUpdate(
    { location: req.params.locationId },
    (err, rec) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        rec.bars.push({
          name: req.body.bars.name,
          type: req.body.bars.type,
          rating: req.body.bars.rating,
        });
      }
      rec.save((err, updatedRec) => {
        if (err) return res.status(500).send(err);
        else res.send(updatedRec);
      });
    }
  );
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('server started on port 3000'));
