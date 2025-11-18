# Project Plan: Campus Weather Widget(Final)

## Team Information

**Team Name:** Team Fab5  
**Project:** Campus Weather Widget  
**Technology Stack:** HTML, CSS, Vanilla JavaScript  
**Timeline:** 3 weeks (following Agile methodology)  
**Goal:** By the end of Week 3, we will have a working weather widget that displays current weather and 5-day forecasts for any city, with professional Git workflow, testing, and documentation.

---

## User Stories

### Must Have (MVP - Minimum Viable Product)

These features are essential for the demo and must be completed:
		
#### Story 1: Search for Weather
**As a user,  I want to search for weather by city name,  So that I can check weather conditions for any location.

**Acceptance Criteria:**
- [ ] Search input field accepts city names
- [ ] Search button triggers weather fetch
- [ ] Form validation prevents empty submissions
- [ ] Error message displays for invalid city names
- [ ] Loading indicator shows during API calls

**Estimated Time:** Small (2-3 hours)  
**Assigned To:** Frontend Developer

---

#### Story 2: Display Current Weather
**As a user, I want to see current weather conditions, So that I know the temperature and weather status.

**Acceptance Criteria:**
- [ ] Current temperature is displayed prominently
- [ ] Weather icon is visible and correct
- [ ] Weather description is shown (e.g., "clear sky")
- [ ] City name and country are displayed
- [ ] Current date is shown

**Estimated Time: Medium (3-4 hours)  
**Assigned To:** Frontend Developer

---

#### Story 3: Show Detailed Weather Metrics
**As a user, I want to see detailed weather metrics (humidity, wind, pressure), So that I have complete weather information.

**Acceptance Criteria:**
- [ ] Humidity percentage is displayed
- [ ] Wind speed is shown with units
- [ ] Atmospheric pressure is displayed
- [ ] "Feels like" temperature is shown
- [ ] Visibility is displayed (if available)
- [ ] All metrics are formatted correctly

**Estimated Time: Medium (3-4 hours)  
**Assigned To: Frontend Developer

---

#### Story 4: Display 5-Day Forecast
**As a** user,  
**I want to** see a 5-day weather forecast,  
**So that** I can plan ahead.

**Acceptance Criteria:**
- [ ] Forecast section displays after current weather
- [ ] Exactly 5 days are shown
- [ ] Each day shows date, icon, high/low temperatures
- [ ] Weather description is shown for each day
- [ ] Forecast cards are visually distinct

**Estimated Time: Large (4-6 hours)  
**Assigned To: Frontend Developer, Backend Developer

---

#### Story 5: Error Handling
**As a user, I want to see error messages when something goes wrong, So that I understand what happened and can fix it.

**Acceptance Criteria:**
- [ ] Error message appears for invalid city names
- [ ] Error message appears for network failures
- [ ] Error message is user-friendly (not technical jargon)
- [ ] Error message auto-hides after 5 seconds
- [ ] Error message is accessible (screen reader friendly)

**Estimated Time: Small (2-3 hours)  
**Assigned To: Frontend Developer, Backend Developer

---

### Nice to Have (If We Have Time)

These features enhance the project but are not required for the demo:

- [ ] Geolocation support (automatic location detection)
- [ ] Unit conversion toggle (Celsius/Fahrenheit)
- [ ] Favorite cities list with local storage
- [ ] Dark/light theme toggle
- [ ] Weather alerts and warnings
- [ ] Hourly forecast

---

## GitHub Issues Template

### Issue Template Format

When creating issues in GitHub, use this format:

```markdown
## User Story
As a [user type], I want to [action], so that [benefit]

## Task Description
[Detailed description of what needs to be done]

## Acceptance Criteria
- [ ] [Specific thing that must work]
- [ ] [Another specific thing]
- [ ] [Another specific thing]

## Technical Notes
[Any technical considerations, API endpoints, file locations, etc.]

## Assigned To
@[teammate-username]

## Estimated Time
[Small/Medium/Large] ([hours] hours)

## Labels
[Feature/Bug/Documentation/Testing]
```

---

## GitHub Issues List (8-10 Issues)

### Issue #1: [Feature] Create HTML Structure
**User Story:** Story 1 - Search for Weather  
**Description:** Create the HTML structure for the weather widget including search form, weather display sections, and forecast container.  
**Acceptance Criteria:**
- [ ] Semantic HTML5 elements used
- [ ] Search form with input and button
- [ ] Sections for current weather and forecast
- [ ] ARIA labels for accessibility
- [ ] All IDs match JavaScript selectors

