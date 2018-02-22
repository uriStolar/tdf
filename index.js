const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(helmet());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.redirect(301,'http://www.herokucdn.com/error-pages/no-such-app.html');
});

app.get('/tdd', (req, res) => {
  res.sendFile(__dirname + '/routes/tdd/index.html');
});

app.get('/tdf', (req, res) => {
  res.sendFile(__dirname + '/routes/tdf/index.html');
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
