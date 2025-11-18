// Team Member: Frontend Developer- Diego
// Purpose: Modern weather app with autocomplete, dynamic backgrounds, particle effects, and advanced features
// Related Files: index.html (DOM elements), weather-api.js (data fetching), styles.css (styling)

/**
 * Main Application Logic
 * 
 * Features:
 * - Autocomplete city search
 * - Dynamic weather-based backgrounds
 * - Particle effects (rain, snow, sun rays, clouds)
 * - Hourly and 7-day forecasts
 * - Air quality display
 * - Smooth animations and transitions
 */

// ============================================
// DOM Element References
// ============================================

const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const autocompleteDropdown = document.getElementById('autocompleteDropdown');
const loadingOverlay = document.getElementById('loadingOverlay');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const weatherBackground = document.getElementById('weatherBackground');
const particleCanvas = document.getElementById('particleCanvas');
const currentWeatherSection = document.getElementById('currentWeather');
const hourlyForecastSection = document.getElementById('hourlyForecast');
const weeklyForecastSection = document.getElementById('weeklyForecast');

// Current Weather Elements
const currentCity = document.getElementById('currentCity');
const currentDate = document.getElementById('currentDate');
const currentTemp = document.getElementById('currentTemp');
const weatherIcon = document.getElementById('weatherIcon');
const weatherDescription = document.getElementById('weatherDescription');
const feelsLike = document.getElementById('feelsLike');

// Stats Elements
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const visibility = document.getElementById('visibility');
const uvIndex = document.getElementById('uvIndex');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const pressure = document.getElementById('pressure');
const dewPoint = document.getElementById('dewPoint');

// Air Quality Elements
const aqiValue = document.getElementById('aqiValue');
const aqiLabel = document.getElementById('aqiLabel');
const aqiDescription = document.getElementById('aqiDescription');

// Forecast Containers
const hourlyContainer = document.getElementById('hourlyContainer');
const weeklyContainer = document.getElementById('weeklyContainer');

// ============================================
// State Management
// ============================================

let autocompleteTimeout = null;
let selectedAutocompleteIndex = -1;
let currentWeatherData = null;
let particleAnimation = null;

// ============================================
// Particle Effects System
// ============================================

class ParticleSystem {
    constructor(canvas, weatherType) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.weatherType = weatherType;
        this.particles = [];
        this.animationId = null;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    start() {
        this.particles = [];
        
        switch(this.weatherType) {
            case 'rainy':
            case 'stormy':
                this.createRain();
                break;
            case 'snowy':
                this.createSnow();
                break;
            case 'sunny':
                this.createSunRays();
                break;
            case 'cloudy':
            case 'foggy':
                this.createClouds();
                break;
            default:
                break;
        }
        
        this.animate();
    }
    
    createRain() {
        for (let i = 0; i < 200; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                length: Math.random() * 20 + 10,
                speed: Math.random() * 5 + 5,
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    }
    
    createSnow() {
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 3 + 1,
                speed: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.5
            });
        }
    }
    
    createSunRays() {
        for (let i = 0; i < 20; i++) {
            this.particles.push({
                x: this.canvas.width * 0.2,
                y: this.canvas.height * 0.1,
                angle: (Math.PI * 2 / 20) * i,
                length: Math.random() * 100 + 50,
                opacity: Math.random() * 0.3 + 0.2
            });
        }
    }
    
    createClouds() {
        for (let i = 0; i < 5; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height * 0.3,
                width: Math.random() * 200 + 100,
                height: Math.random() * 80 + 40,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        this.ctx.lineWidth = 2;
        
        switch(this.weatherType) {
            case 'rainy':
            case 'stormy':
                this.animateRain();
                break;
            case 'snowy':
                this.animateSnow();
                break;
            case 'sunny':
                this.animateSunRays();
                break;
            case 'cloudy':
            case 'foggy':
                this.animateClouds();
                break;
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    animateRain() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.moveTo(particle.x, particle.y);
            this.ctx.lineTo(particle.x - 2, particle.y + particle.length);
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.stroke();
            
            particle.y += particle.speed;
            particle.x -= 1;
            
            if (particle.y > this.canvas.height) {
                particle.y = -particle.length;
                particle.x = Math.random() * this.canvas.width;
            }
        });
    }
    
    animateSnow() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
            
            particle.y += particle.speed;
            particle.x += Math.sin(particle.y * 0.01) * 0.5;
            
            if (particle.y > this.canvas.height) {
                particle.y = -particle.radius;
                particle.x = Math.random() * this.canvas.width;
            }
        });
    }
    
    animateSunRays() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.moveTo(particle.x, particle.y);
            const endX = particle.x + Math.cos(particle.angle) * particle.length;
            const endY = particle.y + Math.sin(particle.angle) * particle.length;
            this.ctx.lineTo(endX, endY);
            this.ctx.strokeStyle = `rgba(255, 255, 200, ${particle.opacity})`;
            this.ctx.stroke();
            
            particle.opacity += 0.01;
            if (particle.opacity > 0.5) particle.opacity = 0.2;
        });
    }
    
    animateClouds() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.width / 2, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
            
            particle.x += particle.speed;
            if (particle.x > this.canvas.width + particle.width) {
                particle.x = -particle.width;
            }
        });
    }
    
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    updateWeatherType(weatherType) {
        this.weatherType = weatherType;
        this.stop();
        this.start();
    }
}

