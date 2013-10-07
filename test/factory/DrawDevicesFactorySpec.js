define(['factory/DrawDevicesFactory', 'components/Pen'], function (DrawDevicesFactory, Pen) {

    describe('DrawDevicesFactory test Suite', function () {
        var testDrawDevicesFactory = null;
        //SETUP
        beforeEach(function () {
            try {
                testDrawDevicesFactory = new DrawDevicesFactory();
            }
            catch (e) {
                throw new Error('can not instanciate DrawDevicesFactory');
            }

        });

        //TEAR DOWN
        afterEach(function () {
            testDrawDevicesFactory = null;
        });

        //////////////////////////////////////
        ////////////SPEC//////////////////////
        //////////////////////////////////////

        it('can return an instance of Pen being instanciated', function () {
            var instance = new DrawDevicesFactory('Pen');
            expect(instance instanceof Pen).toBe(true);
        });


        it('can return an instance of Pen using getInstance ', function () {
            var instance = testDrawDevicesFactory.getInstance('Pen');
            expect(instance instanceof Pen).toBe(true);
        });

        it('can THROW an type error when using getInstance on none exsisting objects', function () {
            expect(function () {
                testDrawDevicesFactory.getInstance('IDontExsist')
            }).toThrow(new Error("requested object does not exist requested"));
        });

    });
});