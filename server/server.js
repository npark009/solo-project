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

app.get('/location/:id', async (req, res) => {
  const locations = await Recommendations.find({ _id: req.params.id });
  res.json(locations);
});

app.get('/locations', async (req, res) => {
  const locations = await Recommendations.find({});
  return res.send(locations);
});

app.post('/location/new', (req, res) => {
  const location = new Recommendations({
    location: req.body.location,
  });
  console.log('req.body', req.body);
  location.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(location);
    }
  });
});

app.put('/location/:id/restaurant/new', async (req, res) => {
  const rec = await Recommendations.findById(req.params.id);
  console.log('reqbody', req.body);
  console.log('1rec.restaurants', rec.restaurants);
  if (rec) {
    console.log('2rec.restaurants', rec.restaurants);
    rec.restaurants.push({
      name: req.body.name,
      cuisine: req.body.cuisine,
      rating: req.body.rating,
    });
    const updatedRec = await rec.save();
    return res.send(updatedRec);
  }
  res.status(500).send({ error: 'Could not update the recommendation' });
});

app.put('/location/:id/bar/new', async (req, res) => {
  const rec = await Recommendations.findById(req.params.id);
  if (rec) {
    rec.bars.push({
      name: req.body.name,
      type: req.body.type,
      rating: req.body.rating,
    });
    const updatedRec = await rec.save();
    return res.send(updatedRec);
  }
  res.status(500).send({ error: 'Could not update the recommendation' });
});

app.delete('/location/:id', async (req, res) => {
  //delete lcoation as a whole
  const result = await Recommendations.findByIdAndDelete(req.params.id);
  if (result) return res.send(result);
  res.status(500).send({ error: 'Could not delete the location' });
});

app.delete('/location/:id/restaurant/:name', async (req, res) => {
  //delete A particular restaurant recommendation
  const rec = await Recommendations.findById(req.params.id);
  if (rec) {
    rec.restaurants = rec.restaurants.filter((restaurant) => {
      return (
        restaurant.name.toLowerCase().split(' ').join('') !==
        decodeURIComponent(req.params.name.toLowerCase())
      );
    });
    const updatedRec = await rec.save();
    return res.send(updatedRec);
  }
  res.status(500).send({ error: 'Could not delete the restaurant' });
});

app.delete('/location/:id/bar/:name', async (req, res) => {
  //delete A particular restaurant recommendation
  const rec = await Recommendations.findById(req.params.id);
  if (rec) {
    rec.bars = rec.bars.filter((bar) => {
      return (
        bar.name.toLowerCase().split(' ').join('') !==
        decodeURIComponent(req.params.name.toLowerCase())
      );
    });
    const updatedRec = await rec.save();
    return res.send(updatedRec);
  }
  res.status(500).send({ error: 'Could not delete the restaurant' });
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
