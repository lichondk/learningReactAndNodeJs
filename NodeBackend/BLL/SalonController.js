var salonDal = require("../DAL/SalonDal.js");

module.exports.getAllSalons = function(salon){
    salonDal.getAllSalons(salon);
}

module.exports.getSalonById = function(id, callback){
    salonDal.getSalonById(id, function(salon){
        callback(salon)
    })
}