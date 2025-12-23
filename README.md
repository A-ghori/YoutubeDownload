# YouTube Downloader

A simple web application for downloading YouTube videos and audio using yt-dlp.

## Features

- Download videos in MP4 format
- Download audio in MP3 format
- Supports Shorts and regular videos
- Web interface with overlay for download progress

## Prerequisites

- Node.js (version 14 or higher)
- yt-dlp (install from https://github.com/yt-dlp/yt-dlp)
- Python (for yt-dlp, if not using pre-built binaries)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/A-ghori/YoutubeDownload.git
   cd YoutubeDownload
   ```

2. Install Node.js dependencies (including express, cors, dotenv, nodemon):
   ```
   npm install
   ```
   This will install the following packages:
   - express: Web framework for Node.js
   - cors: Middleware for enabling CORS
   - dotenv: Loads environment variables from a .env file
   - nodemon: Utility for automatically restarting the server during development

3. Install yt-dlp (on macOS, using Homebrew or pip):
   - Using Homebrew (recommended for macOS):
     ```
     brew install yt-dlp
     ```
   - Or using pip (ensure Python is installed):
     ```
     pip install yt-dlp
     ```

4. Ensure yt-dlp is installed and available in your PATH. You can verify by running:
   ```
   yt-dlp --version
   ```

## Running the Application

1. Start the server:
   ```
   node server.js
   ```

2. Open your browser and navigate to `http://localhost:3000` (or the deployed URL).

3. Enter the YouTube URL in the input field and click the appropriate download button.

## Endpoints

- `GET /download?videoURL=<url>`: Downloads video
- `GET /audio-download?audioURL=<url>`: Downloads audio

## Deployment

The application is configured to run on Render (https://youtubedownload-3mu6.onrender.com) or locally on port 3000.
