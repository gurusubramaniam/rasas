'use strict';

var middleWare = require('../middleware/middleWare');

module.exports = function (router) {
    router({path: '/'}).get(middleWare.renderView);
    router({path: '/menu'}).get(middleWare.renderView);
    router({path: '/services'}).get(middleWare.renderView);
    router({path: '/feedBack'}).get(middleWare.renderView);
    router({path: '/contactUs'}).get(middleWare.renderView);
};
