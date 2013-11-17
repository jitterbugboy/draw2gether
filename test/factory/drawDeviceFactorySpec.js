define(['factory/drawDevicesFactory', 'components/drawingTools/Pen', 'core/CanvasElement', 'sinon'], function (drawDevicesFactory, Pen, CanvasElement, sinon) {

    describe('drawDevicesFactory test Suite', function () {
        var canvasElement = null;
        //SETUP
        beforeEach(function () {
            canvasElement = new CanvasElement();

        });
        //TEAR DOWN
        afterEach(function () {
            canvasElement = null;
        });

        //////////////////////////////////////
        ////////////SPEC//////////////////////
        //////////////////////////////////////

        it('can return an instance of Pen being instanciated', function () {
          var instance = drawDevicesFactory('Pen', canvasElement);
          expect(instance instanceof Pen).toBe(true);
        });

        it('can return a standard drawing device', function () {

            var instance = drawDevicesFactory('Standard',canvasElement);
            expect(instance instanceof Pen).toBe(true);

        });

        it("can throw Error when getting an object that does not exist", function () {
           expect(function () {var instance = drawDevicesFactory('doesNotExist')}).toThrow("requested object does not exist");
        });

    });
});
 