// ============================================
// Autocomplete Functionality
// ============================================

async function handleAutocomplete(query) {
    if (query.length < 2) {
        hideAutocomplete();
        return;
    }
    
    clearTimeout(autocompleteTimeout);
    autocompleteTimeout = setTimeout(async () => {
        try {
            const cities = await searchCities(query);
            displayAutocomplete(cities);
        } catch (error) {
            console.error('Autocomplete error:', error);
            hideAutocomplete();
        }
    }, 300);
}

function displayAutocomplete(cities) {
    if (cities.length === 0) {
        hideAutocomplete();
        return;
    }
    
    autocompleteDropdown.innerHTML = '';
    selectedAutocompleteIndex = -1;
    
    cities.forEach((city, index) => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        const locationText = city.state ? `${city.name}, ${city.state}` : city.name;
        item.innerHTML = `
            <span class="autocomplete-item-name">${locationText}</span>
            <span class="autocomplete-item-country">${city.country}</span>
        `;
        item.addEventListener('click', () => selectCity(locationText));
        item.addEventListener('mouseenter', () => {
            selectedAutocompleteIndex = index;
            updateAutocompleteSelection();
        });
        autocompleteDropdown.appendChild(item);
    });
    
    autocompleteDropdown.setAttribute('aria-hidden', 'false');
}

function hideAutocomplete() {
    autocompleteDropdown.setAttribute('aria-hidden', 'true');
    selectedAutocompleteIndex = -1;
}

function updateAutocompleteSelection() {
    const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
    items.forEach((item, index) => {
        item.classList.toggle('selected', index === selectedAutocompleteIndex);
    });
}

function selectCity(cityName) {
    cityInput.value = cityName;
    hideAutocomplete();
    loadWeather(cityName);
}

// ============================================
// Dynamic Background Management
// ============================================

function updateBackground(weatherType) {
    weatherBackground.className = `weather-background ${weatherType}`;
    
    if (particleAnimation) {
        particleAnimation.updateWeatherType(weatherType);
    } else {
        particleAnimation = new ParticleSystem(particleCanvas, weatherType);
        particleAnimation.start();
    }
}

// ============================================
// Main Weather Loading
// ============================================

async function loadWeather(cityName) {
    hideError();
    hideWeather();
    showLoading();
    
    try {
        const [currentData, forecastData] = await Promise.all([
            fetchCurrentWeather(cityName),
            fetchForecast(cityName)
        ]);
        
        currentWeatherData = currentData;
        
        // Update background based on weather
        updateBackground(currentData.weatherType);
        
        // Display all data
        displayCurrentWeather(currentData);
        displayHourlyForecast(forecastData.hourly);
        displayWeeklyForecast(forecastData.daily);
        
        hideLoading();
        
    } catch (error) {
        console.error('Error loading weather:', error);
        showError(error.message || 'Failed to load weather data. Please try again.');
        hideLoading();
    }
}

// ============================================
// Display Functions
// ============================================

function displayCurrentWeather(data) {
    currentCity.textContent = `${data.city}, ${data.country}`;
    currentDate.textContent = formatDate(data.date);
    currentTemp.textContent = data.temperature;
    weatherIcon.src = data.icon;
    weatherIcon.alt = data.description;
    weatherDescription.textContent = data.description;
    feelsLike.textContent = `${data.feelsLike}°C`;
    
    humidity.textContent = `${data.humidity}%`;
    windSpeed.textContent = `${data.windSpeed.toFixed(1)} m/s`;
    visibility.textContent = data.visibility === 'N/A' ? 'N/A' : `${data.visibility} km`;
    uvIndex.textContent = data.uvIndex;
    sunrise.textContent = formatTime(data.sunrise);
    sunset.textContent = formatTime(data.sunset);
    pressure.textContent = `${data.pressure} hPa`;
    dewPoint.textContent = `${data.dewPoint}°C`;
    
    // Air Quality (simulated - would need separate API)
    const aqi = calculateAQI(data);
    aqiValue.textContent = aqi.value;
    aqiLabel.textContent = aqi.label;
    aqiDescription.textContent = aqi.description;
    
    currentWeatherSection.setAttribute('aria-hidden', 'false');
}

