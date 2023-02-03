import React, { useState } from 'react';

const RestInput = ({ restData, restList, setRestData, addRest }) => {
  return (
    <div className="set-bar">
      <input
        type="text"
        value={restData.name}
        onChange={(e) => setRestData({ ...restData, name: e.target.value })}
        placeholder="Restaurant Name"
      />
      <input
        type="text"
        value={restData.cuisine}
        onChange={(e) => setRestData({ ...restData, cuisine: e.target.value })}
        placeholder="Cuisine"
      />
      <select
        value={restData.rating}
        onChange={(e) => setRestData({ ...restData, rating: e.target.value })}
      >
        <option value="">Select Rating</option>
        <option value="1">1.0</option>
        <option value="1.5">1.5</option>
        <option value="2">2.0</option>
        <option value="2.5">2.5</option>
        <option value="3">3.0</option>
        <option value="3.5">3.5</option>
        <option value="4">4.0</option>
        <option value="4.5">4.5</option>
        <option value="5.0">5.0</option>
      </select>
      <button className="add-rest" onClick={addRest}>
        Add Restaurant
      </button>
    </div>
  );
};

export default RestInput;
