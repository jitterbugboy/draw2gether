define(['utilsJhn/addEvents'], function (addEvents) {


    describe('Utils-addEvents testSuite', function () {
        var div
            , nullElement = null;

        beforeEach(function () {
            div = document.createElement('div');
            div.setAttribute("id","hej");
            document.getElementsByTagName('body')[0].appendChild(div);

        });
        afterEach(function () {
            document.body.removeChild(div);
            div = null;
            nullElement = null;
        });

        it('can add Element to DOM', function () {
            expect( document.getElementById('hej')).toBe(div);

        }) ;

        it('has defined jquery as $', function () {
            var count = document.getElementsByTagName('body')[0].children.length;

        });

        it('can add click event to div', function () {
            addEvents(div, 'click', function () {
                nullElement = "notNull";
            });
           expect($('#hej').length).toBe(1);
           $('#hej').trigger('click');
            //div.click();
            expect(nullElement).toBe("notNull");
        });

        /*
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
