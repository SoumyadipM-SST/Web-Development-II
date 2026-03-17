# Clipboard – Copy & Paste Helper

A simple web application that demonstrates how to use the **JavaScript Clipboard API** to copy and paste text directly from a browser.
Users can type or paste text into a textarea and use buttons to copy the text to the system clipboard or paste clipboard content back into the textarea.

---

## Project Structure

```
ICP-Clipboard/
│
├── Clipboard.html
├── Clipboard.css
└── Clipboard.js
```

---

## Features

* Text area to enter or paste text
* **Copy button** to copy text to the system clipboard
* **Paste button** to retrieve text from the clipboard
* Status messages showing success or failure of the operation
* Clean dark-themed user interface
* Hover effects on buttons for better user interaction

---

## Technologies Used

* **HTML5** – Page structure
* **CSS3** – Styling and layout
* **JavaScript (Clipboard API)** – Copy and paste functionality

---

## How It Works

### Copy Function

When the **Copy** button is clicked:

1. The text inside the textarea is read.
2. The `navigator.clipboard.writeText()` method copies the text to the system clipboard.
3. A status message displays **“Copied!”** if successful.

### Paste Function

When the **Paste** button is clicked:

1. The application reads the clipboard using `navigator.clipboard.readText()`.
2. The retrieved text is inserted into the textarea.
3. A status message displays **“Pasted!”** if successful.

---

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open **Clipboard.html** in any modern web browser.

Example:

```
double click Clipboard.html
```

---

## Important Note

The Clipboard API requires a **secure context** in some browsers.
If copy or paste does not work, run the project using:

* **GitHub Pages**, or
* a **local development server** (e.g., VS Code Live Server).

---

## Learning Objective

This project demonstrates:

* Basic DOM manipulation
* Handling button click events
* Using asynchronous JavaScript (`async/await`)
* Implementing the Clipboard API in web applications

---

## Author

Soumyadip Mandal
