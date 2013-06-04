var assert = require('assert')
    , directoryService = require('./../../../lib/utils/DirectoryToJson.js')
    , expect = require('expect.js');


suite('Directory to JSON suit', function() {
    test('it should return JSON object for given directory', function() {
        var json;
        jsonDirectory= new directoryService.DirectoryToJson('./app');
        json=jsonDirectory.dirTree('./app');
        expect(json).to.be.exist;
        expect(json).not.to.be.empty();
    });

    });