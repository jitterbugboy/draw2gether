define(function (exports) {
    "use strict";
    /**
     * @description a base class for all layers / canvas Elements used
     * @param x
     * @param y
     * @param w
     * @param h
     * @param alpha
     * @param zIndex
     * @constructor
     */
    var CanvasElement = function (x, y, w, h, alpha, zIndex, _element) {
        var item
            , properties = {
                x: 0
                , y: 0
                , w: 0
                , h: 0
                , alpha: 1
                , zIndex: 1
                , _element: document.createElement('canvas')
            };

        //allow object input
        if (arguments.length === 1 && Object.prototype.toString.call(arguments[0] === "object Object")) {

            for (item in properties) {
                if (properties.hasOwnProperty(item)) {
                    console.log(item,arguments[0][item]);

                    this[item] = arguments[0][item] || properties[item];
                }
            }
        } else {
            this.x = x || properties.x;
            this.y = y || properties.y;
            this.w = w || properties.w;
            this.h = h || properties.h;
            this.alpha = alpha || properties.alpha;
            this.zIndex = zIndex || properties.zIndex;
            this._element = _element || properties._element;
        }


        //public Properties
        this.locked = false;

        // do basic DOM setup
        this._setStyles();
        this._setCommonClass();
        this._ctx = this._element.getContext("2d");
    };

    CanvasElement.prototype._setStyles = function () {
        this._element.style.left = this.x;
        this._element.style.top = this.y;

      //  this._element.width = this.w;
        //this._element.height = this.h;


        this._element.style.width = this.w;
        this._element.style.height = this.h;

        //TODO test this
        this._element.style.alpha = this.alpha;
        this._element.style.opacity = this.alpha;

        this._element.style.zIndex = this.zIndex;
    };

    CanvasElement.prototype._setCommonClass = function () {
        this._element.className += " canvasElement-base";
    };



    CanvasElement.prototype.getElement = function () {
        return this._element;
    };

    CanvasElement.prototype.remove = function () {
        document.removeChild(this._element);

  };

    CanvasElement.prototype.append = function () {
      //  document.(this._element);

    };

    return CanvasElement;
});