'use strict';


module.exports = function jshint(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Options
	return {
		files: [
            'middleware/**/*.js',
            'lib/**/*.js',
            'models/**/*.js'
        ],
		options: {
		    jshintrc: '.jshintrc'
		}
	};
};
