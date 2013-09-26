define(['components/Button'], function(Button) {

    describe('Button test Suite', function() {
        var testButton = null;

        beforeEach(function () {
            try {
                testButton = new Button(5,10,15,20);
            }
            catch (e){
              throw new Error('can not instanciate Button');
            };
        });

        afterEach(function () {
          testButton =null;
        });

        it('is defined', function() {
            expect(testButton).toBeDefined();

        });
        it('can be instanciated', function () {
            var button = new Button(5,5,7,7);
            expect(button.x).toEqual(5);
        })


    });
});
