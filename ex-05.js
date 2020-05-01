const express = require('express');
const app = express();
const router = require('./ex-05-routes');

app.use('/api', router);
app.listen(3000, () => console.log('routes running!'));
