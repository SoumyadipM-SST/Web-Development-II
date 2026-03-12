# Web Development II

This repository section contains projects completed for **Web Development II**.
It includes an **ICP (In-Class Project)** and an **ETP (End Term Project)** demonstrating the use of HTML, CSS, JavaScript, and external APIs to build interactive web applications.

---

## Project Structure

```
Web-Development-II/
│
├── ICP-Clipboard/
│   ├── Clipboard.html
│   ├── Clipboard.css
│   └── Clipboard.js
│
└── ETP-Cinema-Database/
    ├── index.html
    ├── style.css
    └── script.js
```

---

# ICP – Clipboard

A simple web application that demonstrates the use of the **JavaScript Clipboard API**.

### Features

* Text area for entering text
* Copy button to copy text to the system clipboard
* Paste button to paste clipboard text into the textarea
* Status messages for successful or failed operations
* Dark themed interface with simple UI

### Technologies Used

* HTML
* CSS
* JavaScript (Clipboard API)

---

# ETP – Cinema Database

A movie search web application that fetches movie data from **The Movie Database (TMDb) API** and displays detailed information about movies.

### Features

* Search movies by **name**
* Optional filters for **language** and **year**
* Displays:

  * Movie title
  * Poster and backdrop
  * Rating and popularity
  * Genres
  * Cast members
  * Budget and revenue
  * Movie description
* **Watch Trailer** feature using YouTube
* **Recommended movies section**
* Dynamic UI with animated layout changes

---

## Technologies Used

* **HTML5** – Page structure
* **CSS3** – Styling and responsive layout
* **JavaScript (ES6)** – Application logic
* **Fetch API** – API requests
* **TMDb API** – Movie database data source

---

## How the Cinema Database Works

1. The user enters a movie name in the search bar.
2. The application sends a request to the **TMDb API**.
3. The API returns movie information including:

   * details
   * cast
   * trailers
   * recommendations
4. JavaScript dynamically generates the interface and displays the movie data.

---

## Running the Projects

1. Clone or download the repository.
2. Navigate to the project folder.
3. Open the HTML file in a web browser.

Example:

```
open index.html
```

or use a local server such as **VS Code Live Server**.

---

## Learning Objectives

These projects demonstrate:

* DOM manipulation
* Event handling
* Asynchronous JavaScript (`async/await`)
* Fetching data from external APIs
* Dynamic UI rendering
* Basic frontend project structuring

---

## Author

Soumyadip Mandal
