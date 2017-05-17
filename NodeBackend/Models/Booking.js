module.exports = class Booking  {

    constructor(bookingId, totalPrice, hairDresserId, customerId) {
        this.bookingId = bookingId;
        this.totalPrice = totalPrice; 
        this.customerId = customerId; 
        this.hairDresserId = hairDresserId; 
    
    }
}