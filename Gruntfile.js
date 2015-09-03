module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        'eslint': {
            target: ['src/js/**/*.js']
        },

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

        'clean': {
            both: ['build/', 'buildtemp/'],
            temp: ['buildtemp/']
        },

        'copy': {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**', '!js/**', '!css/**'],
                    dest: 'build/'
                }]
            }
        },

        'concat': {
            sass: {
                src: ['src/css/**/*.scss', '!src/css/ie8.scss'],
                dest: 'buildtemp/style.scss'
            }
        },

        'sass': {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'buildtemp/style.css': 'buildtemp/style.scss',
                    'buildtemp/ie8.css': ['src/css/ie8.scss']
                }
            }
        },

        'cssmin': {
            'scss': {
                files: [{
                    expand: true,
                    cwd: 'buildtemp/',
                    src: ['*.css'],
                    dest: 'build/css/',
                    ext: '.min.css'
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
        },

        'watch': {
            scripts: {
                files: ['./src/**/*'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);
    //grunt.registerTask('default', ['clean', 'copy', 'sass', 'cssmin', 'browserify', 'uglify']);
    grunt.registerTask('default', ['clean:both', 'eslint', 'copy', 'concat:sass', 'sass', 'cssmin', 'browserify', 'clean:temp']);
};