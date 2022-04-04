const normal = require('./normal-router'),
    quantum = require('./quantum-router'),
    express = require('express');

let app = express();

const hostname = '127.0.0.1',
    port = 8000;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/normal', function (req, res) {
    res.render('normal', { time: normal.calculateTime() });
})

app.get('/quantum', function (req, res) {
    res.render('quantum', { time: quantum.calculateTime() });
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
