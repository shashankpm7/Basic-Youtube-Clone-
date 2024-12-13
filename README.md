**YouTube-Inspired Video Streaming App**
This is a modern, YouTube-inspired video streaming web application that allows users to browse and scroll through video feeds on the Home and Trending pages with infinite scrolling. The app fetches real-time video data from the YouTube Data API and ensures a seamless user experience with features like duplicate prevention in the feed.

**Features**
Home Page: Displays the most popular videos dynamically fetched from YouTube.
Trending Page: Showcases trending videos using the YouTube Data API.
Infinite Scrolling: Automatically loads more videos as the user scrolls down.
No Duplicate Videos: Ensures every video is unique and not repeated in the feed.
Subscriptions Page: Displays a placeholder for subscriptions.
Account Page: Allows users to navigate options like Sign In, Settings, Subscriptions, and About.

**Technologies Used:** 
HTML5: Structuring the application.
CSS3: Styling and responsive design.
JavaScript (ES6): Dynamic content rendering and API integration.
YouTube Data API v3: Fetching real-time video data.

**Getting Started**
Follow these instructions to set up the project on your local machine.

Prerequisites
A text editor (e.g., VSCode)
Git
A YouTube Data API Key.

**Installation**

**Clone the repository:**
git clone https://github.com/yourusername/video-streaming-app.git
cd video-streaming-app

**Set up the YouTube Data API Key:**
Replace the API_KEY in script.js with your own API key:
const API_KEY = 'YOUR_YOUTUBE_API_KEY';

**Open the project:**
Open the index.html file in your browser or use a live server.

**Home Page:**
Loads the most popular videos dynamically.
Scroll down to load more videos with infinite scrolling.

**Trending Page:**
Displays trending videos with no duplicates.
Infinite scrolling is enabled.

**Subscriptions Page:**
Displays a placeholder message if no subscriptions are available.

**Account Page:**
Navigate to options like Sign In, Settings, Subscriptions, and About.

**Folder Structure**

📂 video-streaming-app
├── 📂 css
│   └── styles.css      # Main stylesheet for the app
├── 📂 js
│   └── script.js       # JavaScript logic for API calls and interactions
├── index.html          # Main HTML file
└── README.md           # Documentation

**Key Functionalities**

**Infinite Scrolling:**
Automatically fetches and appends videos as you scroll down.
Works seamlessly on both Home and Trending pages.

**Duplicate Prevention:**
Each video is displayed only once, even during continuous scrolling.

**Responsive Design:**
Optimized for various screen sizes for a great user experience.

**Contributing**
Contributions are welcome!
To contribute:

Fork the repository.
Create a new branch:
git checkout -b feature-name
Commit your changes:

git commit -m "Description of changes"
Push to the branch:

git push origin feature-name
Create a pull request.

**License**
This project is licensed under the MIT License. See the LICENSE file for more details.

**Acknowledgments**
Inspired by YouTube's clean and intuitive interface.
Built using the YouTube Data API V3.
Icons and assets by Font Awesome.
