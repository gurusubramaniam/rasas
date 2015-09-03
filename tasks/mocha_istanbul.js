'use strict';


module.exports = function mocha_istanbul(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    // Options
    return {
        coverage: {
            src: 'test',
            options: {
                coverageFolder: 'coverage',
                mask: '**/*.spec.js',
                print: 'detail'
            }
        }
    };
};
