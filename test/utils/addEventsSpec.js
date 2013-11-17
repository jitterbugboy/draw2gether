define(['utilsJhn/addEvents'], function (addEvents) {

    describe('Utils-addEvents testSuite', function () {
        var div
            , nullElement = null;

        beforeEach(function () {
            div = document.createElement('div');

        });
        afterEach(function () {
            div = null;
            nullElement = null;
        });


        it('can add click event to div', function () {
            addEvents(div, 'click', function () {
                nullElement = "notNull";
            });
            div.click();
            expect(nullElement).toBe("notNull");
        });

        it('can add have clicked event object passed as argument', function () {
            addEvents(div, 'click', function (e) {
                nullElement = "notNull";
            });
            div.click();
            expect(nullElement).toBe("notNull");
        });



    });
});
