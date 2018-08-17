const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('some demo tests', function(){

    //Create tests
    it('Saves a record to the database',function(){
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });
});