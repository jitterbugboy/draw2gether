define(["components/drawingTools/DrawingDevice", "utilsJhn"], function (DrawingDevice, utilsJhn) {

    var u = utilsJhn;

    /**
     * @description a device that handles drawing onto the canvas
     * @param {canvasElement}
     * @constructor
     */
        //* @implements {IDrawingDevice} ----- hmmmm it is inherited ... how to ?
    function Pen(canvasElement, settings) {
        DrawingDevice.call(this, canvasElement, settings);
       if(settings){
        this.w = settings.w || 30;
        this.h = settings.h || 30;
       }
    };

    //extend / inherit
    u.classExtend(DrawingDevice, Pen);



    Pen.prototype.setColor = function () {
    };

    Pen.prototype.draw = function () {

        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

    };


    return Pen;

});
