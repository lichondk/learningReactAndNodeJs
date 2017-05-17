//Adding the packages we need. express for setting up the host. 
//Cores for setting allowing cross host to get the api.
var express = require('express');
var app = express();
var cors = require('cors')
var server = require('http').createServer(app)
var io = require('socket.io')(server);

//Getting our routers
var getBookingTimeRouter = require('./Routes/bookingTimeRouter');
var getCustomerRouter = require('./Routes/customerRouter');
var getServiceRouter = require('./Routes/serviceRouter');
var getSalonRouter = require('./Routes/salonRouter');
var getHairdresserRouter = require('./Routes/hairdresserRouter');

io.on('connection', (socket)=>{
    console.log('a user is conneted');

    socket.on('disconnect', ()=>{
        console.log('user disconnect');
    })
})

//setting up cores
app.use(function (req, res, next) {
    req.io = io;
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', '*');

    // Pass to next layer of middleware
    next();
});

//Using our router
app.use('/Customer/', getCustomerRouter);
app.use('/BookingTime/', getBookingTimeRouter);
app.use('/Hairdresser/', getHairdresserRouter)
app.use('/Service/', getServiceRouter);
app.use('/Salon/', getSalonRouter);


//Starting the host on port 3000
server.listen(3000,function(){
    console.log("Det kører på port 3000");
})