
requirejs.config({
    baseUrl: 'src',

    paths: {
        'jquery': '../lib/jquery'
        , 'underscore': '../lib/underscore'
        , 'sinon': '../lib/sinon'
        , 'EventEmitter' :'../lib/EventEmitter'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
    ,urlArgs: "bust=" +  (new Date()).getTime()
});