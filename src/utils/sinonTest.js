(function (exports) {

    var sinonTest = function (obj) {

        return obj.returnTest();
    };

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return sinonTest;
        });
    }
    else {
        exports.sinonTest = sinonTest;
    }
}(this));