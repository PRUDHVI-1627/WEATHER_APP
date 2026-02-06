# 🌤️ Weather Forecast App

A simple and elegant weather forecast application that provides real-time weather information for any city in the world.

![Weather App](https://img.shields.io/badge/Weather-App-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🔍 **City Search** - Search for weather information by city name
- 🌡️ **Real-time Data** - Get current temperature in Celsius
- 📅 **Date Display** - Shows current date
- ☁️ **Weather Icons** - Visual representation with emoji icons
- 💫 **Smooth Animations** - Elegant fade-in and pulse effects
- ⚡ **Fast Loading** - Responsive and quick data fetching
- 🎨 **Clean UI** - Modern and minimalist design
- ❌ **Error Handling** - User-friendly error messages

## 🚀 Demo

The app displays:
- Current temperature
- City name
- Date
- Weather condition with icon
- Weather description

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Functionality and API integration
- **OpenWeatherMap API** - Weather data source

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- OpenWeatherMap API key (free tier available)

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/weather-forecast-app.git
```

2. Navigate to the project directory
```bash
cd weather-forecast-app
```

3. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Open `script.js` and replace the API key with your own:
```javascript
const API_KEY = 'your_api_key_here';
```

5. Open `index.html` in your browser

## 📁 Project Structure

```
weather-forecast-app/
│
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # JavaScript logic and API calls
└── README.md           # Project documentation
```

## 🎯 Usage

1. Open the application in your browser
2. The app loads with Delhi weather by default
3. Enter any city name in the search box
4. Click the "Search" button or press Enter
5. View the updated weather information

## 🌈 Features in Detail

### Search Functionality
- Type city name and click search
- Press Enter key for quick search
- Input validation with error messages

### Weather Display
- Temperature in Celsius (rounded)
- City name
- Current date (formatted as "DD Month YYYY")
- Weather icon (emoji-based)
- Weather description

### Animations
- Fade-in effect on page load
- Pulse animation when updating data
- Button hover effects
- Loading state indication

### Error Handling
- Invalid city name detection
- Network error handling
- User-friendly error messages
- Auto-dismissing error notifications

## 🎨 Customization

### Change Default City
In `script.js`, modify the default city:
```javascript
window.addEventListener('load', () => {
  getWeather('YourCity');
});
```

### Modify Colors
In `style.css`, update the color scheme:
```css
body {
  background-color: #232f32; /* Change background */
}

.top {
  background-color: #8293a0; /* Change header */
}
```

### Add More Weather Data
Extend the `updateWeather()` function to display:
- Humidity
- Wind speed
- Pressure
- Sunrise/Sunset times

## 🔑 API Information

This app uses the [OpenWeatherMap API](https://openweathermap.org/api):
- **Endpoint**: Current Weather Data
- **Units**: Metric (Celsius)
- **Free Tier**: 60 calls/minute, 1,000,000 calls/month

## 🐛 Known Issues

- API key is visible in client-side code (consider using a backend proxy for production)
- Limited to current weather only (no forecast)

## 🚀 Future Enhancements

- [ ] 7-day weather forecast
- [ ] Hourly forecast
- [ ] Geolocation support
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Favorite cities list
- [ ] Weather alerts
- [ ] Background changes based on weather
- [ ] Mobile responsive design improvements

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- Emoji icons for weather representation
- Inspiration from modern weather apps

## 📸 Screenshots

### Main Interface - Delhi (Default)
![Delhi Weather](screenshots/screenshot-1-default.png)
*Default view showing weather in Delhi with temperature, date, and weather condition*

### London Weather
![London Weather](screenshots/screenshot-2-london.png)
*Weather information for London with updated temperature and conditions*

### New York Weather
![New York Weather](screenshots/screenshot-3-newyork.png)
*Weather display for New York with real-time data*

### Error Handling
![Error State](screenshots/screenshot-4-error.png)
*Error message displayed when invalid city name is entered*

---

⭐ If you found this project useful, please consider giving it a star!
