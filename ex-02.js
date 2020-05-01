const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    console.log("init");
    next();
    console.log("end");
});

app.get('/', function (req, res) {
    const text = "<h1>hello express</h1>"
    console.log(`response: ${text}`);
    res.send(text);
});

app.listen(3000, () => console.log('server running'));