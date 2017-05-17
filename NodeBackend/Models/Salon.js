module.exports = class Salon {

    constructor(salonId, name, address, zipCode, city, phone, email, salonBookingId) {
        this.salonId = salonId;
        this.name = name;
        this.address = address;
        this.zipCode = zipCode;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.salonBookingId = salonBookingId;

    }
}