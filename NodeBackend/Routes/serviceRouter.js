//Express for setting up the api
//BodyParser for managing json when posting
var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

//Getting the Models for services and the controller
var serviceModel = require("../Models/Service.js");
var serviceController = require("../BLL/ServiceController.js");

//Exporting the Router so the app.js file can use them
module.exports = router;

//Creating a get requst with the route /getAllService.
router.get('/getAllService', function (req, res) {
    //Then calling a callback method from the controller.
    var getAllService = serviceController.getAllService((getAllService) => {
    //returning the data as json
        res.json(getAllService);
    })
})

//Creating af post requst and using the bodyParser to get make the json to a js obj.
router.post('/createService', jsonParser, function (req, res) {
    //Creating our js obj from the requst
    const serviceObj = new serviceModel(req.body.serviceType, req.body.time, req.body.price)
    //Calling a callback method from the controller that takes our js obj.
    var insertService = serviceController.insertService(serviceObj, function (services) {
        //Returning data as json
        res.json(services);
    })
})

//Creating a delete requst that takes a id as a param
router.delete('/deleteService/:id', function (req, res) {
    //Getting the id param and saving it in a local var
    var id = req.params.id;
    //Calling the callback method from serviceController and giving it the id.
    var deleteService = serviceController.deleteService(id, function () {
        //Returning nothing so the api know the requst is done 
        res.json()
    })
})

//Creating a get requst that takes a id. 
router.get('/getServiceId/:id', function (req, res) {
    ////Getting the id param and saving it in a local var
    var id = req.params.id;
    //Calling the a method from serviceController that findes one specific service
    var getServiceId = serviceController.getServiceId(id, function (services) {
        //Returning that services
        res.json(services);
    })
})