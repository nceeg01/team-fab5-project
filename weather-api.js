// Team Member: Backend Developer
// Purpose: API integration with OpenWeatherMap for fetching weather data
// Related Files: config.js (API configuration), app.js (uses these functions)
// Dependencies: Requires CONFIG object from config.js

/**
 * Weather API Module
 * 
 * This module handles all communication with the OpenWeatherMap API.
 * It provides functions to fetch current weather, forecast, and city suggestions.
 * 
 * API Documentation: https://openweathermap.org/api
 */

// Check if CONFIG is available
if (typeof CONFIG === 'undefined') {
    console.error('Error: CONFIG not found. Make sure config.js is loaded before weather-api.js');
}

/**
 * Searches for cities matching the query (for autocomplete)
 * Uses OpenWeatherMap Geocoding API
 * @param {string} query - Search query (city name)
 * @returns {Promise<Array>} Array of city objects
 */
async function searchCities(query) {
    if (!query || query.length < 2) {
        return [];
    }

    if (!CONFIG.API_KEY || CONFIG.API_KEY === 'YOUR_API_KEY_HERE') {
        return [];
    }

    // Use Geocoding API for city search
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${CONFIG.API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return [];
        }
        const data = await response.json();
        return Array.isArray(data) ? data.map(city => ({
            name: city.name,
            country: city.country,
            state: city.state || '',
            lat: city.lat,
            lon: city.lon
        })) : [];
    } catch (error) {
        console.error('Error searching cities:', error);
        return [];
    }
}

/**
 * Fetches current weather data for a given city
 * @param {string} cityName - Name of the city to get weather for
 * @returns {Promise<Object>} Weather data object or throws error
 */
async function fetchCurrentWeather(cityName) {
    // Validate input
    if (!cityName || typeof cityName !== 'string' || cityName.trim() === '') {
        throw new Error('City name is required and must be a non-empty string');
    }

    // Check if API key is configured
    if (!CONFIG.API_KEY || CONFIG.API_KEY === 'YOUR_API_KEY_HERE') {
        throw new Error('API key not configured. Please set your OpenWeatherMap API key in config.js');
    }
    
    // Log API key status for debugging (first 4 chars only for security)
    if (typeof console !== 'undefined') {
        console.log('API Key configured:', CONFIG.API_KEY.substring(0, 4) + '...');
    }

    const url = `${CONFIG.API_BASE_URL}/weather?q=${encodeURIComponent(cityName.trim())}&units=${CONFIG.TEMP_UNIT}&appid=${CONFIG.API_KEY}`;

    try {
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CONFIG.API_TIMEOUT);

        const response = await fetch(url, {
            signal: controller.signal,
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        clearTimeout(timeoutId);

        // Check if response is ok
        if (!response.ok) {
            // Get error details from response
            let errorDetails = '';
            try {
                const errorData = await response.clone().json();
                errorDetails = errorData.message ? ` (${errorData.message})` : '';
            } catch (e) {
                // If we can't parse error JSON, continue with status code
            }
            
            if (response.status === 404) {
                throw new Error(`City "${cityName}" not found. Please check the spelling and try again.`);
            } else if (response.status === 401) {
                throw new Error(`Invalid API key.${errorDetails} Please verify your OpenWeatherMap API key in config.js. Make sure the key is activated (it may take 10-60 minutes after signup).`);
            } else if (response.status === 429) {
                throw new Error('API rate limit exceeded. Please try again later.');
            } else {
                throw new Error(`API error: ${response.status} ${response.statusText}${errorDetails}`);
            }
        }

        const data = await response.json();
        return formatCurrentWeatherData(data);

    } catch (error) {
        // Handle different error types
        if (error.name === 'AbortError') {
            throw new Error('Request timed out. Please check your internet connection and try again.');
        } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
            throw new Error('Network error. Please check your internet connection.');
        } else {
            // Re-throw our custom errors
            throw error;
        }
    }
}

/**
 * Fetches 5-day weather forecast for a given city
 * @param {string} cityName - Name of the city to get forecast for
 * @returns {Promise<Array>} Array of forecast data objects (one per day)
 */
async function fetchForecast(cityName) {
    // Validate input
    if (!cityName || typeof cityName !== 'string' || cityName.trim() === '') {
        throw new Error('City name is required and must be a non-empty string');
    }

    // Check if API key is configured
    if (!CONFIG.API_KEY || CONFIG.API_KEY === 'YOUR_API_KEY_HERE') {
        throw new Error('API key not configured. Please set your OpenWeatherMap API key in config.js');
    }

    const url = `${CONFIG.API_BASE_URL}/forecast?q=${encodeURIComponent(cityName.trim())}&units=${CONFIG.TEMP_UNIT}&appid=${CONFIG.API_KEY}`;

    try {
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CONFIG.API_TIMEOUT);

        const response = await fetch(url, {
            signal: controller.signal,
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        clearTimeout(timeoutId);

        // Check if response is ok
        if (!response.ok) {
            // Get error details from response
            let errorDetails = '';
            try {
                const errorData = await response.clone().json();
                errorDetails = errorData.message ? ` (${errorData.message})` : '';
            } catch (e) {
                // If we can't parse error JSON, continue with status code
            }
            
            if (response.status === 404) {
                throw new Error(`City "${cityName}" not found. Please check the spelling and try again.`);
            } else if (response.status === 401) {
                throw new Error(`Invalid API key.${errorDetails} Please verify your OpenWeatherMap API key in config.js. Make sure the key is activated (it may take 10-60 minutes after signup).`);
            } else if (response.status === 429) {
                throw new Error('API rate limit exceeded. Please try again later.');
            } else {
                throw new Error(`API error: ${response.status} ${response.statusText}${errorDetails}`);
            }
        }

        const data = await response.json();
        return formatForecastData(data);

    } catch (error) {
        // Handle different error types
        if (error.name === 'AbortError') {
            throw new Error('Request timed out. Please check your internet connection and try again.');
        } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
            throw new Error('Network error. Please check your internet connection.');
        } else {
            // Re-throw our custom errors
            throw error;
        }
    }
}

