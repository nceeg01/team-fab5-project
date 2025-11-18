# Campus Weather Widget
> A beautiful, responsive weather application that displays real-time weather conditions and 5-day forecasts for any city worldwide.


## About

The Campus Weather Widget is a web application that provides real-time weather information using the OpenWeatherMap API. Built with vanilla JavaScript, HTML, and CSS, this project demonstrates modern web development practices including API integration, responsive design, error handling, and automated testing.

This project was created as part of a 3-week Agile & Git workshop, showcasing professional development workflows including Git branching, pull requests, code reviews, CI/CD, and comprehensive documentation.

## Features

- **Real-Time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Forecast**: Plan ahead with detailed 5-day weather forecasts
- **Detailed Metrics**: View comprehensive weather information including:
  - Temperature and "feels like" temperature
  - Humidity percentage
  - Wind speed and direction
  - Atmospheric pressure
  - Visibility
  - Weather conditions and descriptions
- **Search Functionality**: Easy-to-use city search with input validation
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Error Handling**: User-friendly error messages for invalid cities or network issues
- **Loading States**: Visual feedback during API requests
- **Accessible**: Built with semantic HTML and ARIA labels for screen readers

## How to Run

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- An OpenWeatherMap API key (free at [openweathermap.org/api](https://openweathermap.org/api))
- A text editor (VS Code recommended)
- Git (for version control)

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/team-fab5-project.git
   cd team-fab5-project
   ```

2. **Get your API key:**
   - Visit [OpenWeatherMap API](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API keys section
   - Copy your API key

3. **Configure the API key:**
   ```bash
   # Copy the example config file
   cp config.example.js config.js
   
   # Open config.js in your editor and replace 'YOUR_API_KEY_HERE' with your actual API key
   ```

4. **Open in your browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Then visit http://localhost:8000
     ```

## How to Use

1. **Search for Weather:**
   - Enter a city name in the search box (e.g., "New York", "London", "Tokyo")
   - Click the "Search" button or press Enter
   - Wait for the weather data to load

2. **View Current Weather:**
   - See the current temperature, weather conditions, and icon
   - Check detailed metrics like humidity, wind speed, and pressure
   - View the current date and location

3. **Check Forecast:**
   - Scroll down to see the 5-day forecast
   - Each day shows high/low temperatures, weather icon, and description
   - Plan your week ahead!

4. **Handle Errors:**
   - If a city is not found, you'll see a helpful error message
   - The error message will automatically disappear after 5 seconds
   - Try checking the spelling of the city name

## Running Tests

### Automated Tests

Run the test suite using Node.js:

```bash
node test.js
```

The test suite includes:
- Input validation tests
- Data formatting tests
- Error handling tests
- Basic functionality tests

### Manual Testing

See the manual testing checklist in `test.js` for comprehensive testing guidelines.

### CI/CD

Tests automatically run on:
- Every push to the `main` branch
- Every pull request to the `main` branch

Check the "Actions" tab on GitHub to see test results.

## Team Members

- **[Diego Vasquez]** - Frontend Developer - [@github-Diego762]
- **[Nikheil Ceeg]** - Backend Developer - [@github-yubraj]
- **[Osamudiameh Okungbowa]** - UI/UX Designer - [@github-chris911921]
- **[Frank Mucheke]** - Tester/QA - [@github-TuffGongg]
- **[Sidharth Gummadi]** - Project Manager - [@github-Woodenspark]

## Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript (ES6+)**: No frameworks - pure JavaScript for learning
- **OpenWeatherMap API**: Free weather data API
- **Git & GitHub**: Version control and collaboration
- **GitHub Actions**: Continuous Integration/Continuous Deployment (CI/CD)


## What We Learned

- **Git Workflow**: Mastered branching, pull requests, code reviews, and merge conflicts
- **Agile Methodology**: Practiced sprint planning, user stories, and daily standups
- **API Integration**: Learned to work with REST APIs, handle async operations, and manage API keys securely
- **Error Handling**: Implemented comprehensive error handling for network issues and invalid inputs
- **Responsive Design**: Created mobile-first, accessible web applications
- **Testing**: Wrote automated tests and set up CI/CD pipelines
- **Documentation**: Created comprehensive README and project documentation
- **Team Collaboration**: Worked effectively in a team using professional development workflows

## Future Improvements

- [ ] Add geolocation support to automatically detect user's location
- [ ] Add unit conversion (Celsius/Fahrenheit toggle)
- [ ] Add weather alerts and severe weather warnings
- [ ] Add favorite cities list with local storage
- [ ] Add weather maps integration
- [ ] Add hourly forecast in addition to daily
- [ ] Add weather history and trends
- [ ] Add dark/light theme toggle
- [ ] Add multiple language support
- [ ] Add weather comparison between cities
- [ ] Improve accessibility with more ARIA labels
- [ ] Add PWA (Progressive Web App) support for offline use

## 📄 License

This project was created for CS1015 at University of North Texas (Fall 2025).

---

Made by Team Fab5

## Additional Resources

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [Project Planning Document](PROJECT-PLAN.md)
- [Quick Start Guide](QUICK-START.md)
- [GitHub Repository](https://github.com/your-username/team-fab5-project)

## Support

If you encounter any issues:

1. Check the [Quick Start Guide](QUICK-START.md) for troubleshooting tips
2. Verify your API key is correctly configured in `config.js`
3. Check the browser console (F12) for error messages
4. Ensure you have an active internet connection
5. Open an issue on GitHub with details about the problem
