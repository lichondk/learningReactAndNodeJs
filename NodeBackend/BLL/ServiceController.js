var serviceDAL = require("../DAL/ServiceDAL.js");

//Getting all services buy calling the the method from the Dal
module.exports.getAllService = function(services){
    serviceDAL.getAllService(services);
}

//Getting one specific service. The id comes from the router
module.exports.getServiceId = function(id, callback){
    //Calling the the getServiceId method from the DAl
    serviceDAL.getServiceId(id, function(services){
        //Callback to the router
        callback(services);
    })
}

module.exports.deleteService = function(id, callback){
    serviceDAL.deleteService(id, function(){
        callback();
    })
}

module.exports.insertService = function(service, callback){
    serviceDAL.insertService(service, function(services){
        callback(services);
    })
}