(function (exports) {
    var test = function () {
        return "running";
    };

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return test;
        });
    }
    else {
        exports.test = test;
    }
}(this));