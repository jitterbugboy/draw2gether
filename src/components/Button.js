/**
 * Created with JetBrains WebStorm.
 * User: jakobhjelmer
 * Date: 9/24/13
 * Time: 4:16 PM
 * To change this template use File | Settings | File Templates.
 */
define(function () {

    function Button(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this._graphic = null;
        this._element = this.createMarkup();
        this.setStyles();


    };

    Button.prototype.createMarkup = function () {
        var button = document.createElement('div');
        return button;

    };

    Button.prototype.setStyles = function () {
        this._element.style.width = this.w + "px";
        this._element.style.height = this.h + "px";
        this._element.style.top = this.y + "px";
        this._element.style.left = this.x + "px";
        this._element.className += " button";

    };

    /**
     * @description
     * @param graphic
     *
     */
    Button.prototype.setGraphic = function (graphic) {
        switch (graphic) {
            case "[object String]":
                break;
            default :

        }

        this._graphic = graphic;
    };
    Button.prototype.addImage = function (path) {
    };


    Button.prototype.getElement = function () {
        return this._element;
    };

    Button.prototype.addEvent = function (type, handler, capture) {
        var cap = capture || false;
        this._element.addEventListener(type, handler, cap);
    };
    return Button;

});