**Assigned To:** Frontend Developer  
**Estimated Time:** Small (2 hours)

---

### Issue #2: [Feature] Create CSS Styling
**User Story:** All stories (UI/UX)  
**Description:** Design and implement responsive CSS styling with modern design, mobile-first approach, and accessibility considerations.  
**Acceptance Criteria:**
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Modern, attractive UI with gradients
- [ ] Loading states styled
- [ ] Error messages styled
- [ ] Weather cards are visually appealing
- [ ] Hover effects and transitions

**Assigned To:** UI/UX Designer  
**Estimated Time:** Large (5-6 hours)

---

### Issue #3: [Feature] API Configuration Setup
**User Story:** All stories (backend)  
**Description:** Set up API configuration files with proper security (config.js in .gitignore, config.example.js as template).  
**Acceptance Criteria:**
- [ ] config.example.js created with template
- [ ] config.js added to .gitignore
- [ ] CONFIG object exports correctly
- [ ] API key validation works
- [ ] Documentation for setup included

**Assigned To:** Backend Developer  
**Estimated Time:** Small (1-2 hours)

---

### Issue #4: [Feature] Implement Weather API Integration
**User Story:** Stories 2, 3, 4  
**Description:** Create weather-api.js with functions to fetch current weather and forecast from OpenWeatherMap API.  
**Acceptance Criteria:**
- [ ] fetchCurrentWeather() function works
- [ ] fetchForecast() function works
- [ ] Error handling for API failures
- [ ] Data formatting functions work
- [ ] Timeout handling implemented
- [ ] Input validation

**Assigned To:** Backend Developer  
**Estimated Time:** Large (4-5 hours)

---

### Issue #5: [Feature] Implement UI Logic and Event Handlers
**User Story:** Stories 1, 2, 3, 4, 5  
**Description:** Create app.js with DOM manipulation, form handling, and display functions.  
**Acceptance Criteria:**
- [ ] Form submission handler works
- [ ] Search input validation
- [ ] Display functions update DOM correctly
- [ ] Loading states managed
- [ ] Error messages displayed
- [ ] Forecast cards created dynamically

**Assigned To:** Frontend Developer  
**Estimated Time:** Large (5-6 hours)

---

### Issue #6: [Feature] Display Current Weather Data
**User Story:** Story 2  
**Description:** Implement displayCurrentWeather() function to show all current weather information in the UI.  
**Acceptance Criteria:**
- [ ] Temperature displayed correctly
- [ ] Weather icon loads and displays
- [ ] All metrics (humidity, wind, etc.) shown
- [ ] City name and date formatted correctly
- [ ] Section becomes visible after data loads

**Assigned To:** Frontend Developer  
**Estimated Time:** Medium (3 hours)

---

### Issue #7: [Feature] Display 5-Day Forecast
**User Story:** Story 4  
**Description:** Implement displayForecast() function to show 5-day forecast cards.  
**Acceptance Criteria:**
- [ ] Forecast section appears after search
- [ ] Exactly 5 days displayed
- [ ] Each card shows date, icon, temps, description
- [ ] Cards are responsive and styled
- [ ] Forecast data formatted correctly

**Assigned To:** Frontend Developer  
**Estimated Time:** Medium (3-4 hours)

---

### Issue #8: [Testing] Create Test Suite
**User Story:** All stories (quality assurance)  
**Description:** Create test.js with automated tests for API functions, validation, and error handling.  
**Acceptance Criteria:**
- [ ] Test file created with test functions
- [ ] Input validation tests pass
- [ ] Data formatting tests pass
- [ ] Error handling tests pass
- [ ] Manual testing checklist included
- [ ] Tests can run with `node test.js`

**Assigned To:** Tester/QA  
**Estimated Time:** Medium (3-4 hours)

---

### Issue #9: [Feature] Setup GitHub Actions CI/CD
**User Story:** All stories (automation)  
**Description:** Create .github/workflows/test.yml to run tests automatically on PRs and pushes.  
**Acceptance Criteria:**
- [ ] Workflow file created
- [ ] Tests run on pull requests
- [ ] Tests run on pushes to main
- [ ] Workflow shows pass/fail status
- [ ] Node.js setup configured correctly

