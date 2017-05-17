var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var bookingTimeModel = require("../Models/BookingTime.js");
var bookingTimeController = require("../BLL/BookingTimeController.js")

module.exports = router;

router.get('/getAllBookingTimes', function (req, res) {
    var getAllBookingTimes = bookingTimeController.getAllBookingTimes((getAllBookingTimes) => {
        res.json(getAllBookingTimes);
    })
})

router.post('/createBookingTime', jsonParser, function (req, res) {
    const bookingTimeObj = new bookingTimeModel(req.body.date, req.body.startTime, req.body.endTime, req.body.bookingTimeBookingId)
    var insertBookingTime = bookingTimeController.InsertBookingTime(bookingTimeObj, function (bt) {
        res.json(bt);
    });
})

router.delete('/deleteBookingTime/:id', function (req, res) {
    var id = req.params.id;
    var deleteBookingTime = bookingTimeController.deleteBookingTime(id, function () {
        res.json();
    });
})

router.get('/getBookingTime/:id', function (req, res) {
    var id = req.params.id;
    var getBookingTimeById = bookingTimeController.getBookingTime(id, function (bookingTime) {
        res.json(bookingTime)
    })
})