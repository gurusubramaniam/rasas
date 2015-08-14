'use strict';


var IndexModel = require('../models/index');


exports.renderView = function (req, res, next) {
    var model = new IndexModel(),
        viewName = req && req.route && req.route.path || 'index';

    viewName = (viewName === '/') ? 'index' : viewName.replace('/','');

    console.log('req path :  ', req.route.path);
    console.log('ViewName :  ', viewName);
    res.render(viewName, model);
};
//exports.returnJSON = function (req, res, next) {
//    res.json(req.model);
//};
//
//exports.menuItems = function (req, res, next) {
//    var menu = ['Home', 'Menu', 'Feed Back'];
//    req.model.data.menu = menu;
//    next();
//}