**Assigned To:** Backend Developer, Project Manager  
**Estimated Time:** Small (2 hours)

---

### Issue #10: [Documentation] Create README and Project Documentation
**User Story:** All stories (documentation)  
**Description:** Create comprehensive README.md, PROJECT-PLAN.md, and QUICK-START.md following assignment template.  
**Acceptance Criteria:**
- [ ] README.md follows assignment template
- [ ] Installation instructions clear
- [ ] Usage instructions included
- [ ] Team members section filled
- [ ] Technologies listed
- [ ] Screenshots section prepared
- [ ] PROJECT-PLAN.md with all user stories
- [ ] QUICK-START.md with setup guide

**Assigned To:** Project Manager  
**Estimated Time:** Medium (3-4 hours)

---

## Sprint Planning

### Sprint 1 (Week 2 - Days 3-5): Core Features

**Goal:** Get basic weather display working

**Tasks:**
- Setup project structure and configuration
- Create HTML/CSS foundation
- Implement API integration
- Display current weather
- Basic error handling

**Definition of Done:**
- Can search for a city
- Current weather displays correctly
- Basic error messages work

---

### Sprint 2 (Week 3 - Days 6-7): Polish & Testing

**Goal:** Complete features, add testing, polish UI

**Tasks:**
- Implement 5-day forecast
- Complete error handling
- Write test suite
- Setup CI/CD
- Create documentation
- UI polish and responsiveness

**Definition of Done:**
- All user stories completed
- Tests written and passing
- CI/CD working
- Documentation complete
- Ready for showcase

---

## Team Roles and Responsibilities

### Frontend Developer
**Primary Files:**
- `index.html`
- `app.js`

**Responsibilities:**
- HTML structure and semantic markup
- DOM manipulation and event handling
- User interface logic
- Form validation
- Display functions

**Estimated Hours:** 8-10 hours/week

---

### Backend Developer
**Primary Files:**
- `weather-api.js`
- `config.js`
- `config.example.js`
- `.github/workflows/test.yml`

**Responsibilities:**
- API integration
- Data fetching and formatting
- Error handling for API calls
- Configuration management
- CI/CD setup

**Estimated Hours:** 8-10 hours/week

---

### UI/UX Designer
**Primary Files:**
- `styles.css`

**Responsibilities:**
- Responsive design
- Modern, attractive styling
- Mobile-first approach
- Accessibility considerations
- Visual polish

**Estimated Hours:** 8-10 hours/week

---

### Tester/QA
**Primary Files:**
- `test.js`

**Responsibilities:**
- Write automated tests
- Manual testing checklist
- Bug reporting
- Test coverage
- Quality assurance

**Estimated Hours:** 6-8 hours/week

---

### Project Manager
**Primary Files:**
- `README.md`
- `PROJECT-PLAN.md`
- `QUICK-START.md`

**Responsibilities:**
- Project documentation
- User stories and planning
- Team coordination
- Progress tracking
- Communication

**Estimated Hours:** 6-8 hours/week

---

## Communication Plan

- **Daily Standups:** 5-minute check-ins via Discord/Slack
- **Weekly Meetings:** 30-minute sprint planning and retrospective
- **GitHub:** All code changes via pull requests with reviews
- **Issues:** Track all tasks and bugs in GitHub Issues
- **Project Board:** Visual tracking of task progress

---

## Success Metrics

By the end of Week 3, we should have:

-  All 5 must-have user stories completed
-  At least 8-10 GitHub issues created and closed
-  All team members have made commits and PRs
-  Test suite with automated tests
-  CI/CD pipeline working
-  Comprehensive documentation
-  Working demo ready for showcase

---

## Risk Management

**Potential Risks:**
1. API key issues or rate limits
   - **Mitigation:** Test early, have backup plan
2. Team member availability
   - **Mitigation:** Clear communication, backup assignments
3. Scope creep
   - **Mitigation:** Stick to MVP, prioritize must-haves
4. Technical difficulties
   - **Mitigation:** Ask for help early, pair programming

---

## Timeline

- **Week 1:** Git/GitHub setup, team formation
- **Week 2:** Sprint 1 - Core features development
- **Week 3:** Sprint 2 - Polish, testing, documentation
- **Showcase:** Final presentation and demo

---

*This project plan is a living document and will be updated as the project progresses.*

