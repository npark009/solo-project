import React, { useState } from 'react';

const BarInput = ({ barData, barList, setBarData, addBar }) => {
  return (
    <div className="set-bar">
      <input
        type="text"
        value={barData.name}
        onChange={(e) => setBarData({ ...barData, name: e.target.value })}
        placeholder="Bar Name"
      />
      <select
        value={barData.type}
        onChange={(e) => setBarData({ ...barData, type: e.target.value })}
      >
        <option value="">Select Type</option>
        <option value="pub">Soju #1</option>
        <option value="sportsbar">Sports Bar</option>
        <option value="lounge">Lounge</option>
        <option value="club">Club</option>
        <option value="cocktail">Cocktail</option>
        <option value="dive">Dive Bar</option>
        <option value="izakaya">Izakaya</option>
        <option value="speakeasy">Speakeasy</option>
      </select>

      <select
        value={barData.rating}
        onChange={(e) => setBarData({ ...barData, rating: e.target.value })}
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
      <button className="add-bar" onClick={addBar}>
        Add Bar
      </button>
    </div>
  );
};

export default BarInput;
