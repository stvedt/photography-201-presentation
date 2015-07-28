module.exports = function(grunt) {

  var sourceDirectory = "frontend/";
  var buildDirectory = "_compiled_/";
  var destinationDirectory = "build/";

  require('load-grunt-tasks')(grunt);

    grunt.initConfig({


      pkg: grunt.file.readJSON('package.json'),


      clean: {
        build: {
          src: [ sourceDirectory + buildDirectory + 'images', sourceDirectory + buildDirectory + 'js', sourceDirectory + buildDirectory + 'scss']
        },
      },

      uglify: {
        options: {
          mangle: false,
          compress: true,
          preserveComments: false,
        },
        my_target: {
          files: [{
            expand: true,
            cwd: sourceDirectory + 'js',
            src: '**/*.js',
            dest: sourceDirectory + buildDirectory + 'js'
          }]
        }
      },

      sass: {
        dist: {
          files: [{
            expand: true,
            cwd: sourceDirectory + 'scss',
            src: ['**/*.scss'],
            dest: sourceDirectory + buildDirectory + 'css',
            ext: '.css'
          }]
        }
      },
      includes: {
        build: {
          cwd: sourceDirectory,
          src: [ '*.html' ],
          dest: destinationDirectory,
          options: {
            flatten: true
          }
        }
      },

      watch: {
        css: {
          files: sourceDirectory + 'scss/**/*.scss',
          tasks: ['sass', 'cssmin','copy']
        },
        html: {
          files: sourceDirectory + '**/*.html',
          tasks: ['copy','includes'],

        },
        markdown: {
          files: sourceDirectory + 'markdown/*.md',
          tasks: ['copy'],

        },
        scripts: {
          files: sourceDirectory + 'js/**/*.js',
          tasks: ['uglify','copy']
        }
      },

      cssmin: {
        minify: {
          expand: true,
          cwd: sourceDirectory + buildDirectory + 'css',
          src: ['**/*.css', '**/!*.min.css'],
          dest: sourceDirectory + buildDirectory + 'css',
          ext: '.min.css'
        }
      },

      copy: {
        main: {
          files: [
            {expand: true, cwd: sourceDirectory + 'vendor/' , src: ['**'], dest: destinationDirectory + 'vendor'},
            {expand: true, cwd: sourceDirectory + 'fonts/' , src: ['**'], dest: destinationDirectory + 'fonts'},
            {expand: true, cwd: sourceDirectory + 'images/', src: ['**'], dest: destinationDirectory + 'images'},
            {expand: true, cwd: sourceDirectory , src: ['**/*.md'], dest: destinationDirectory},
            {expand: true, cwd: sourceDirectory + 'js/', src: ['**'], dest: destinationDirectory + 'js'},
            {expand: true, cwd: sourceDirectory + 'css/', src: ['**'], dest: destinationDirectory + 'css'},
            {expand: true, cwd: sourceDirectory + buildDirectory , src: ['**'], dest: destinationDirectory},
          ]
        }
      },

      connect: {
        server: {
          options: {
            port: 9001,
            base: 'build',
            open: true
          }
        }
      }


    });

    // - - - - - - - - -  - - - - - - - - -  - - - - - - - - -

    grunt.registerTask('serve', 'watching files and connecting using grunt connect', ['clean', 'sass', 'copy', 'includes','connect','watch']);

    grunt.registerTask('build', ['clean', 'sass', 'copy', 'includes']);

    // - - - - - - - - -  - - - - - - - - -  - - - - - - - - -

  }
