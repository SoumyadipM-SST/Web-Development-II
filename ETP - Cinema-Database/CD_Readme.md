# 🎬 Cinema Database

## Project Description
Cinema Database is a responsive, front-end web application that allows users to search for movies and explore detailed information such as plot, cast, ratings, budget, revenue, trailers, and recommendations.  
The project is built using **HTML, CSS, and Vanilla JavaScript**, and it consumes **TMDb (The Movie Database) API** to fetch real-time movie data.  
The UI is designed with a cinematic aesthetic, inspired by modern OTT platforms, to provide an immersive browsing experience.

---

## Problem Statement
Most users want a **simple, fast, and visually appealing way** to search for movies and view reliable details without navigating through cluttered interfaces or multiple platforms.  
Existing platforms either:
- Overload users with unnecessary information, or  
- Restrict access due to API limitations, slow responses, or poor filtering mechanisms.

The challenge was to build a **functional and usable cinema database** that balances accuracy, performance, and user experience.

---

## Features Implemented
- 🔍 Movie search by title  
- 🌐 Language-based filtering (Hindi, English, Bengali)  
- 📅 Release year filtering for accurate results  
- 🎥 Watch official trailers in a modal popup  
- ⭐ Display ratings, popularity, genres, runtime, budget, and revenue  
- 👥 Display top cast members  
- 🎞️ Movie recommendations based on the selected movie
- 🖼️ Dynamic background using movie backdrops  
- 📱 Fully responsive and modern UI  
- 🔄 Clickable site title to reset and return to home state  

---

## DOM Concepts Used
- `document.querySelector()` and `getElementById()` for DOM selection  
- Event listeners (`click`, `keydown`)  
- Dynamic DOM manipulation using `innerHTML`  
- Conditional rendering based on API responses  
- Class toggling for UI state management (`classList.add/remove`)  
- Modal handling with event delegation  
- Window-level event handling (`window.onclick`, `scrollTo`)  

---

## Decision Making & Challenges Faced

### 1. API Selection: TMDb vs OMDb
Two APIs were evaluated:
- **OMDb API**
  - ✅ Easier to use
  - ❌ Limited movie/series database
  - ❌ Strict API call limit (~1000/day)
  - ❌ Not suitable for deployment due to callback limitations  

- **TMDb API**
  - ✅ Very large and diverse database
  - ✅ Better scalability and deployment readiness
  - ✅ High API rate limits, better for deployment 
  - ❌ More complex documentation and implementation
  - ❌ Occasionally inconsistent data compared to IMDb  

**Decision:**  
Despite higher complexity, **TMDb was chosen** because the core goal of the project was to build a **functional and usable cinema database** with wide coverage. Database completeness and scalability were prioritized over ease of implementation.

---

### 2. Accuracy vs Performance Trade-off
TMDb sometimes returns **multiple results for the same movie name** (e.g., *Devdas*).  
Implementing search suggestions (like IMDb or OTT platforms) would require:
- Multiple API calls  
- Increased callback time  
- Noticeable UI lag  

**Decision:**  
Instead of suggestions, two highly effective filters were introduced:
- **Language filter**
- **Release year filter**

**Reasoning:**  
The probability of two movies having:
- The same name  
- The same language  
- The same release year  

is extremely low.  
Based on testing, this approach ensures **~99.99% accuracy** while keeping performance smooth.

---

### 3. UI & CSS Challenges
- Flexbox alignment issues where posters collided with the search bar  
- Header resizing and layout shifts during search  
- Ensuring smooth transitions between home and search states  
- Resetting UI state correctly on title click  

These were resolved through:
- Careful flexbox structuring  
- Conditional class-based layout changes  
- Controlled scroll behavior  

---

### 4. Design Decisions
- Color palette and accents are inspired by **Netflix-style UI**
- Dark theme chosen to enhance poster and backdrop visuals
- Glassmorphism used for a cinematic and modern feel

---

## Steps to Run the Project
1. Clone or download the project files  
2. Ensure all files (`index.html`, `style.css`, `script.js`) are in the same directory  
3. Open `index.html` in any modern web browser  
4. Enter a movie name and optionally apply language/year filters  
5. Click **Search** to explore movie details  

---

## Known Limitations
- TMDb data may occasionally differ from IMDb  
- Search returns the **first matching result** instead of a suggestion list; however, **language and release year filters are provided to refine the search and ensure the correct movie is fetched in most cases**.
- Internet connection is required to fetch API data  
- API key is exposed in frontend (not suitable for production use)  

---

## Conclusion
Cinema Database demonstrates thoughtful **decision-making, problem-solving, and trade-off analysis** beyond just writing code.  
The project focuses on usability, performance, and real-world constraints, making it a practical and scalable front-end application.
