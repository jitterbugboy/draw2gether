(function (exports) {

    /**
     * @description a device that handles drawing onto the canvas
     * @implements {IDrawingDevice}
     * @constructor
     */
    function Pen (opts) {
        //todo Check options are valid
        this.ctx = opts.ctx;

        this.x= 0;
        this.y = 0;
        this.w = 30;
        this.h = 30;

    };


    Pen.prototype.constructor = Pen;


    Pen.prototype.setX = function (val) {
        this.x = val;
    };

    Pen.prototype.setY = function (val) {
        this.y = val;
    };

    Pen.prototype.setColor = function () {};

    Pen.prototype.draw = function () {

         this.ctx.fillStyle ="blue";
         this.ctx.fillRect(this.x, this.y, this.w, this.h);

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