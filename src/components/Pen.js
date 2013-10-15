(function (exports) {

    /**
     * @description a device that handles drawing onto the canvas
     * @implements {IDrawingDevice}
     * @constructor
     */
    function Pen () {};

    Pen.prototype.constructor = Pen;


    Pen.prototype.setColor = function () {};
    Pen.prototype.draw = function () {

    };


    // Expose the Object either via AMD or the global object
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return Pen;
        });
    }
    else {
        exports.Pen = Pen;
    }


}(this));