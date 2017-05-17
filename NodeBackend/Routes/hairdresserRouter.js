var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var hairDresserModel = require("../Models/HairDresser");
var hairDresserController = require("../BLL/HairDresserController.js");

module.exports = router;

router.get('/allHairdresser', function (req, res) {
    var getAllHairdresser = hairDresserController.getAllHairDresser((getAllHairdresser) => {
        res.json(getAllHairdresser);
    });
})


router.get('/hairdresser/:id', function (req, res) {
    var id = req.params.id;
    var getHairDresserId = hairDresserController.getHairdresserId(id, function (persons) {
        res.jsonp(persons);
    })
})

router.post('/createHairDresser', jsonParser, function (req, res) {
    const hairobj = new hairDresserModel(req.body.personName, req.body.personEmail, req.body.personPassword, req.body.position)
    var insertHairdresserWithTransaction = hairDresserController.insertHairdresserWithTransaction(hairobj, function (persons) {
        res.json(persons);
        req.io.sockets.emit('test', 'DUNCKER ER EN DUNCKER');
    });
})

router.delete('/deleteHairDresser/:id', function (req, res) {
    var id = req.params.id;
    var deleteHairDresser = hairDresserController.deleteHairdresser(id, function () {
        res.json();
    });
})