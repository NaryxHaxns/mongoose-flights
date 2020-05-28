const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/add', ticketsCtrl.add);
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.post('/flights/:id', ticketsCtrl.addToFlight);

module.exports = router;