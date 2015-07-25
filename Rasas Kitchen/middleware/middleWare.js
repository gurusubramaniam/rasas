'use strict';


var IndexModel = require('../models/index');


exports.renderView = function (req, res, next) {
    var model = new IndexModel(),
        viewName = req && req.route && req.route.path || 'index';

    viewName=viewName.replace("/", '');
    console.log('req path :  ', req.route.path);
    console.log('ViewName :  ', viewName);
    res.render(viewName, model);
}
