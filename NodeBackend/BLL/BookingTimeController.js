var bookingTimeDAL = require("../DAL/BookingTimeDAL.js");

//Gets all BookingTimes 
module.exports.getAllBookingTimes = function (bookingTime) {
    bookingTimeDAL.getAllBookingTimes(bookingTime);
}

//Insert a BookingTime with transaction 
module.exports.InsertBookingTime = function (bookTime, callback) {
    bookingTimeDAL.insertBookingTimeWithTransaction(bookTime, function (bt) {
        callback(bt);
    });
}

//Delete a BookingTime
module.exports.deleteBookingTime = function (id, callback) {
    bookingTimeDAL.deleteBookingTime(id, function () {
        callback();
    })
}

//Get a BookingTime 
module.exports.getBookingTime = function (id, callback) {
    bookingTimeDAL.getBookingTimeId(id, function (bookingTime) {
        callback(bookingTime);
    })
}

