import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  // Conditional inline style for temperature span
  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      {/* Temperature paragraph with span wrapping temperature + °C */}
      <p>
        Temperature: <span style={tempStyle}>{weather.temperature}°C</span>
      </p>

      {/* Conditions paragraph */}
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default App;
