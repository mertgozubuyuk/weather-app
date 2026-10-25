# 🌤️ WeatherApp

A modern, responsive weather application built with **React** and **Vite** that fetches real-time weather data using the **OpenWeatherMap API**. Styled with a clean **Glassmorphism** UI.

## 🌐 Live Demo

👉 **[View Live App on Vercel](https://weather-app-wine-zeta-55.vercel.app/)**

## ✨ Features

- 🔍 **City Search:** Search for real-time weather conditions in any city worldwide.
- 🌡️ **Detailed Metrics:** Displays current temperature (°C), weather description, dynamic weather icon, humidity (%), and wind speed (km/h).
- 🪟 **Glassmorphism Design:** Modern frosted-glass cards, smooth transitions, and gradient backgrounds.
- ⏳ **Loading & Error States:** Dedicated loading spinner and user-friendly error messages when a city is not found.

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **HTTP Client:** Axios
- **Icons:** React Icons (`react-icons`)
- **Styling:** Custom CSS3 (Flexbox, Glassmorphism, Keyframe Animations)
- **API:** [OpenWeatherMap Current Weather API](https://openweathermap.org/current)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mertgozubuyuk/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```

## 🗺️ Roadmap (Future Improvements)

- [ ] 5-day / hourly weather forecast
- [ ] Dynamic background themes based on current weather (sunny, rainy, snowy, night)
- [ ] Geolocation support (detect user's current city automatically)
- [ ] Favorite / recent cities list (`localStorage`)

## 📄 License

This project is open source and available under the MIT License.