function displayHourlyForecast(hourlyData) {
    hourlyContainer.innerHTML = '';
    
    hourlyData.forEach(hour => {
        const card = document.createElement('div');
        card.className = 'hourly-card';
        card.innerHTML = `
            <div class="hourly-time">${formatTime(hour.time)}</div>
            <img src="${hour.icon}" alt="${hour.description}" class="hourly-icon">
            <div class="hourly-temp">${hour.temperature}°</div>
        `;
        hourlyContainer.appendChild(card);
    });
    
    hourlyForecastSection.setAttribute('aria-hidden', 'false');
}

function displayWeeklyForecast(weeklyData) {
    weeklyContainer.innerHTML = '';
    
    weeklyData.forEach(day => {
        const card = document.createElement('div');
        card.className = 'weekly-card';
        card.innerHTML = `
            <div class="weekly-day">${formatDay(day.date)}</div>
            <img src="${day.icon}" alt="${day.description}" class="weekly-icon">
            <div class="weekly-temps">
                <span class="weekly-temp-high">${day.tempHigh}°</span>
                <span class="weekly-temp-low">${day.tempLow}°</span>
            </div>
        `;
        weeklyContainer.appendChild(card);
    });
    
    weeklyForecastSection.setAttribute('aria-hidden', 'false');
}

// ============================================
// Utility Functions
// ============================================

function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(date) {
    const options = { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true
    };
    return date.toLocaleTimeString('en-US', options);
}

function formatDay(date) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow';
    } else {
        const options = { weekday: 'short' };
        return date.toLocaleDateString('en-US', options);
    }
}

function calculateAQI(data) {
    // Simulated AQI calculation based on available data
    // In production, use a real air quality API
    let aqi = 50; // Base value
    
    // Adjust based on pressure and humidity
    if (data.pressure < 1000) aqi += 20;
    if (data.humidity > 70) aqi += 15;
    if (data.visibility !== 'N/A' && parseFloat(data.visibility) < 5) aqi += 25;
    
    aqi = Math.min(300, Math.max(0, aqi));
    
    let label, description;
    if (aqi <= 50) {
        label = 'Good';
        description = 'Air quality is satisfactory';
    } else if (aqi <= 100) {
        label = 'Moderate';
        description = 'Acceptable for most people';
    } else if (aqi <= 150) {
        label = 'Unhealthy for Sensitive';
        description = 'Members of sensitive groups may experience effects';
    } else {
        label = 'Unhealthy';
        description = 'Everyone may begin to experience health effects';
    }
    
    return { value: aqi, label, description };
}

// ============================================
// UI State Management
// ============================================

function showLoading() {
    loadingOverlay.setAttribute('aria-hidden', 'false');
}

function hideLoading() {
    loadingOverlay.setAttribute('aria-hidden', 'true');
}

function showError(message) {
    errorText.textContent = message;
    errorMessage.setAttribute('aria-hidden', 'false');
    setTimeout(() => hideError(), 5000);
}

function hideError() {
    errorMessage.setAttribute('aria-hidden', 'true');
}

function hideWeather() {
    currentWeatherSection.setAttribute('aria-hidden', 'true');
    hourlyForecastSection.setAttribute('aria-hidden', 'true');
    weeklyForecastSection.setAttribute('aria-hidden', 'true');
}

// ============================================
// Event Listeners
// ============================================

function init() {
    // Search form submission
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cityName = cityInput.value.trim();
        if (cityName) {
            hideAutocomplete();
            loadWeather(cityName);
        }
    });
    
    // Autocomplete on input
    cityInput.addEventListener('input', (e) => {
        handleAutocomplete(e.target.value);
    });
    
    // Keyboard navigation for autocomplete
    cityInput.addEventListener('keydown', (e) => {
        const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedAutocompleteIndex = Math.min(selectedAutocompleteIndex + 1, items.length - 1);
            updateAutocompleteSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedAutocompleteIndex = Math.max(selectedAutocompleteIndex - 1, -1);
            updateAutocompleteSelection();
        } else if (e.key === 'Enter' && selectedAutocompleteIndex >= 0) {
            e.preventDefault();
            const selectedItem = items[selectedAutocompleteIndex];
            if (selectedItem) {
                const cityName = selectedItem.querySelector('.autocomplete-item-name').textContent;
                selectCity(cityName);
            }
        } else if (e.key === 'Escape' || e.key === 'Tab') {
            hideAutocomplete();
        }
    });
    
    // Close autocomplete when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideAutocomplete();
        }
    });
    
    console.log('Weather App initialized');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
