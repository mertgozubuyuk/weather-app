import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import "../css/AppBar.css";

function AppBar() {
  return (
    <header className="app-bar">
      <div className="app-brand">
        <span className="app-icon">
          <TiWeatherPartlySunny />
        </span>
        <h1 className="app-header">WeatherApp</h1>
      </div>
    </header>
  );
}

export default AppBar;
