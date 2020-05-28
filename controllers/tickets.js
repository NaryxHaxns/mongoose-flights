const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    add,
    create,
    addToFlight
}

function add(req,res) {
    res.render('tickets/addTicket', { title: 'Mongoose Airlines', flightId: req.params.id });
};

function create(req,res) {
    const newTicket = {seat: req.body.seat, price: req.body.price, flight: req.params.id}
    Ticket.create(newTicket);
    res.redirect(`/flights/${req.params.id}`)
};

function addToFlight(req,res) {
    Ticket.findById(req.params.id, function(err,flight) {
            res.render('tickets/addTicket', {tickets});
        });
};
