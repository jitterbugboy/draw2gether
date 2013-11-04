define(function (require) {
    "use strict";

    var factoryObjects = {
        Pen: require("components/drawingTools/Pen")
        , Standard:  require("components/drawingTools/Pen")
    };

    var getInstance = function (type, args) {

        try {
            return new factoryObjects[type](args);
        }
        catch (e) {
            throw new Error("requested object does not exist requested",1);
        }
    };

   var  drawDevicesFactory  = function (type, args) {
        if (type) {
         return getInstance(type, args);
         //return new factoryObjects[type];
        }
    };



    return drawDevicesFactory;

});
