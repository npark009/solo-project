import React, { useState, useEffect } from 'react';
import { Link, withRouter, useParams } from 'react-router-dom';
import RestInput from './RestaurantInput';
import RestList from './RestaurantList';
import BarInput from './BarInput';
import BarList from './BarList';
//require data from database
const LocationHome = () => {
  const { locationName } = useParams();
  const [bars, setBars] = useState([]);
  const [bar, setBar] = useState('');
  const [rests, setRests] = useState([]);
  const [rest, setRest] = useState('');

  const addBar = (text) => {
    if (bar !== '') {
      setBars([...bars, { bar }]);
      setBar('');
    }
  };
  const addRest = (text) => {
    if (rest !== '') {
      setRests([...rests, { rest }]);
      setRest('');
    }
  };

  const deleteBar = (text) => {
    const newBars = bars.filter((bar1) => {
      return bar1 !== text;
    });
    setBars(newBars);
  };

  const deleteRest = (text) => {
    const newRests = rests.filter((rest1) => {
      return rest1 !== text;
    });
    setRests(newRests);
  };

  return (
    <section>
      <div id="location header">
        <h1>{locationName}</h1>
      </div>
      <div id="recs-container">
        <div id="restaurant-rec">
          <h2>Restaurants</h2>
          <RestInput
            rest={rest}
            restList={rests}
            setRest={setRest}
            addRest={addRest}
          />
          <RestList restList={rests} removeRest={deleteRest} />
        </div>
        <div id="bar-rec">
          <h2>Bars</h2>
          <BarInput bar={bar} barList={bars} setBar={setBar} addBar={addBar} />
          <BarList barList={bars} removeBar={deleteBar} />
        </div>
      </div>
    </section>
  );
};

export default LocationHome;
