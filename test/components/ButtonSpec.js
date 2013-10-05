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
        it('can be instanciated with correct parameters', function () {

            expect(testButton.x).toEqual(5);
            expect(testButton.y).toEqual(10);
            expect(testButton.w).toEqual(15);
            expect(testButton.h).toEqual(20);
        });


        it("can return a DOM element using getElement", function () {
            expect(testButton.getElement().nodeType).toBe(1);

        });

        it("can set correct className", function () {
            expect(testButton.getElement().className).toContain('button');
        });



    });
});
