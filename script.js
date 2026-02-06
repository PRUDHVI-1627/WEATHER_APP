// Get DOM elements
const input = document.querySelector('.top input');
const button = document.querySelector('.top button');
const tempElement = document.querySelector('.temp h2');
const cityElement = document.querySelector('.city h2');
const dateElement = document.querySelector('.city p');
const iconElement = document.querySelector('.current-status .icon');
const statusElement = document.querySelector('.current-status p');
const container2 = document.querySelector('.container2');

// Your API key
const API_KEY = '19a586d2bbccb956a360886cd89feaa5';

// Weather emoji mapping
const weatherEmojis = {
  'Clear': '☀️',
  'Clouds': '☁️',
  'Rain': '🌧️',
  'Drizzle': '🌦️',
  'Thunderstorm': '⛈️',
  'Snow': '❄️',
  'Mist': '🌫️',
  'Smoke': '🌫️',
  'Haze': '🌫️',
  'Dust': '🌫️',
  'Fog': '🌫️'
};

// Create error message element
const errorMessage = document.createElement('div');
errorMessage.className = 'error-message';
document.body.appendChild(errorMessage);

// Format date
function formatDate() {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return now.toLocaleDateString('en-GB', options);
}

// Show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add('show');
  
  setTimeout(() => {
    errorMessage.classList.remove('show');
  }, 3000);
}

// Show loading state
function setLoading(isLoading) {
  if (isLoading) {
    button.disabled = true;
    button.textContent = 'Loading...';
    container2.classList.add('loading');
  } else {
    button.disabled = false;
    button.textContent = 'Search';
    container2.classList.remove('loading');
  }
}

// Fetch weather data
async function getWeather(city) {
  setLoading(true);
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'City not found');
    }
    
    updateWeather(data);
  } catch (error) {
    showError('Error: ' + error.message);
    console.error('API Error:', error);
  } finally {
    setLoading(false);
  }
}

// Update UI with weather data
function updateWeather(data) {
  // Add updating animation
  container2.classList.add('updating');
  
  setTimeout(() => {
    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
    cityElement.textContent = data.name;
    dateElement.textContent = formatDate();
    
    const weatherMain = data.weather[0].main;
    iconElement.textContent = weatherEmojis[weatherMain] || '🌤️';
    statusElement.textContent = data.weather[0].description;
    
    // Remove animation class
    setTimeout(() => {
      container2.classList.remove('updating');
    }, 500);
  }, 100);
}

// Event listeners
button.addEventListener('click', () => {
  const city = input.value.trim();
  if (city) {
    getWeather(city);
  } else {
    showError('Please enter a city name');
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const city = input.value.trim();
    if (city) {
      getWeather(city);
    } else {
      showError('Please enter a city name');
    }
  }
});

// Load default city on page load
window.addEventListener('load', () => {
  getWeather('Delhi');
});