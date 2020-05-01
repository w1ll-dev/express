const express = require('express');
const app = express();

//with route method we can call many http verb in sequency like this
app.route('/client')
    .get((req, res) => res.send('Clients list'))
    .post((req, res) => res.send('Add client'))
    .put((req, res) => res.send('Edit client'))
    .delete((req, res) => res.send('Delete client'));

app.listen(3000, () => console.log('route running!'));