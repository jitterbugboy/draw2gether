(function (exports) {

    /**
     * @description a device that handles drawing onto the canvas
     * @implements {IDrawingDevice}
     * @constructor
     */
    var DrawingDevice = function () {

    };


    DrawingDevice.prototype.setColor = function () {};
    DrawingDevice.prototype.draw = function () {};



    // Expose the Object either via AMD or the global object
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return new DrawingDevice;
        });
    }
    else {
        exports.DrawingDevice = new DrawingDevice;
    }


}(this));