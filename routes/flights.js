var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET /flights/add
router.get('/add', flightsCtrl.add);
//GET /flights/index
router.get('/', flightsCtrl.index)
//POST /flights
router.post('/', flightsCtrl.create)

module.exports = router;
