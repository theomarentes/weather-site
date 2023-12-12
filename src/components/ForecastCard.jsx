// need to link bootstrap

import React from 'react';

const ForecastCard = ({ day, date, maxTemp, minTemp, image, location }) => {
  return (
    <div className="card">
        {/* Template for image */}
      <img src= "../image" className="card-img-top" alt="Weather Image" />
      <div className="card-body">
        {/* City that info is being displayed for */}
        <h5 className="card-title">{location}</h5>
        {/* Day and Date */}
        <p className="card-text">{`${day} - ${date}`}</p>
        <p className="card-text">
            {/* Min and Max temps of the day */}
          {`Min: ${minTemp}°F Max: ${maxTemp}°F `}
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;