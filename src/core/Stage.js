(function (exports) {
"use strict";
      var Stage = function () {
          this._element = document.getElementById('stage');

      };




     Stage.prototype.getElement = function () {
         return this._element;
     };

    Stage.prototype.addObject = function (object) {
        this._element.appendChild(object);

    };
    exports.Stage = Stage;
}(this));