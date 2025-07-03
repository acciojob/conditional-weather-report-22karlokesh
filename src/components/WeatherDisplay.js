import React from "react";

const WeatherDisplay = ({ weather }) => {
  // determine style
  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>Temperature: <span style={tempStyle}>{weather.temperature}°C</span></p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
