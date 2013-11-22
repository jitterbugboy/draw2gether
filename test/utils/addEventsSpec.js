define(['utilsJhn/addEvents'], function (addEvents) {

    describe('Utils-addEvents testSuite', function () {
        var div
            , nullElement = null;

        beforeEach(function () {
            div = document.createElement('div');
            div.setAttribute("id","hej");
            document.getElementsByTagName('body')[0].appendChild(div);
            dump(document.body.children.length);

        });
        afterEach(function () {
            div = null;
            nullElement = null;
        });

        it('can add Element to DOM', function () {
            expect( document.getElementById('hej')).toBe(div);

        }) ;

        it('has defined jquery as $', function () {
           expect($).toBe(jQuery);
            expect($('<div id="some-id"></div>')).toBe('div')

        });

    /*    it('can use jquery', function () {
           expect($('<div id="hej"></div>')).toBe('div')
        });

/*
        it('can add click event to div', function () {
           dump(typeof addEvents);

            addEvents(div, 'click', function () {
                nullElement = "notNull";
            });
            document.getElementById('hej').click();
            expect(nullElement).toBe("notNull");
        });

        it('can add have clicked event object passed as argument', function () {

            addEvents(div, 'click', function (e) {
                nullElement = "notNull";
            });
            div.click();
            expect(nullElement).toBe("notNull");
        });

*/

    });
});
