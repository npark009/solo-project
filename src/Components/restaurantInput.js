import React, { useState } from 'react';

const RestInput = ({ rest, restList, setRest, addRest }) => {
  return (
    <div className="rec-div">
      <input
        type="text"
        value={rest}
        onChange={(e) => setRest(e.target.value)}
        placeholder="Restaurant Name"
      />
      <button className="add-rest" onClick={addRest}>
        Add Restaurant
      </button>
    </div>
  );
};

export default RestInput;
