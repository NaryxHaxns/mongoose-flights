const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/add', ticketsCtrl.add);
router.post('/tickets', ticketsCtrl.create);
router.post('/flights/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;