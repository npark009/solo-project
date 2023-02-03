import React, { useState, useEffect } from 'react';
import { Link, withRouter, useParams } from 'react-router-dom';
import RestInput from './RestaurantInput';
import RestList from './RestaurantList';
import BarInput from './BarInput';
import BarList from './BarList';
const API_BASE = 'http://localhost:3000';
//require data from database
const LocationHome = () => {
  const { locationId } = useParams();
  const [allData, setAllData] = useState();
  const [bars, setBars] = useState([]);
  const [barData, setBarData] = useState({
    name: '',
    type: '',
    rating: '',
  });
  const [rests, setRests] = useState([]);
  const [restData, setRestData] = useState({
    name: '',
    cuisine: '',
    rating: '',
  });

  const fetchLocations = async () => {
    try {
      const res = await fetch(API_BASE + `/location/${locationId}`);
      const data = await res.json();
      console.log('data:', data);
      setAllData(data[0]);
      setRests(data[0].restaurants);
      setBars(data[0].bars);
    } catch (err) {
      console.log('error:', err);
    }
  };
  console.log('Alldata:', allData);
  useEffect(() => {
    fetchLocations();
  }, []);

  const addBar = (inputValue) => {
    // if (inputValue === '') return;
    const res = fetch(API_BASE + `/location/${locationId}/bar/new`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(barData),
    }).catch((err) => console.log(err));
    setBars([...bars, barData]);
    setBarData({
      name: '',
      type: '',
      rating: 0,
    });
  };
  const addRest = (text) => {
    const res = fetch(API_BASE + `/location/${locationId}/restaurant/new`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restData),
    }).catch((err) => console.log(err));
    setRests([...rests, restData]);
    setRestData({
      name: '',
      cuisine: '',
      rating: '',
    });
  };
  console.log('allData:', allData);
  const deleteBar = (text) => {
    const newBars = bars.filter((bar1) => {
      return bar1 !== text;
    });
    setBars(newBars);

    fetch(API_BASE + `/location/${locationId}/bar/${name}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Deleted bar:', data);
      })
      .catch((err) => console.log('error:', err));
  };

  const deleteRest = (text) => {
    const newRests = rests.filter((rest1) => {
      return rest1 !== text;
    });
    setRests(newRests);
  };

  return (
    <section id="location-home">
      <div id="location header">
        <h1 type="location-title">
          {allData && allData.location.toUpperCase()}
        </h1>
      </div>
      <div id="recs-container">
        <div id="restaurant-rec">
          <h2 className="location-h2">RESTAURANTS</h2>
          <RestList restList={rests} removeRest={deleteRest} />
          <RestInput
            restData={restData}
            restList={rests}
            setRestData={setRestData}
            addRest={addRest}
          />
        </div>
        <div id="bar-rec">
          <h2 className="location-h2">BARS</h2>
          <BarList barList={bars} removeBar={deleteBar} />
          <BarInput
            barData={barData}
            barList={bars}
            setBarData={setBarData}
            addBar={addBar}
          />
        </div>
      </div>
    </section>
  );
};

export default LocationHome;
