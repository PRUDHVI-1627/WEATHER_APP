# 🌤️ Weather Forecast App

A real-time weather forecast app that fetches live data for any city in the world using the OpenWeatherMap API.

🔗 **Live Demo**: [weather-app-murex-sigma-56.vercel.app](https://weather-app-murex-sigma-56.vercel.app)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📸 Preview

<img width="1438" height="733" alt="Weather App Preview" src="https://github.com/user-attachments/assets/65787fc0-6ab7-44ad-af4c-f9216996bffc" />

---

## ✨ Features

- 🔍 Search weather by any city name
- 🌡️ Real-time temperature in Celsius
- ☁️ Weather condition with emoji icons
- 📅 Current date display
- ❌ Error handling for invalid cities and network issues
- 💫 Smooth fade-in and pulse animations
- ⌨️ Press Enter to search (no click needed)

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## ⚙️ Setup & Run

1. Clone the repo:
```bash
   git clone https://github.com/PRUDHVI-1627/WEATHER_APP.git
   cd WEATHER_APP
```

2. Get a free API key from [openweathermap.org](https://openweathermap.org/api)

3. Open `script.js` and replace the placeholder:
```js
   const API_KEY = 'YOUR_API_KEY_HERE';
```

4. Open `index.html` in any browser — done!

---

## 📁 Project Structure
WEATHER_APP/
├── index.html    — Page structure
├── style.css     — Styling and animations
├── script.js     — API calls and weather logic
└── README.md     — You're reading it
---

## 🎨 Customization

**Change default city** — in `script.js`:
```js
window.addEventListener('load', () => {
  getWeather('YourCity');
});
```

**Change color scheme** — in `style.css`:
```css
body { background-color: #232f32; }
.top  { background-color: #8293a0; }
```

---

## 🚀 Future Improvements

- [ ] 7-day forecast
- [ ] Geolocation support
- [ ] Celsius / Fahrenheit toggle
- [ ] Background changes based on weather condition
- [ ] Favorite cities list

---

## ⚠️ Note

The API key is stored in client-side code. For production use, route requests through a backend proxy to keep the key private.

---

## 👤 Author

**Galla Prudhvi Raj**
- GitHub: [@PRUDHVI-1627](https://github.com/PRUDHVI-1627)
- Email: pruney1627@gmail.com

---

## 🤝 Contributing

1. Fork the project
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request
