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



define(['app'], function (app) {
console.log('ewr', typeof  document.addEventListener);

    var p = document.createElement('p');
    p.innerHTML = "wqed";
    document.body.appendChild(p);


        app.init();

});

