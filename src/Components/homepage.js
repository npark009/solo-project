import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Link, withRouter, useParams } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <section id="newLocation">
        <div id="homepage-header">
          <h1>WHERE'S YOUR NEXT ADVENTURE?</h1>
        </div>
        <TextField
          id="outlined-basic"
          label="Add New Location"
          variant="outlined"
          sx={{ width: 800 }}
        />
      </section>
      <div id="space"></div>
      <h2 id="pastLocationTitle">PAST EXPLORATIONS</h2>
      <section id="pastLocation">
        <div className="scrolling-wrapper">
          <div className="card">New Location Here</div>
          <div className="card">New Location Here</div>
          <div className="card">New Location Here</div>
          <div className="card">New Location Here</div>
          <div className="card">New Location Here</div>
          <div className="card">New Location Here</div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
//create button specific to location
//each button has a specific id
//onclick function, take in e and store target id,
// use target id to make fetch request