/**
 * Formats raw API data into a cleaner structure for current weather
 * @param {Object} data - Raw API response data
 * @returns {Object} Formatted weather data
 */
function formatCurrentWeatherData(data) {
    // Calculate dew point (approximate formula)
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const dewPoint = Math.round(temp - ((100 - humidity) / 5));
    
    // Get wind direction name
    const windDeg = data.wind.deg || 0;
    const windDirections = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const windDirectionName = windDirections[Math.round(windDeg / 22.5) % 16];
    
    // Determine weather type for background
    const weatherMain = data.weather[0].main.toLowerCase();
    const weatherId = data.weather[0].id;
    const currentHour = new Date(data.dt * 1000).getHours();
    const isNight = currentHour < 6 || currentHour > 20;
    
    let weatherType = 'cloudy';
    if (weatherMain.includes('clear')) {
        weatherType = isNight ? 'night' : 'sunny';
    } else if (weatherMain.includes('rain') || weatherMain.includes('drizzle')) {
        weatherType = 'rainy';
    } else if (weatherMain.includes('thunderstorm')) {
        weatherType = 'stormy';
    } else if (weatherMain.includes('snow')) {
        weatherType = 'snowy';
    } else if (weatherMain.includes('fog') || weatherMain.includes('mist')) {
        weatherType = 'foggy';
    } else if (weatherMain.includes('cloud')) {
        weatherType = 'cloudy';
    }
    
    return {
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDirection: windDeg,
        windDirectionName: windDirectionName,
        pressure: data.main.pressure,
        visibility: data.visibility ? (data.visibility / 1000).toFixed(1) : 'N/A',
        uvIndex: 'N/A', // UV index requires separate API call
        cloudiness: data.clouds ? data.clouds.all : 0,
        dewPoint: dewPoint,
        date: new Date(data.dt * 1000),
        sunrise: new Date(data.sys.sunrise * 1000),
        sunset: new Date(data.sys.sunset * 1000),
        weatherType: weatherType,
        weatherId: weatherId
    };
}

/**
 * Formats raw API forecast data into hourly and daily forecasts
 * @param {Object} data - Raw API forecast response
 * @returns {Object} Object with hourly and daily forecast arrays
 */
function formatForecastData(data) {
    // Hourly forecast (next 24 hours from 3-hour intervals)
    const hourlyForecast = data.list.slice(0, 8).map(item => ({
        time: new Date(item.dt * 1000),
        temperature: Math.round(item.main.temp),
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        description: item.weather[0].description,
        humidity: item.main.humidity,
        windSpeed: item.wind.speed
    }));
    
    // Daily forecast (group by date)
    const dailyForecasts = {};
    
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dateKey = date.toDateString();
        
        if (!dailyForecasts[dateKey]) {
            dailyForecasts[dateKey] = {
                date: date,
                temps: [],
                descriptions: [],
                icons: [],
                humidity: [],
                windSpeed: []
            };
        }
        
        dailyForecasts[dateKey].temps.push(item.main.temp);
        dailyForecasts[dateKey].descriptions.push(item.weather[0].description);
        dailyForecasts[dateKey].icons.push(item.weather[0].icon);
        dailyForecasts[dateKey].humidity.push(item.main.humidity);
        dailyForecasts[dateKey].windSpeed.push(item.wind.speed);
    });
    
    // Convert to array and format each day (7 days)
    const weeklyForecast = Object.values(dailyForecasts)
        .slice(0, 7)
        .map(day => {
            const avgTemp = day.temps.reduce((a, b) => a + b, 0) / day.temps.length;
            const maxTemp = Math.max(...day.temps);
            const minTemp = Math.min(...day.temps);
            
            const description = day.descriptions[0];
            const icon = day.icons[0];
            
            return {
                date: day.date,
                temperature: Math.round(avgTemp),
                tempHigh: Math.round(maxTemp),
                tempLow: Math.round(minTemp),
                description: description,
                icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
                humidity: Math.round(day.humidity.reduce((a, b) => a + b, 0) / day.humidity.length),
                windSpeed: (day.windSpeed.reduce((a, b) => a + b, 0) / day.windSpeed.length).toFixed(1)
            };
        });
    
    return {
        hourly: hourlyForecast,
        daily: weeklyForecast
    };
}

// Export functions for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchCities,
        fetchCurrentWeather,
        fetchForecast,
        formatCurrentWeatherData,
        formatForecastData
    };
}
