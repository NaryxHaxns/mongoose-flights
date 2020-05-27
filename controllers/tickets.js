const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    add,
    create,
    addToFlight
}

function add(req,res) {
    res.render('/tickets/add');
};

function create(req,res) {
    Ticket.create(req.body, function(err,ticket) {
        res.redirect('/tickets/new')
    });
};

function addToFlight(req,res) {
    Flight.findById(req.params.id, function(err,flight) {
        flight.tickets.push(req.body);
        flight.save(function(err) {
            res.redirect(`flights/${flight._id}`);
        });
    });
};
