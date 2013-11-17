(function () {
   "use strict";
    /**
     * @interface
     * @constructor
     */
    var IDrawingDevice = function () {};
    IDrawingDevice.prototype.setColor =function () {};
    IDrawingDevice.prototype.draw = function () {};
    IDrawingDevice.prototype.setX = function () {};
    IDrawingDevice.prototype.setY = function () {};

return IDrawingDevice;
});

