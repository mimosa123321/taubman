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
                src: ['src/css/**/*.scss', '!src/css/ie8.scss','!src/css/ie9.scss'],
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
                    'buildtemp/ie8.css': ['src/css/ie8.scss'],
                    'buildtemp/ie9.css': ['src/css/ie9.scss']
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

        pngmin: {
            compile: {
                options: {
                    concurrency: 8,             // specify how many exucutables get spawned in parallel
                    colors: 256,                // reduce colors to 128
                    ext: '.png',                // use .png as extension for the optimized files
                    quality: '65-80',           // output quality should be between 65 and 80 like jpeg quality
                    speed: 10,                  // pngquant should be as fast as possible
                    iebug: false                 // optimize image for use in Internet Explorer 6
                },
                files: [
                    {
                        src: 'src/images/*.png',
                        dest: 'build/images/**/*.png'
                    }
                ]
            }
        },


        'watch': {
            scripts: {
                files: ['./src/**/*'],
                tasks: ['concat:sass', 'sass', 'cssmin', 'browserify'],
                options: {
                    spawn: false
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);
    //grunt.registerTask('default', ['clean', 'copy', 'sass', 'cssmin', 'browserify', 'uglify']);
    grunt.registerTask('default', ['clean:both', 'eslint', 'copy', 'concat:sass', 'sass', 'cssmin', 'browserify','pngmin', 'clean:temp']);
    //grunt.registerTask('default', ['clean:both', 'eslint', 'copy', 'concat:sass', 'sass', 'cssmin', 'browserify', 'clean:temp']);
};