const router = require('express').Router();
const controller = require('./controllers');

// All of the routes used by the front end
router.get('/products', controller.products.get);
router.post('/products', controller.products.post);

module.exports = router;