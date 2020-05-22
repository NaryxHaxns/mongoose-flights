const Flight = require('../models/flight');

module.exports = {
    add,
    create,
    index
};

function add(req,res) {
    res.render('flights/add');
};

function create(req,res) {
    req.body.flightNo = req.body.flightNo.replace(/\s*,\s*/g);
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights');
        res.redirect('/flights');
    });
};

function index(req,res) {
    Flight.find({}, function(err,flights) {
        res.render('flights/index', {flights});
    });
};
