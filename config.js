// Team Member: Backend Developer
// Purpose: Actual API configuration with sensitive API key
// Related Files: config.example.js (template), weather-api.js (uses this)


const CONFIG = {
    // OpenWeatherMap API Key
    // API Key: 5c1e33f9df909b836b5d2356490fd3e2
    // Note: May take a couple of hours to activate after signup
    API_KEY: '5c1e33f9df909b836b5d2356490fd3e2',
    
    // API Base URL
    API_BASE_URL: 'https://api.openweathermap.org/data/2.5',
    
    // Default location (used if geolocation fails)
    DEFAULT_CITY: 'New York',
    
    // Temperature unit (metric = Celsius, imperial = Fahrenheit)
    TEMP_UNIT: 'imperial',
    
    // API timeout in milliseconds
    API_TIMEOUT: 10000, // 10 seconds
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

