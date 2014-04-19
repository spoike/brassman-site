module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        open: {
            dev: {
                path: 'http://localhost:8000'
            }
        },
        connect: {
            server: {
                    options: {
                    port: 8000,
                    base: './www'
                }
            }
        },
        watch: {
            scripts: {
                files: ['www/**/*.js', '!www/scripts/lib/*.js', '!www/scripts/require*'],
                tasks: ['jshint:scripts']
            },
            gruntfile: {
                files: ['gruntfile.js'],
                tasks: ['jshint:gruntfile']
            },
            sass: {
                files: ['www/css/main.scss'],
                tasks: ['sass:dist'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            scripts: ['<%= watch.scripts.files %>', '!www/scripts/**/*.jsx.js'],
            gruntfile: ['<%= watch.gruntfile.files %>']
        },
        sass: {
            dist: {
                files: {
                    'www/css/main.css': 'www/css/main.scss'
                }
            }
        }
    });
    
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    
    grunt.registerTask('default', ['connect', 'open:dev', 'watch']);

};