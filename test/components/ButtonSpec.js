define(['components/Button'], function(Button) {

    describe('Button test Suite', function() {

        it('is defined', function() {
            expect(Button).toBeDefined();

        });
        it('can be instanciated', function () {
            var button = new Button(5,5,7,7);
            expect(button.x).toEqual(5);
        })


    });
});
