define(function (require) {
    "use strict";

    var factoryObjects = {
        Pen: require("components/drawingTools/Pen")
        , Standard:  require("components/drawingTools/Pen")
    };

    var getInstance = function (type, opts) {

        try {
            return new factoryObjects[type](opts);
        }
        catch (e) {
            throw new Error("requested object does not exist",1);
        }
    };

    var  drawDevicesFactory  = function (type, opts) {
        if (type) {
            return getInstance(type, opts);
            //return new factoryObjects[type];
        }

    };
    return drawDevicesFactory;
});