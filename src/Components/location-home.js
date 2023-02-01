import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import RestInput from './restaurantInput';
import RestList from './restaurantList';
import BarInput from './barInput';
import BarList from './barList';
//require data from database
const LocationHome = () => {
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
    <div>
      <div id="location">
        <h1>Travel Location</h1>
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
    </div>
  );
};

export default LocationHome;
