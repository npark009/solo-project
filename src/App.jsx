import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LocationHome from './Components/LocationHome';
import HomePage from './Components/HomePage';
const API_BASE = 'http://localhost:3000';
const App = () => {
  return (
    <div className="router">
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/location/:locationId"
            element={<LocationHome />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
