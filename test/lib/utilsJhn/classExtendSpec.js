define(['utilsJhn'], function (utilsJhn) {

    describe('utilsJhn test Suite', function () {
        var utils = utilsJhn;
        //SETUP
        beforeEach(function () {


        });

        //TEAR DOWN
        afterEach(function () {

        });

        //////////////////////////////////////
        ////////////SPEC//////////////////////
        //////////////////////////////////////

        it('can get methods', function () {
            expect(utils).toBeDefined();
            expect(utilsJhn.testlog).toBeDefined();
            expect(utilsJhn.testlog()).toBe('test-log');




        });



    });
});
