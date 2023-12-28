const express = require('express');
require("dotenv")
const PORT = process.env.PORT || 3006;
const app = express();

app.get('/*', (req, res) => {
  
  if (req.path === "/"){
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
      <style>
          body {
            background-color: #333333;
            color: white;
            text-align: center;
          }
          p {
            text-align: justify;
            width: 90%;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto
          }
      </style>
     <meta name="theme-color" content="#00FFAA" />
     <meta name="description" content="MParaGames' Video Embedder">
     </head>
     <body>
        <h2>video-embedder</h2>

        <p>This is a simple video embedder for Discord that embbeds a video uploaded to <a href="https://catbox.moe">catbox.moe</a>. 
        Only supports video uploads from catbox. Only mp4 support was tested, h264, VP8, VP9, and AV1 videos should work.
        Usage is simple, just replace <a href="https://catbox.moe">catbox.moe</a> with <a href="https://video.starmain.dev">video.starmain.dev</a>
        in your uploaded video link. <br />If you want your video to have a custom name, just put a query on the paramenter name on it.
        Example: <a href="https://files.catbox.moe/w1tr9y.mp4">https://files.catbox.moe/w1tr9y.mp4</a> can become <a href="https://video.starmain.dev/w1tr9y.mp4?name=my%20Forza%20Horizon%20video">
        https://video.starmain.dev/w1tr9y.mp4?name=my%20Forza%20Horizon%20video</a> for a video named "My Forza Horizon Video".</p>
     </body>
    </html> 
    `
    res.send(html);
    return;
  }
  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            background-color: #333333;
            color: white;
            tezt-align: center;
          }
          .video {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          a {
            color: #00FFFF;
            text-decoration: none;
            text-align: center;
          }
          h2 {
            margin: 0;
            text-align: center;
          }
          h1, h3, p, smalltext {
            text-align: center;
          }
        </style>
        <meta name="theme-color" content="#00FFAA" />
        <meta name="description" content="Embbed catbox videos on discord">
        <meta name="twitter:card" content="player">
        <meta name="twitter:site" content="Video">
        <meta name="twitter:image" content="https://files.catbox.moe/rh0eua.webp">
        <meta name="twitter:player:width" content="1280">
        <meta name="twitter:player:height" content="720">
        <meta name="twitter:player:stream" content="https://files.catbox.moe${req.path}">
        <meta name="twitter:player" content="https://files.catbox.moe${req.path}">
        <link rel="amphtml" href="https://files.catbox.moe${req.path}">
        <meta property="og:type" content="video.other">
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1280">
        <meta property="og:image:height" content="720">
        <meta property="og:site_name" content="MParaGames' catbox video embedder"/>
        <meta property="og:image" content="https://files.catbox.moe/rh0eua.webp">
        <meta property="og:url" content="${req.headers.host}${req.path}" />
        <meta property="og:video" content="https://files.catbox.moe/${req.path}">
        <meta property="og:video:url" content="https://files.catbox.moe/${req.path}">
        <meta property="og:video:secure:url" content="https://files.catbox.moe/${req.path}"> 
        <meta name="twitter:creator" content="MParaGames' Video Embedder">
        <meta property="og:video:type" content="video/mp4">
        <meta property="og:video:width" content="1280">
        <meta property="og:video:height" content="720">
        <meta content="${req.query?.name || "Video Embedder"}" property="og:title" />
        
      </head>
      <body>
        <div id="root">
            
            <h1>MParaGames' video embedder</h1>
            <h2>${req.query?.name || ""}</h2>
            <h3><a href="https://files.catbox.moe${req.path}">https://files.catbox.moe${req.path}</a></h3>
            <div class="video">
              <video width="1280" height="720" controls preload="auto"><source src="https://files.catbox.moe${req.path}" type='video/mp4'></video>
            </div>
            <p class="smalltext">Check the source code in my <a href="https://github.com/MRSS02/video-embedder">Github<a>!
        </div>
            
      </body>
    </html>
  `

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
