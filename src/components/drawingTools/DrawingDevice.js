(function (exports) {

    /**
     * @description a device that handles drawing onto the canvas
     * @implements {IDrawingDevice}
     * @param {canvasElement} a html5 canvas element
     * @constructor
     * @abstract
     */
    var DrawingDevice = function (canvasElement, settings) {
        this.ctx = canvasElement.getCtx();

        if (settings) {
            this.x = settings.x || 0;
            this.y = settings.y || 0;
        }

    };


    DrawingDevice.prototype.setColor = function () {
    };

    DrawingDevice.prototype.getCtx = function () {
        "use strict";
        return this.ctx;
    };


    DrawingDevice.prototype.draw = function () {
    };

    /**
     * @description sets the x position
     * @param {int} val  the pixel value of the x position
     */
    DrawingDevice.prototype.setX = function (val) {
        "use strict";
        this.x = val;
    };


    /**
     * @description sets the  position
     * @param {int} val  the pixel value of the y position
     */
    DrawingDevice.prototype.setY = function (val) {
        "use strict";
        this.y = val;
    };


    // Expose the Object either via AMD or the global object
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return DrawingDevice;
        });
    }
    else {
        exports.DrawingDevice = DrawingDevice;
    }
}(this));