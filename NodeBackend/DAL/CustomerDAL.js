var sql = require("mssql");
var config = require('../DAL/config.json');
var customer = require("../Models/Customer")

module.exports.getAllCustomer = function (callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("select * from Customer,Person where customerPersonId = personId", function (err, recordset) {
            if (err) {
                console.log(err);
            }
            else {
                var persons = JSON.stringify(recordset);
                persons = JSON.parse(persons);
                callback(persons);
                conn.close();
            }
        });
    });
};


module.exports.insertCustomerWithTransaction = function (person, callback) {
    cutomer = person;
    var conn = new sql.Connection(config).connect(function (err) {
        if (err) {
            console.log(err);
        }
        const transaction = new sql.Transaction(conn);
        transaction.begin(function (err) {
            if (err) {
                console.log(err);
            }
            const request = new sql.Request(transaction);
            const request2 = new sql.Request(transaction);
            console.log('insert into person (personName, personEmail, personPassword, personType) values (' + "'" + person.name + "','" + person.email + "','" + "password123" + "'," + "'customer'" + "); SELECT SCOPE_IDENTITY() AS personId;");
            request.query('insert into person (personName, personEmail, personPassword, personType) values (' + "'" + person.name + "','" + person.email + "','" + "password123" + "'," + "'customer'" + "); SELECT SCOPE_IDENTITY() AS personId;", (err, recordset2, test) => {
                if (err) {
                    console.log(err);
                }
                var persons = JSON.stringify(recordset2);
                persons = JSON.parse(persons);
                var personId = persons[0].personId;
                request2.query('insert into customer (number, customerPersonId) values(' + cutomer.phone + "," + personId + ");", (err) => {
                    if (err) {
                        console.log(err);
                    }
                    transaction.commit(err => {
                        if (err) {
                            console.log(err);
                        }
                        console.log("Transaction commited.");
                        callback(persons);
                        conn.close();
                    })
                })
            })
        })
    })
}


module.exports.getCustomerId = function (personId, callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("select * from person where personId =" + personId + ";", function (err, recordset) {
            if (err) {
                console.log(err);
            }
            else {
                var customer = JSON.stringify(recordset);
                customer = JSON.parse(customer);
                callback(customer);
                conn.close();
            }
        });
    });
}


module.exports.deleteCustomer = function (Id, callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("DELETE from Customer where customerPersonId =" + Id + ";" + "DELETE from Person where personId =" + Id + ";", function (err, recordset) {
            if(err) {
                console.log(err)
            }else{
                callback();
                conn.close();
            }
        });
    });
}

