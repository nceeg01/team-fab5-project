# Quick Start Guide - Campus Weather Widget

##  30-Minute Setup

Get the Campus Weather Widget running in 30 minutes!

---

## Step 1: Get Your API Key (5 minutes)

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Click "Sign Up" (it's free!)
3. Verify your email
4. Go to "API Keys" in your account dashboard
5. Copy your API key (it looks like: `abc123def456ghi789`)

**Note:** The free tier allows 60 calls per minute - plenty for development!

---

## Step 2: Setup Project Files (5 minutes)

1. **Clone or download the project:**
   ```bash
   git clone https://github.com/your-username/team-fab5-project.git
   cd team-fab5-project
   ```

2. **Create your config file:**
   ```bash
   cp config.example.js config.js
   ```

3. **Add your API key:**
   - Open `config.js` in your text editor
   - Find this line: `API_KEY: 'YOUR_API_KEY_HERE',`
   - Replace `YOUR_API_KEY_HERE` with your actual API key
   - Save the file

**Important:** Never commit `config.js` to Git! It's already in `.gitignore`.

---

## Step 3: Run the Application (2 minutes)

### Option A: Open Directly in Browser
1. Simply double-click `index.html`
2. Or right-click → "Open with" → Your browser

### Option B: Use a Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Using Node.js:**
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server

# Then open: http://localhost:8080
```

**Using VS Code:**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## Step 4: Test It! (3 minutes)

1. **Search for a city:**
   - Type "New York" in the search box
   - Click "Search" or press Enter
   - Wait for weather to load

2. **Verify it works:**
   -  Current temperature displays
   -  Weather icon appears
   -  5-day forecast shows below
   -  No errors in console (F12 → Console)

3. **Try different cities:**
   - "London"
   - "Tokyo"
   - "Paris"

---

## Step 5: Run Tests (5 minutes)

```bash
node test.js
```

You should see:
```
 PASS: Basic addition works
 PASS: String trimming works
...
 All tests passed!
```

---

## Success Checklist

- [ ] API key configured in `config.js`
- [ ] Application opens in browser
- [ ] Can search for weather
- [ ] Current weather displays
- [ ] 5-day forecast appears
- [ ] Tests pass (`node test.js`)
- [ ] No console errors

---

## Troubleshooting

### Problem: "API key not configured" error

**Solution:**
1. Make sure you created `config.js` (copied from `config.example.js`)
2. Check that your API key is correct (no extra spaces)
3. Verify the API key is active in your OpenWeatherMap account

---

### Problem: "City not found" error

**Solution:**
1. Check spelling of city name
2. Try using the full city name (e.g., "New York" not "NYC")
3. For cities with multiple locations, try "City, Country" format

---

### Problem: "Network error" or "Request timed out"

**Solution:**
1. Check your internet connection
2. Verify OpenWeatherMap API is working: https://openweathermap.org/api
3. Check if you've exceeded API rate limits (60 calls/minute for free tier)
4. Wait a minute and try again

---

### Problem: Weather data doesn't display

**Solution:**
1. Open browser console (F12 → Console tab)
2. Look for error messages
3. Check that `config.js` is loaded (should see no errors about CONFIG)
4. Verify all JavaScript files are loading:
   - `config.js`
   - `weather-api.js`
   - `app.js`

---

### Problem: Tests fail

**Solution:**
1. Some tests require browser environment (they'll be skipped in Node.js)
2. Make sure you're running: `node test.js`
3. Check that all files are in the correct location
4. Verify Node.js is installed: `node --version`

---

### Problem: CORS errors in browser console

**Solution:**
- This shouldn't happen with OpenWeatherMap API
- If it does, make sure you're using a local server (not opening file directly)
- Try using the Python/Node.js server methods above

---

### Problem: Styling looks broken

**Solution:**
1. Make sure `styles.css` is in the same folder as `index.html`
2. Check that the CSS file is linked in HTML: `<link rel="stylesheet" href="styles.css">`
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console for CSS loading errors

---

## Next Steps

1. **Read the full README:** See `README.md` for complete documentation
2. **Review the project plan:** Check `PROJECT-PLAN.md` for user stories and issues
3. **Start coding:** Pick an issue from GitHub Issues and create a branch!
4. **Run tests:** Make sure tests pass before creating a PR
5. **Follow Git workflow:** Branch → Code → Test → PR → Review → Merge

---

## Need Help?

1. **Check the documentation:**
   - `README.md` - Full project documentation
   - `PROJECT-PLAN.md` - User stories and planning
   - This file - Quick setup guide

2. **Check browser console:**
   - Press F12 → Console tab
   - Look for error messages
   - Most errors will tell you what's wrong

3. **Check GitHub Issues:**
   - Search existing issues
   - Create a new issue if you find a bug

4. **Ask your team:**
   - Post in team Discord/Slack
   - Tag the relevant team member
   - Share error messages and screenshots

---

##  Development Workflow

Once setup is complete, follow this workflow:

1. **Pick a task** from GitHub Issues
2. **Create a branch:**
   ```bash
   git checkout -b feature/issue-number-description
   ```
3. **Make changes** to your assigned files
4. **Test locally:**
   - Open in browser
   - Run `node test.js`
5. **Commit frequently:**
   ```bash
   git add .
   git commit -m "Add feature description"
   ```
6. **Push and create PR:**
   ```bash
   git push origin feature/issue-number-description
   ```
7. **Get code review** from teammate
8. **Merge** after approval

---

##  Tips for Success

- **Test early and often:** Don't wait until the end to test
- **Commit frequently:** Small, frequent commits are better than one big commit
- **Ask for help:** If stuck for more than 30 minutes, ask your team
- **Read error messages:** They usually tell you exactly what's wrong
- **Use browser console:** F12 is your friend for debugging
- **Follow the plan:** Stick to the user stories and don't scope creep

---

##  You're Ready!

If you've completed all steps above, you're ready to start developing! 

**Next:** Pick your first GitHub Issue and start coding! 🚀

---

*Last updated: [2025]*  
*For questions, check README.md or create a GitHub Issue.*
