var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var customerModel = require("../Models/Customer.js");
var customerController = require("../BLL/CustomerController.js");

module.exports = router;

router.get('/allperson', function (req, res) {
    var person1 = customerController.getAllPerson((person1) => {
        res.json(person1);
    });
})

router.get('/allCustomer', function (req, res) {
    var getAllCustomers = customerController.getAllCustomers((getAllCustomers) => {
        res.json(getAllCustomers);
    });
})

router.get('/Customer/:id', function (req, res) {
    var id = req.params.id;
    var getCustomer = customerController.getCustomer(id, function (customer) {
        res.json(customer);
    })
})

router.post('/createCustomer', jsonParser, function (req, res) {
    const cutsomerobj = new customerModel(req.body.personName, req.body.personEmail, req.body.personPassword, req.body.number);
    console.log(cutsomerobj);
    var insertCustomer = customerController.InsertCustomer(cutsomerobj, function (persons) {
        res.json(persons);
    })
})

router.delete('/deleteCustomer/:id', function (req, res) {
    var id = req.params.id;
    var deleteCustomer = customerController.deleteCustomer(id, function () {
        res.json();
    })
})

