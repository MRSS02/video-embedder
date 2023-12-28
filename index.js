const express = require('express');
require("dotenv")
const PORT = process.env.PORT || 3006;
const app = express();

app.get('/*', (req, res) => {
  
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
          }
        </style>
        <meta name="theme-color" content="#00FFAA" />
        <meta name="description" content="Video Embedder">
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
        <meta property="og:site_name" content="MParaGame's catbox video embedder"/>
        <meta property="og:image" content="https://files.catbox.moe/rh0eua.webp">
        <meta property="og:url" content="${req.headers.host}${req.path}" />
        <meta property="og:video" content="https://files.catbox.moe/${req.path}">
        <meta property="og:video:url" content="https://files.catbox.moe/${req.path}">
        <meta property="og:video:secure:url" content="https://files.catbox.moe/${req.path}"> 
        <meta name="twitter:creator" content="MParaGame's Video Embedder">
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
            <div class="video" >
              <video width="1280" height="720" controls preload="auto"><source src="https://files.catbox.moe${req.path}" type='video/mp4'></video>
            </div>
      </body>
    </html>
  `

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
