var express = require('express');

var app = express.createServer();

app.configure(function() {
  app.use(express.query());
  app.use(express.bodyParser());
});

function showParams(req, res) {
  res.json({
    query: req.query,
    body: req.body
  });
}

app.all('*', showParams);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on port", port);
});
