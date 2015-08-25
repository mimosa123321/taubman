module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        'jsbeautifier' : {
            files : ['src/js/**/*.js'],
            options: {
                js: {
                    braceStyle: 'collapse',
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: ' ',
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0
                }
            }
        },

        'clean': ['build/'],

        'copy': {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**', '!js/**'],
                    dest: 'build/'
                }]
            }
        },

        'sass': {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'build/css/style.css': 'src/css/style.scss',
                    'build/css/ie8.css': 'src/css/ie8.scss'
                }
            }
        },

        'cssmin': {
            'scss': {
                files: [{
                    expand: true,
                    cwd: 'build/css/',
                    src: ['style.css','ie8.css'],
                    dest: 'build/css/',
                    ext: '.css'
                }]
            }
        },

        'browserify': {
            options: {
                debug: true,
                transform: ['reactify']
            },
            dist: {
                files: {
                    'build/js/main.min.js': ['src/js/**/*.js']
                }
            }
        },

        'uglify': {
            options: {
                mangle: false,
                compress: {
                    drop_console: false
                }
            },
            main: {
                files: {
                    'build/js/main.min.js': ['build/js/main.min.js']
                }
            }
        }

        //'watch': {
        //    scripts: {
        //        files: ['./src/js/**/*.js'],
        //        tasks: ['default'],
        //        options: {
        //            spawn: false
        //        }
        //    }
        //}

    });

    require('load-grunt-tasks')(grunt);
    //grunt.registerTask('default', ['clean', 'copy', 'sass', 'cssmin', 'browserify', 'uglify']);
    grunt.registerTask('default', ['clean', 'copy', 'sass', 'cssmin', 'browserify']);
};