'use strict';

/**
 * @fileOverview : Contains method for setting the common functionality for the app
 * @author Gurusubramaniam sundararaman
 * @email gurutii@gmail.com
 */

/**
 *
 * Method for setting up all the common model variables
 * This method gets executed from the config file in priority order
 * This method returns a method which sets the JS base url and CSS base url based on the Environment
 *
 *
 * @returns {Function}
 */
exports.setPageData = function setPageData() {
    return function setPageData(req, res, next) {
        var mountPath = req.baseUrl,
            hostName = req.get('host'),
            jsBaseUrl = hostName + mountPath + '/.build/public/js/',
            cssBaseUrl = hostName + mountPath + '/.build/public/css/';

        if( req && req.devEnv) {
            console.log('JS and CSS are served from local public files');
            jsBaseUrl = mountPath + '/js/';
            cssBaseUrl = mountPath + '/css/';
        }

        req.model = req.model || {};
        req.model.data = req.model && req.model.data || {};
        req.model.data.jsBaseUrl = jsBaseUrl;
        req.model.data.cssBaseUrl = cssBaseUrl;
        console.log('info : Base url Set successfully');
        next();
    };
};


/**
 *
 * Method for rending the view or returning the json back to the client.
 * Also support the _mode for making the developers life easy
 *
 *
 * @param req
 * @param res
 * @param next
 */
exports.renderView = function (req, res, next) {
    var viewName = req && req.route && req.route.path || 'index';

    viewName = (viewName === '/') ? 'index' : viewName.replace('/','');
    res.format({
        html: function () {
            //This is for the development environment to check the JSON alone is requested by the user.
            if(req.query._mode === 'json' && req.env === 'development') {
                console.log('INFO :: serving JSON in development environment with _mode=json');
                res.json(req.model);
            } else {
                console.log('INFO :: rendering page :: ' + viewName);
                res.render(viewName, req.model);
            }
        },
        json: function () {
            console.log('INFO :: serving JSON response back to client');
            res.json(req.model);
        },

        // Fix for IE8
        'application/x-ms-application': function () {
            res.type('.html');
            res.render(req.model.viewName, req.model);
        }
    });
};