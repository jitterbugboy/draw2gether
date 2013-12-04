var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}
dump(new Date());

requirejs.onError = function (err) {
    console.log(err.requireType, err.requireModules);

    if (err.requireType === 'timeout') {
        console.log('modules: ' /*+ err.requireModules, this*/);
    }

    throw err;
};


requirejs.config({
catchError:true,



    // Karma serves files from '/base'
    baseUrl: '/base/src',

    paths: {
         'underscore'      : '../lib/underscore'
        , 'jquery'            : '../lib/jquery'
        , 'EventEmitter'    :'../lib/EventEmitter'
        //for testing only
        , 'sinon'           : '../lib/sinon'


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

    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
