const express = require('express');
const router = express.Router();

// with router we can create a minor chain of resposability 
// inside other route. This will help us so much!
router.use((req, res, next) => {
    const init = Date.now();
    next();
    console.log(`time: ${Date.now() - init} ms`);
});

router.get('/client/:id/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.json({ 'id': id, 'name': name });
})

module.exports = router;