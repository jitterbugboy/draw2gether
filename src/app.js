define(['jquery','EventEmitter','components/Button','core/Stage', 'utilsJhn','core/appSettings','core/CanvasElement', 'factory/drawDevicesFactory']
    , function ($,EventEmitter,Button, Stage, utilsJhn, appSettings, CanvasElement, drawDevicesFactory) {
        "use strict";
        var app = function () {
            var canvas = document.getElementById("drawCanvas") || document.createElement('canvas')
                , stage = new Stage({w: 500, h: 500,_element:canvas})
                , pubSub
                , mousePos = {x:0,y:0}
                , drawDevice
                , draw = false;// = drawDeviceFactory('standard',{ctx:stage.getCtx()});;



            window.stage = stage;
            var createStyleButtons = function () {
                var button = new Button(0, 0, 50, 50);
                stage.addObject(button.getElement());
                button.addEvent('click', function () {

                })

            };

            var handleMouseDown = function () {
                var layer = new CanvasElement({x:0, y:0, w:appSettings.mainCanvasSize.w, h: appSettings.mainCanvasSize.h}), ctx;
                drawDevice = drawDevicesFactory('Standard',layer);
                ctx = drawDevice.getCtx();

                layer.append();

                ctx.fillStyle ="#000";
                ctx.fillRect(20,20,20,20);
                draw = true;
                console.log('ok');
                triggerDraw();

            };
            var handleMouseMove = function (e) {
                mousePos.x = e.offsetX;
                mousePos.y = e.offsetY;
                triggerDraw();

            };

            var triggerDraw = function () {
                if(draw === true){
                    console.log('trihg');
                    drawDevice.setX(mousePos.x);
                    drawDevice.setY(mousePos.y);
                    drawDevice.setColor("red");
                    drawDevice.draw();
                }
            };
            var handleMouseUp = function () {
                draw = false;
            };

            var addEvents = function () {

                utilsJhn.addEvents(appSettings.canvasContainer, "mousedown" ,handleMouseDown);
                utilsJhn.addEvents(appSettings.canvasContainer, "mouseup" ,handleMouseUp);
                utilsJhn.addEvents(appSettings.canvasContainer, "mousemove" ,handleMouseMove);

            } ;



            var init = function () {
                pubSub = new EventEmitter();
                addEvents();
                createStyleButtons();



            };


            return{init:init, pubSub:pubSub};

        };//app

        return app();
    });


