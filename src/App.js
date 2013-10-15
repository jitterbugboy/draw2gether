define(['jquery','EventEmitter','components/Button','core/Stage'], function ($,EventEmitter,Button, Stage) {
    "use strict";
var app = function () {
    var canvas = document.getElementById("drawCanvas") || document.createElement('canvas')
        //, ctx = canvas.getContext('2d')
        , canvasSize = {w: 500, h: 500}
        , stage = new Stage(canvas)
        , pubSub;

    var setCanvasSize = function () {
        canvas.width = canvasSize.w;
        canvas.height = canvasSize.h;

    };

    var createStyleButtons = function () {
        var button = new Button(0, 0, 50, 50);
        stage.addObject(button.getElement());
        button.addEvent('click', function () {
            console.log('sdf');
        })

    };


    var init = function () {
        pubSub = new EventEmitter();
        setCanvasSize();
        createStyleButtons();
        console.log('her');

    };

    return{init:init, pubSub:pubSub};

};//app

    return app();
});



