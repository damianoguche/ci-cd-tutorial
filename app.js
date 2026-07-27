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
      </head>
    </html>
    <body>
     <p style="margin-top: 30px; text-align: center;">
     Hello world! I'm a Node/Express JS Web Server...
</p>
    </body>
    </html>
    `);
});

module.exports = app;
