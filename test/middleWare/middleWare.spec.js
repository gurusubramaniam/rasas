/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    assert = require('chai').assert,
    lo_ = require('lodash'),
    request = require('supertest');


describe('/', function () {

    var app, mock;


    beforeEach(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: process.cwd()
        }));

        mock = app.listen(1337);

    });


    afterEach(function (done) {
        mock.close(done);
    });

    lo_.forEach(['/', 'feedBack', 'menu', 'services', 'contactus'] , function(route){
        it('should return ' + route + ' page', function (done) {
            request(mock)
                .get('/rasaskitchen/' + route)
                .end(function (err, res) {
                    assert.equal(res.statusCode , 200);
                    done();
                });
        });
    });
    //it.only('should return json as reponse', function (done) {
    //    request(mock)
    //        .get('/rasaskitchen/feedback?_mode=json')
    //        .end(function (err, res) {
    //            assert.equal(res.statusCode , 200);
    //            done();
    //        });
    //});
});
