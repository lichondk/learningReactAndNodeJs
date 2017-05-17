var sql = require("mssql");
var config = require('../DAL/config.json');

module.exports.getAllBookingTimes = function (callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("select * from BookingTime where bookingTimeId = bookingTimeId", function (err, recordset) {
            if (err) {
                console.log(err);
            }
            else {
                var bookingTime = JSON.stringify(recordset);
                bookingTime = JSON.parse(bookingTime);
                callback(bookingTime);
                conn.close();
            }
        });
    });
};

module.exports.insertBookingTimeWithTransaction = function (bookingTime1, callback) {
    bookingTime = bookingTime1;
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
            request.query('insert into BookingTime (date_, startTime, endTime) values (' + "'" + bookingTime.date + "','" + bookingTime.startTime + "','" + bookingTime.endTime + "'); SELECT SCOPE_IDENTITY() AS bookingTimeId;", (err, recordset2, test) => {
                if (err) {
                    console.log(err);
                }
                var bt = JSON.stringify(recordset2);
                bt = JSON.parse(bt);
                var bookingTimeId = bt[0].bookingTimeId;
                transaction.commit(err => {
                    if (err) {
                        console.log(err);
                    }
                    console.log("Transaction commited.");
                    callback(bt);
                    conn.close();
                })
            })
        })
    })
}

module.exports.getBookingTimeId = function (bookingTimeId, callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("select * from BookingTime where bookingTimeId =" + bookingTimeId + ";", function (err, recordset) {
            if (err) {
                console.log(err);
            }
            else {
                var bt = JSON.stringify(recordset);
                bt = JSON.parse(bt);
                callback(bt);
            }
            conn.close();
        });
    });
}

module.exports.deleteBookingTime = function (id, callback) {
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn)
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        req.query("DELETE from BookingTime where bookingTimeId =" + id + ";", function (err, recordset) {
            if (err) {
                console.log(err);
            } else {
                callback();
                conn.close();
            }
        });
    });
}