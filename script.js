const API_KEY = 'AIzaSyDBfnFjsZpyOIufQnAdt4nHK_9hqEQubA0';  // Your YouTube API Key

// DOM Elements
const homeButton = document.getElementById('homeButton');
const trendingButton = document.getElementById('trendingButton');
const subscriptionsButton = document.getElementById('subscriptionsButton');
const accountButton = document.getElementById('accountButton');
const content = document.getElementById('content');

// Trending Page Variables
let trendingPageNextPageToken = '';
let loadedTrendingVideoIds = [];  // Track loaded trending videos to avoid duplicates

// Function to fetch videos for the home page
async function fetchHomeVideos(pageToken = '') {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&videoCategoryId=10&key=${API_KEY}&pageToken=${pageToken}`);
  const data = await response.json();
  return data;
}

// Function to display videos for the home page
function displayHomeVideos(videos) {
  videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
      <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
      <h3>${video.snippet.title}</h3>
    `;
    content.appendChild(videoCard);
  });
}

// Infinite Scroll for Home Page
window.addEventListener('scroll', async () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
    if (content.id === 'homeContent' && trendingPageNextPageToken) {
      const data = await fetchHomeVideos(trendingPageNextPageToken);
      trendingPageNextPageToken = data.nextPageToken;
      displayHomeVideos(data.items);
    }
  }
});

// Load Home Page
async function loadHomePage(pageToken = '') {
  content.innerHTML = '';  // Clear the current content on the home page
  content.id = 'homeContent';  // Set content id for home page
  const data = await fetchHomeVideos(pageToken);
  trendingPageNextPageToken = data.nextPageToken;
  displayHomeVideos(data.items);
}

// Trending Page Functions
async function fetchTrendingVideos(pageToken = '') {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&videoCategoryId=10&key=${API_KEY}&pageToken=${pageToken}`);
  const data = await response.json();
  return data;
}

// Display Videos for Trending Page
function displayTrendingVideos(videos) {
  videos.forEach(video => {
    // Skip videos that are already displayed
    if (loadedTrendingVideoIds.includes(video.id)) return;

    // Add video to the list of loaded videos
    loadedTrendingVideoIds.push(video.id);

    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
      <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
      <h3>${video.snippet.title}</h3>
    `;
    content.appendChild(videoCard);
  });
}

// Infinite Scroll for Trending Page
window.addEventListener('scroll', async () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
    if (content.id === 'trendingContent' && trendingPageNextPageToken) {
      const data = await fetchTrendingVideos(trendingPageNextPageToken);
      trendingPageNextPageToken = data.nextPageToken;
      displayTrendingVideos(data.items);
    }
  }
});

// Load Trending Page
async function loadTrendingPage(pageToken = '') {
  content.innerHTML = '';  // Clear the current content on the trending page
  content.id = 'trendingContent';  // Set content id for trending page
  loadedTrendingVideoIds = [];  // Reset the loaded video IDs for the trending page

  const data = await fetchTrendingVideos(pageToken);
  trendingPageNextPageToken = data.nextPageToken;
  displayTrendingVideos(data.items);
}

// Subscriptions Page
function loadSubscriptionsPage() {
  content.innerHTML = '';  // Clear the current content on the subscriptions page
  content.id = 'subscriptionsContent';  // Set content id for subscriptions page

  // Show a message if there are no subscriptions
  const message = document.createElement('p');
  message.innerHTML = '<b>There are no active subscriptions. Please subscribe to channels to receive updates from them.</b>';
  content.appendChild(message);
}

// Account Page
function loadAccountPage() {
  content.innerHTML = '';  // Clear the current content on the account page
  content.id = 'accountContent';  // Set content id for account page

  // Account buttons
  const accountButtons = [
    { text: 'Sign In', action: () => alert('Sign In') },
    { text: 'Settings', action: () => alert('Settings') },
    { text: 'Subscriptions', action: loadSubscriptionsPage },
    { text: 'About', action: () => alert('About') }
  ];

  accountButtons.forEach(button => {
    const btn = document.createElement('button');
    btn.innerHTML = button.text;
    btn.className = 'account-btn';
    btn.addEventListener('click', button.action);
    content.appendChild(btn);
  });
}

// Event Listeners
homeButton.addEventListener('click', () => {
  loadHomePage();  // Load the home page when the button is clicked
});

trendingButton.addEventListener('click', () => {
  loadTrendingPage();  // Load the trending page when the button is clicked
});

subscriptionsButton.addEventListener('click', loadSubscriptionsPage);

accountButton.addEventListener('click', loadAccountPage);

// Load the initial Home Page
loadHomePage();
