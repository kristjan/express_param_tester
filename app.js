var express = require('express');

var app = express.createServer();

app.get('*', function(req, res) {
  res.send("Foo");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on port", port);
});
