const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    add,
    create,
    index,
    show
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
        res.render('flights/index', { flights });
    });
};

function show(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err,tickets){
            res.render('flights/show', { flight, tickets })
        })
    });
};

