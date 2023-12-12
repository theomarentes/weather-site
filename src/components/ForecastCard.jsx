import React from 'react';

const ForecastCard = ({ day, date, maxTemp, minTemp, image, location }) => {
  return (
    <div className="forecast-card">
        {/* Template for image */}
      <img src={require(image)} alt="Weather Image" />    
      <div className="card-body">
        <div className="card-title">
            {/* City that info is being displayed for */}
          <div className="location-container">{location}</div>
          {/* Day and Date */}
          <div>{`${day} - ${date}`}</div>
        </div>
        <div className="card-text">
            {/* Min and Max temps of the day */}
          {`Min: ${minTemp}°F Max: ${maxTemp}°F `}
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;