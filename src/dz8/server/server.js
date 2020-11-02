const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require('./api')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.use((req,res) => {
  res.send('Page not found')
})

app.use((err, req, res, next) => {
  res
    .status(500)
    .send(`Something broke: ${err.message}`)
});

app.listen(3000, function () {
  console.log("Server running");
})