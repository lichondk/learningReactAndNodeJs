var sql = require('mssql');
var config = require("../DAL/config.json");
var salonModel = require('../Models/Salon');


module.exports.getAllSalons = function (callback){
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn);
    conn.connect(function(err){
        if(err){
            console.log(err);
        }else{
            req.query("select * from Salon", function (err, recordset){
                if(err){
                    console.log(err);
                }else{
                    var salon = JSON.stringify(recordset);
                    salon = JSON.parse(salon);
                    callback(salon);
                    conn.close();
                }
            })
        }
    })
}

module.exports.getSalonById = function(salonId, callback){
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn);
    conn.connect(function(err){
        if(err){
            console.log(err);
        }else{
            req.query("select * from salon where salonId =" + salonId + ";", function(err, recordset){
                if (err){
                    console.log(err);
                }else{
                    var salon = JSON.stringify(recordset);
                    salon = JSON.parse(salon);
                    callback(salon);
                    conn.close();
                }
            })
        }
    })
}
