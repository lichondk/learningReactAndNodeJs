//Getting the packahe mssql for creating the connection to our db
var sql = require("mssql");
//Getting our config fil for our db
var config = require('../DAL/config.json');
//retreving the service model
var service = require("../Models/Service.js");

//exporting our function to get all service
module.exports.getAllService = function (callback) {
    //Making a conn varible that will start the connection to the db
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn);
    //starting the connection
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        //Making our query to the db
        req.query("select * from Service_ where serviceId = serviceId", function (err, recordset) {
            if (err) {
                console.log(err);
            }
            else {
                //Making sure we get our data as json
                var services = JSON.stringify(recordset);
                services = JSON.parse(services);
                callback(services);
                //closing our connection
                conn.close();
            }
        });
    });
};

//creating our function for creating a service
module.exports.insertService = function (service, callback) {
    //starting our connection to the db
    var conn = new sql.Connection(config).connect(function (err) {
        if (err) {
            console.log(err);
        } else {
            //Making a const of transaction
            const transaction = new sql.Transaction(conn);
        }
        //starting a new transaction
        transaction.begin(function (err) {
            if (err) {
                console.log(err);
            } else {
                //starting a request with a transaction
                const request = new sql.Request(transaction);
            }
            //starting our query to the db
            request.query('insert into service_ (serviceType, time_, price) values(' + "'" + service.serviceType + "','" + service.time + "','" + service.price + "'); select scope_identity() as serviceId;", (err, recordset) => {
                if (err) {
                    console.log(err);
                } else {
                    //commited our transaction if there is no err
                    transaction.commit(err => {
                        if (err) {
                            console.log(err);
                        } else {
                            //making sure we get the data as json
                            var services = JSON.stringify(recordset);
                            services = JSON.parse(services);
                            console.log("Transaction commited.");
                            callback(services);
                            //closing our connection
                            conn.close();
                        }
                    })
                }
            });

        });

    });
}


module.exports.getServiceId = function (serviceId, callback) {
    //Making a conn varible that will start the connection to the db
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn);
    //starting our connection
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        } else {
            //Making our query to the db
            req.query("select * from service_ where serviceId =" + serviceId + ";", function (err, recordset) {
                if (err) {
                    console.log(err);
                } else {
                    //making sure we get the data as json
                    var services = JSON.stringify(recordset);
                    services = JSON.parse(services);
                    callback(services);
                    //closing our connection
                    conn.close();
                }
            })
        }
    })
}

module.exports.deleteService = function (Id, callback) {
    //Making a conn varible that will start the connection to the db
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn);
    //starting our connection
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        } else {
            //Making our query to the db
            req.query("delete from service_ where serviceId =" + Id + ";", function (err, recordset) {
                if (err) {
                    console.log(err);
                } else {
                    callback()
                    //closing our connection
                    conn.close();
                }
            })
        }
    })
}