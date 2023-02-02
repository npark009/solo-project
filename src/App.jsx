import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import LocationHome from './Components/LocationHome';
import HomePage from './Components/HomePage';
const App = () => {
  return (
    <div className="router">
      <main>
        <Routes>
          <Route
            exact
            path="/:locationName"
            component={() => <LocationHome />}
          />
          <Route exact path="/" component={() => <HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
