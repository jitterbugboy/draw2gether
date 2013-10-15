define(['jquery','EventEmitter','components/Button','core/Stage', 'utilsJhn'], function ($,EventEmitter,Button, Stage, utilsJhn) {
    "use strict";
var app = function () {
    var canvas = document.getElementById("drawCanvas") || document.createElement('canvas')
        , stage = new Stage({w: 500, h: 500,_element:canvas})
        , pubSub;

    var createStyleButtons = function () {
        var button = new Button(0, 0, 50, 50);
        stage.addObject(button.getElement());
        button.addEvent('click', function () {

        })

    };

    var addEvents = function () {}


    var init = function () {
        pubSub = new EventEmitter();
        createStyleButtons();


    };

    return{init:init, pubSub:pubSub};

};//app

    return app();
});



