var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  // response.render('pages/index');
  res.redirect(301,'http://www.herokucdn.com/error-pages/no-such-app.html');
});

app.get('/tdf', function (req, res) {
  res.sendFile('/tdf/index.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
