var axios = require('axios');
var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var salonController = require("../Bll/SalonController.js");

module.exports = router;

router.get('/getAllSalons', function (req, res) {
    var getAllSalons = salonController.getAllSalons((getAllSalons) => {
        res.json(getAllSalons);
    })
})

router.get('/getSalon/:id', function (req, res) {
    var id = req.params.id;
    var getSalonById = salonController.getSalonById(id, function (salon) {
        res.json(salon)
    })
})

router.post('/createBooking', jsonParser, function(req, res){
    var test = req.body;
    console.log(test);
    var request = axios.post('http://localhost:56662/api/router/addBooking', test)
    .then(function(response){
        console.log(response);
    })
    res.json();
     req.io.sockets.emit('createBooking', 'DUNCKER ER EN DUNCKER');
})