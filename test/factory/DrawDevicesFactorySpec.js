define(['factory/drawDevicesFactory', 'components/drawingTools/Pen','core/CanvasElement'], function (drawDevicesFactory, Pen, CanvasElement) {

    describe('DrawDevicesFactory test Suite', function () {
        var testDrawDevicesFactory = null
            ,canvasElm = null;

        //SETUP
        beforeEach(function () {
            canvasElm = new CanvasElement();
        });

        //TEAR DOWN
        afterEach(function () {
            testDrawDevicesFactory = null;
            canvasElm = null;
        });

        //////////////////////////////////////
        ////////////SPEC//////////////////////
        //////////////////////////////////////

        it('can return an instance of Pen being instanciated', function () {
            var instance = drawDevicesFactory('Pen',canvasElm);
               expect(instance.draw).toBeDefined();

                //expect(instance instanceof Pen).toBe(true);
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
