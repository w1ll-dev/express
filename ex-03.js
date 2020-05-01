const express = require('express');
const app = express();

// with use method all http's verbs will return equal
// besides that all url that has this first path will return equal too. 
app.use('/api', function (req, res) {
    res.send("<h1>API!</h1>");
});

app.listen(3000, () => console.log('api running!'))