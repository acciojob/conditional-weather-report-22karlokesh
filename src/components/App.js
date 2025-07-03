// App.js
import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
