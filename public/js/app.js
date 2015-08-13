'use strict';


requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        'view' : '../views'
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
