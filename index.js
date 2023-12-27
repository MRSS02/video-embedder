const express = require('express');
require("dotenv")
const PORT = process.env.PORT || 3006;
const app = express();

app.get('/*', (req, res) => {
  
  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta name="theme-color" content="#00FFAA" />
        <meta name="description" content="Video Preview">
        <meta name="twitter:card" content="player">
        <meta name="twitter:site" content="Video">
        <meta name="twitter:image" content="https://files.catbox.moe/rh0eua.webp">
        <meta name="twitter:player:width" content="1280">
        <meta name="twitter:player:height" content="720">
        <meta name="twitter:player:stream" content="https://files.catbox.moe/${req.url}">
        <meta name="twitter:player" content="https://files.catbox.moe/${req.url}">
        <link rel="amphtml" href="https://files.catbox.moe/${req.url}">
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1280">
        <meta property="og:image:height" content="720">
        <meta property="og:image" content="https://files.catbox.moe/rh0eua.webp">
        <meta property="og:url" content="${req.headers.host}${req.url}" />
        <meta property="og:video" content="https://files.catbox.moe/${req.url}">
        <meta property="og:video:url" content="https://files.catbox.moe/${req.url}">
        <meta property="og:video:secure:url" content="https://files.catbox.moe/${req.url}"> 
        <meta property="og:video:type" content="video/mp4">
        <meta property="og:video:width" content="1280">
        <meta property="og:video:height" content="720">

      </head>
      <body>
        <div id="root">
            <h1><a href="https://files.catbox.moe/${req.url}">https://files.catbox.moe/${req.url}</a></h1>
           <iframe height="40%" width="80%" src="https://files.catbox.moe/${req.url}"></iframe> 
        </div>
      </body>
    </html>
  `

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
