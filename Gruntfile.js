var grunt = require('grunt');

grunt.initConfig({
    concat: {
        app: {
            options:{
                banner: '(function() {\n\'use strict\'\n',
                footer: '})();\n'
            },
            files: {
                'node_modules/.cache/.app-cache/app.js': [
                    /* concat mains */
                    'app/app.js',
                    'app/bootstrap.js',
                    'app/config.js',
                    'app/router.js',
                    /* concat modules */
                    'app/core/core.js',
                    'app/login/login.js',
                    'app/dashboard/dashboard.js',
                    /* concat by types*/
                    'app/*/controller/*.js',
                    'app/*/service/*.js',
                    'app/*/directive/*.js',
                    'app/*/filter/*.js'
                ]
            }
        },
        build: {
            files: {
                'web/javascripts/main.min.js': [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'node_modules/.cache/.app-cache/app.min.js'
                ]
            }
        }
    },
    'closure-compiler': {
        compile: {
            closurePath: 'node_modules/grunt-closure-compiler-build',
            js: [
                'node_modules/.cache/.app-cache/app.js',
                'resources/javascripts/js/**/*.js'
            ],
            jsOutputFile: 'node_modules/.cache/.app-cache/app.min.js',
            options: {
                angular_pass: true,
                compilation_level: 'SIMPLE_OPTIMIZATIONS',
                language_in: 'ECMASCRIPT5',
                formatting: 'SINGLE_QUOTES',
                output_wrapper: "/* Application */%output%"
            }
        }
    },
    ngtemplates: {
        app: {
            cwd: 'app',
            src: 'view/**.html',
            dest: 'app/core/service/TemplateCache.js',
            options: {
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true, /* Only if you don't use comment directives! */
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                bootstrap: function(module, script) {
                    return '\/**\n' +
                        ' * @name app.core.TemplateCache\n' +
                        ' * @description All Templates Cache\n' +
                        ' * @param {angular.$templateCache} $templateCache\n' +
                        ' * {@link https://docs.angularjs.org/api/ng/service/$templateCache}\n' +
                        ' * @returns {{}}\n' +
                        ' * @constructor\n' +
                        ' * @ngInject\n' +
                        ' */\n' +
                        'function TemplateCache($templateCache) {\n' +
                        'var TemplateCache = {};\n' +
                        'TemplateCache.init = function() {' + script + '};\n' +
                        'return TemplateCache;}\n' +
                        'angular.module(\'app.core\')\n' +
                        '.factory(\'TemplateCache\', TemplateCache);\n';
                },
                prefix: '/'
            }
        }
    },
    'closure-compiler-build': {
        build: {
            url: 'http://dl.google.com/closure-compiler/compiler-latest.zip',
            dir: 'node_modules/grunt-closure-compiler-build/bin/',
            filename: 'closure-compiler',
            update: true
        }
    },
    jsdoc: {
        dist: {
            src: [
                'app/**/*.js'
            ],
            options: {
                destination: 'logs/jsdoc'
            }
        }
    },
    jscs: {
        src: 'app/**/*.js',
        options: {
            'preset': 'google',
            'config': 'app/.jscs.json'
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-closure-compiler');
grunt.loadNpmTasks('grunt-angular-templates');
grunt.loadNpmTasks('grunt-closure-compiler-build');
grunt.loadNpmTasks('grunt-jsdoc');
grunt.loadNpmTasks('grunt-jscs');

grunt.registerTask('run-compiler-build', 'closure-compiler-build');
grunt.registerTask('run-compiler', 'closure-compiler');
grunt.registerTask('run-concat-app', 'concat:app');
grunt.registerTask('run-concat-build', 'concat:build');
grunt.registerTask('run-views', 'ngtemplates');
grunt.registerTask('run-jsdoc', 'jsdoc');
grunt.registerTask('run-jscs', 'jscs');
grunt.registerTask('build-app', [
    'ngtemplates',
    'jscs',
    'jsdoc',
    'concat:app',
    'closure-compiler',
    'concat:build'
]);
