module.exports = class BookingTime  {

    constructor(date, startTime, endTime, bookingTimeBookingId) {
        this.date = date; 
        this.startTime = startTime; 
        this.endTime = endTime; 
        this.bookingTimeBookingId = bookingTimeBookingId;
    
    }
}