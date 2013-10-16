define(['utilsJhn','core/CanvasElement'],function (utilsJhn, CanvasElement) {
"use strict";
      function Stage(element) {
          CanvasElement.apply(this, arguments);

      };
    utilsJhn.classExtend(CanvasElement, Stage);


    Stage.prototype.addObject = function (object) {
        var stage = this._ctx;


        stage.fillStyle ="#000";
        stage.fillRect(2,20,20,33);
        //this._element.appendChild(object);

    };

    return Stage;
});