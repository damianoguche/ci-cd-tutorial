const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.setHeader("Content-type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Node Js Web Server</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

    <style>
        body {
              font-family: 'Poppins', sans-serif;
              }

        .welcome-text {
          margin-top: 30px;
          text-align: center;
          font-size: 2rem;      /* 32px */
          font-weight: 600;
          color: #333;
        }
    </style>
     </head>
    <body>
    <p class="welcome-text">
      Hello world! I'm a Node/Express JS Web Server...
    </p>
    
    </body>
    </html>
    `);
});

module.exports = app;
