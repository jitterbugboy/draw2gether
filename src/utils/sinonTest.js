(function (exp orts) {

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



[user]
name = Jitterbugboy
email = jitternielsen@gmail.com
    [merge]
tool = p4merge
tool = C:\\Program
    [mergetool "p4merge"]
path = 'C:\\Programmer\Perforce\p4merge.exe'