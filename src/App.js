define(['jquery','utils/test','utils/sinonTest'],function($,test, sinonTest){
    var App = function (el) {
      this.el = el;

    };

    App.prototype.sinonTest = function () {
        return sinonTest({returnTest:function () {return 'what you get'}});
    };
    App.prototype.render = function () {

        $(this.el).text('require.js up and '+ test());

    };

    return App;
});