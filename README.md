# Shortly - URL Shortening Service

A modern, responsive web application that allows users to shorten long URLs quickly and easily. Built with vanilla JavaScript, Bootstrap, and the TinyURL API.

## 🌟 Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **Copy to Clipboard**: One-click copy functionality for shortened URLs
- **Link History**: Automatically stores all shortened links in browser storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern, intuitive interface built with Bootstrap
- **Real-time Feedback**: Visual feedback when copying links

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. Clone or download this project
2. Navigate to the project folder
3. Open `index.html` in your web browser

That's it! The application runs entirely in the browser with no server setup needed.

## 📁 Project Structure

```
URL_shortening_API/
├── index.html
├── main.js
├── global.css
└── assets/
    └── images/
```

## 🎯 How to Use

1. **Enter a URL**: Paste your long URL in the input field
2. **Submit**: Click the "Shorten URL" button or press Enter
3. **Get Results**: Your shortened URL appears instantly
4. **Copy**: Click the "Copy" button to copy the short link to your clipboard
5. **View History**: All shortened links are saved and displayed automatically

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with CSS variables
- **JavaScript (Vanilla)**: Form handling and API integration
- **Bootstrap 5**: Responsive layout and components
- **Bootstrap Icons**: Icon library for UI elements
- **TinyURL API**: URL shortening service

## 📦 APIs Used

### TinyURL API
- **Endpoint**: `https://tinyurl.com/api-create.php`
- **Method**: GET
- **Parameter**: `url` (the long URL to shorten)
- **Response**: Plain text shortened URL

## 💾 Data Storage

All shortened links are stored in the browser's `localStorage`. This means:
- Your links persist even after closing the browser
- Data is stored locally on your device
- No server-side storage required

### Fonts
The application uses the "Poppins" font from Google Fonts.
## 🔒 Privacy

This application runs entirely in your browser. No URLs or personal data are sent to any server except TinyURL's service for shortening. Your link history is stored locally.

## 🐛 Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 📝 License

This project is open source and available for personal and educational use.

---


