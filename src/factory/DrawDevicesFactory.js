define(function (require) {
    "use strict";
    var factoryObjects = {
        Pen: require("components/Pen")
        , Standard:  require("components/Pen")
    };

    function DrawDevicesFactory (type) {
        if (type) {
         return this.getInstance(type);
         //return new factoryObjects[type];
        }
    };

    DrawDevicesFactory.prototype.getInstance = function (type) {
        try {
            return new factoryObjects[type];
        }
        catch (e) {
            throw new Error("requested object does not exist requested",1);
        }
    };

    return DrawDevicesFactory;


});
