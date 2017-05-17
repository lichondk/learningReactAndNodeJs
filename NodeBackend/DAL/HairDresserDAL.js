var sql = require("mssql");
var config = require('../DAL/config.json');
var hairDresser = require("../Models/HairDresser")

module.exports.getAllHairDresser = function (callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("select * from HairDresser,Person where personHairDresserId = personId ", function (err, recordset) {
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


module.exports.insertHairDresserWithTransaction = function (person, callback) {
    hairDresser = person;
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
            request.query('insert into person (personName, personEmail, personPassword, personType) values (' + "'" + hairDresser.name + "','" + hairDresser.email + "','" + hairDresser.password + "'," + "'HairDresser'" + "); SELECT SCOPE_IDENTITY() AS personId;", (err, recordset2, test) => {
                if (err) {
                    console.log(err);
                }
                var persons = JSON.stringify(recordset2);
                persons = JSON.parse(persons);
                var personId = persons[0].personId;
                request2.query('insert into HairDresser (position, personHairDresserId) values(' + "'" + hairDresser.position + "'," + personId + ");", (err) => {
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

module.exports.getHairdresserId = function (personId, callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("select * from HairDresser,Person where personHairDresserId = personId and personHairDresserId =" + personId + ";", function (err, recordset) {
            if (err) {
                console.log(err + "   linje 84   " + personId);
            }
            else {
                var persons = JSON.stringify(recordset);
                persons = JSON.parse(persons);
                callback(persons);
                conn.close();
            }
        });
    });
}


module.exports.deleteHairdresser = function (Id, callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("DELETE from HairDresser where personHairDresserId =" + Id + ";" + "DELETE from Person where personId =" + Id + ";", function (err, recordset) {
            if (err) {
                console.log(err);
            } else {
                callback();
                conn.close();
            }
        });
    });
}

