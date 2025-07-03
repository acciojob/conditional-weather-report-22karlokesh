import React from "react";

const WeatherDisplay = () => {
  const temperature = 25;
  const conditions = "Sunny";
  const tempStyle = {
    color: temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>Temperature: <span style={tempStyle}>{temperature}°C</span></p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
