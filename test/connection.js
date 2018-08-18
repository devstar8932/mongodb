const mongoose = require("mongoose");

//ES6 Promises
//mongoose.Promise = global.Promise;

//Connect to the db before tests run
//before(function(){

    //Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
    }).on('error',function(error){
        console.log('Connection error.', error);
    });

//});
