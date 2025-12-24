const express = require("express");
const { spawn } = require("child_process");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const cookies_path = process.env.YT_COOKIES;
const fs = require("fs");
const path = require("path");



const cookiesFile = path.join(__dirname, "cookies.txt");

if (process.env.YT_COOKIES) {
  fs.writeFileSync(cookiesFile, process.env.YT_COOKIES);
}



app.set("trust proxy", true);  // For IP adressess store and show
app.use(cors({origin: "*" }))
app.use(express.static(__dirname))

app.get("/download", (req, res) => {
  const url = req.query.videoURL;
  if (!url) return res.send("URL missing");
  console.log("Downloading:", url);

// 1. get user ip adress
  const ip = req.ip;
  console.log("User Ip is:",ip); 





  // Set headers so browser downloads the file
  res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
  res.setHeader("Content-Type", "video/mp4");

  // Use yt-dlp to download and stream directly
  const makichu = spawn("yt-dlp", ["--cookies",cookiesFile,"-f", 
    "best[ext=mp4]/best", 
    "-o",
     "-", 
     "--no-playlist",
      url]);

  // Stream stdout directly to browser
  makichu.stdout.pipe(res);

  // Print errors in console
  makichu.stderr.on("data", (data) => console.error(data.toString()));

  // If yt-dlp fails
  //makichu.on("error", (err) => {
   // console.error("yt-dlp error:", err.message);
    //if (!res.headersSent) res.status(500).send("yt-dlp error");
  //});
});


// 1. get user inputs for video to audio extracter
app.get("/audio-download",(req,res)=>{
  const url1 = req.query.audioURL;
  if(!url1) return res.send("URL MISSING FOR AUDIO");
  console.log("Downloading:",url1)
  // Set headers for audio file
  res.setHeader("Content-Disposition",'attachment; filename="audio.mp3"');
  res.setHeader("Content-Type","audio/mpeg")

const bahenkuchu = spawn("yt-dlp",[
  "--cookies",cookiesFile,'-x',
   '--audio-format', 'mp3',
   '-o', '-',
  '--no-playlist',
   url1
])

bahenkuchu.stdout.pipe(res)
bahenkuchu.stderr.on("data",(data)=> console.error(data.toString()));

})





app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});