const router = require('express').Router();
const controller = require('./controllers');

// All of the routes used by the front end
// Products Routes
router.get('/products', controller.products.get);
router.get('/products/:id', controller.products.getItem);
router.post('/products', controller.products.post);

// Records Routes
router.get('/records', controller.records.get);
router.get('/records/:id', controller.records.getItem);
router.post('/records', controller.records.post);

// Events Routes
router.get('/events', controller.events.get);
router.get('/events/:id', controller.events.getEvent);
router.post('/events', controller.events.post);
router.delete('/events/:id', controller.events.delete);

module.exports = router;