define(function (exports) {
"use strict";
      var Stage = function (element) {
          this._element = element.getContext("2d");//document.getElementById('stage');

      };

     Stage.prototype.getElement = function () {
         return this._element;
     };

    Stage.prototype.addObject = function (object) {
        var stage = this._element;
        stage.fillStyle ="red";
        stage.fillRect(2,20,20,33);
        //this._element.appendChild(object);

    };

    return Stage;
});