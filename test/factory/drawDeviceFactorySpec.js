define(['factory/drawDevicesFactory', 'components/drawingTools/Pen', 'core/CanvasElement', 'sinon'], function (DrawDevicesFactory, Pen, CanvasElement, sinon) {

    describe('DrawDevicesFactory test Suite', function () {
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
            var instance = DrawDevicesFactory('Pen', canvasElement);
            expect(instance instanceof Pen).toBe(true);
        });

        /*

         it('can return an instance of Pen using getInstance ', function () {
         var instance = testDrawDevicesFactory.getInstance('Pen');
         expect(instance instanceof Pen).toBe(true);
         });

         it('can THROW an type error when using getInstance on none exsisting objects', function () {
         expect(function () {
         testDrawDevicesFactory.getInstance('IDontExsist')
         }).toThrow(new Error("requested object does not exist requested"));
         });

         */
    });
});
 