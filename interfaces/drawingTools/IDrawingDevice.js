(function () {
   "use strict";
    /**
     * @interface
     * @constructor
     */
    var IDrawingDevice = function () {};
    IDrawingDevice.prototype = {
      setColor: function () {}
    , draw:function () {}
    , setX : function () {}
    , setY : function () {}

    };
return IDrawingDevice;
});

