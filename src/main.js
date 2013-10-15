requirejs.config({
    baseUrl: 'src',

    paths: {
        'jquery': '../lib/jquery'
        , 'underscore': '../lib/underscore'
        , 'sinon': '../lib/sinon'
        , 'EventEmitter' :'../lib/EventEmitter'

    },

    packages : [{
        name : "utilsJhn",
        location : "../lib/utilsJhn",
        main : "mainUtils"
    }],

    shim: {
        'underscore': {
            exports: '_'
        }
    }
    ,urlArgs: "bust=" +  (new Date()).getTime()
});



define(['app'], function (app) {
        app.init();

});

