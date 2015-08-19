'use strict';


requirejs.config({
    baseUrl: 'js/',
    paths: {
        'jquery' : 'lib/jquery',
        'underscore' : 'lib/underscore',
        'backbone' : 'lib/backbone'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});


require(['backbone'], function (Backbone) {
    var app = {
        initialize: function () {
            // Your code here
        }
    };
    app.initialize();
});
