var express = require("express");
var app = express();

// define a route
app.get("/", function (req, res) {
  res.send(`
        <!DOCTYPE html>
        <html lang='en'>
            <head>
                <title>Express Web Application</title>
            </head>
            <body>
                <h1>Express Web Application</h1>
                <p>We are at the LandingPage</p>
            </body>
        </html>
    `);
});

app.get("/about-us", function (req, res) {
  res.send(`
          <!DOCTYPE html>
          <html lang='en'>
              <head>
                  <title>Express Web Application</title>
              </head>
              <body>
                  <h1>Express Web Application</h1>
                  <p>We are at the AboutPage</p>
              </body>
          </html>
      `);
});

var server = app.listen(5000, function () {
  console.log("express web application is running!");
});
