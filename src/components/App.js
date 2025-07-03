import React, { useState } from "react";

const App = () => {
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p style={tempStyle}>{`Temperature: ${weather.temperature}\u00B0C`}</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default App;
