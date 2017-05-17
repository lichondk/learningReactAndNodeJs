var customerDal = require("../DAL/CustomerDAL");

//Gets all Customers 
module.exports.getAllCustomers = function (customer) {
    customerDal.getAllCustomer(customer);
}

//Insert a Customer with transaction 
module.exports.InsertCustomer = function (customer, callback) {
    customerDal.insertCustomerWithTransaction(customer, function(persons){
        callback(persons)
    });
}

//Delete an customer with chosen id
module.exports.deleteCustomer = function (deletePerson) {
    customerDal.deleteCustomer(deletePerson);
}

//Get an customer with chosen id 
module.exports.getCustomer = function (id, callback){
    customerDal.getCustomerId(id, function (customer) {
        callback(customer);
    })
}

module.exports.deleteCustomer = function(id, callback){
    customerDal.deleteCustomer(id, function(){
        callback();
    })
}