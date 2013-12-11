define(['utilsJhn/addEvents', 'utilsJhn/trigger', 'sinon'], function (addEvents, trigger, sinon) {


    describe('Utils-addEvents testSuite', function () {
        var div;

        beforeEach(function () {
            div = document.createElement('div');
            document.getElementsByTagName('body')[0].appendChild(div);

        });
        afterEach(function () {
            document.body.removeChild(div);
            div = null;

        });


       it('can add click event to div sinon', function () {
            var handler = sinon.spy();
            addEvents(div,'click', handler);
            trigger(div, 'click');
            expect(handler.calledOnce).toBe(true);
        });



        it('has clicked dom element as this reference', function () {
            var handler = sinon.spy();
            addEvents(div,'click', handler);
            trigger(div, 'click');

            expect(handler.calledOn(div)).toBe(true);


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
