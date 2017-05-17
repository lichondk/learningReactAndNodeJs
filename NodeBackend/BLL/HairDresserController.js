var hairdresserDal = require("../DAL/HairDresserDAL.js");

module.exports.getAllHairDresser = function (person) {
    hairdresserDal.getAllHairDresser(person);
}

module.exports.getHairdresserId = function(id, callback){
    hairdresserDal.getHairdresserId(id, function(persons){
        console.log(persons);
        callback(persons)
    })
}

module.exports.deleteHairdresser = function (id, callback) {
    hairdresserDal.deleteHairdresser(id, function(){
        callback();
    })
}

module.exports.insertHairdresserWithTransaction = function(person, callback){
    hairdresserDal.insertHairDresserWithTransaction(person, function(persons){
        callback(persons)
    })
}
