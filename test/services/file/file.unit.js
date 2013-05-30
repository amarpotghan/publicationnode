var assert = require('assert');
var request = require('superagent');
var expect = require('expect.js');
var support = require('../../support');


describe('File Service', function(){
    it ('should return JSON object for given filepath',function(done){
        request.get('http://localhost:5000/file.%2Fapp%2Fjs%2Fcontrollers%2FLoginController.js',function(res){
            expect(res).to.exist;
            console.log(res);
            done();
        });
    });

    /*it ('should return contents of given file',function(done){
        request.get('http://localhost:5000/api/getFileData',function(res){
            expect(res).to.exist;
            console.log(res.body);
            //expect(res.body).to.contain('Your Name');
            done();
        });
    });*/
});
