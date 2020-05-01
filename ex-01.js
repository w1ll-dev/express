const express = require('express');
const server = express();

server.get("/", function (req, res) {
    res.send('<h1>index</h1>');
});

server.all('/test', function (req, res) {
    res.send("<h2>TEST</h2>");
});

server.get(/api/, function (req, res) {
    res.send("<h2>api</h2>");
});

server.listen(3000, () => console.log("server running!"));
