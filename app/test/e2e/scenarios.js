'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Pub App', function() {

    it('should redirect index.html to #/login', function() {
        browser().navigateTo('../../index.html');
        //pause()
        expect(browser().location().url()).toBe('/login');
    });

    describe('Login View', function(){
        beforeEach(function() {
            browser().navigateTo('../../index.html#/login');
        });

        it('should render home page on click of login', function() {
            element('#btnLogin').click();
            expect(browser().location().url()).toBe('/home');
        });

    })


    describe('Home View', function(){
        beforeEach(function() {
            browser().navigateTo('../../index.html#/home');
        });

        it('should render home page on click of login', function() {
            element('.ng-scope li:nth-child(5)').click();

        });



    })


});
