import React, { useState } from 'react';

const BarInput = ({ bar, barList, setBar, addBar }) => {
  return (
    <div className="set-bar">
      <input
        type="text"
        value={bar}
        onChange={(e) => setBar(e.target.value)}
        placeholder="Bar Name"
      />
      <button className="add-bar" onClick={addBar}>
        Add Bar
      </button>
    </div>
  );
};

export default BarInput;
