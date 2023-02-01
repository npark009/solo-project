import React, { useState } from 'react';

const restList = ({ restList, removeRest }) => {
  if (restList?.length > 0) {
    return (
      <ul className="rest-list">
        {restList.map((rest, index) => {
          return (
            <div className="rest">
              <li key={index}>{rest.rest}</li>

              <button
                className="delete-rest"
                onClick={() => {
                  removeRest(rest);
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

export default restList;
