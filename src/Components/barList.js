import React, { useState } from 'react';

const barList = ({ barList, removeBar }) => {
  if (barList?.length > 0) {
    return (
      <ul className="bar-list">
        {barList.map((bar, index) => {
          return (
            <div className="bar">
              <li key={index}>{bar.bar}</li>
              <button
                className="delete-bar"
                onClick={() => {
                  removeBar(bar);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return (
      <div className="empty">
        <p>No Input Found</p>
      </div>
    );
  }
};

export default barList;
