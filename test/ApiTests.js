/**
 * Created with IntelliJ IDEA.
 * User: CS11
 * Date: 10/5/13
 * Time: 5:10 PM
 * To change this template use File | Settings | File Templates.
 */

var request = require('superagent');
var expect = require('expect.js');

describe('API Tests', function(){
    it ('should return JSON object for base directory',function(done){
            request.get('http://localhost:5000/api/getDirectory',function(res){
                expect(res).to.exist;
                console.log(res);
                //expect(res).to.contain('nodes');
                done();
            });
    });

    it ('should return contents of given file',function(done){
        request.get('http://localhost:5000/api/getFileData',function(res){
            expect(res).to.exist;
            console.log(res.body);
            //expect(res.body).to.contain('Your Name');
            done();
        });
    });
});