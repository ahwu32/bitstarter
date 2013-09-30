var express = require('express');
var app = express();
app.use(express.logger());

var tracker = 1;

app.get('/', function(request, response) {
  response.send('Hello World MuthaFUCka! you are visitor number:' + tracker);
  tracker++;
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
