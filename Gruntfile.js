'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  var jsFileList = [
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/transition.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/alert.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/button.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/carousel.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/collapse.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/dropdown.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/modal.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/tooltip.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/popover.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/scrollspy.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/tab.js',
    'docroot/content/themes/g6pd/assets/vendor/bootstrap/js/affix.js',
    'docroot/content/themes/g6pd/assets/js/plugins/*.js',
    'docroot/content/themes/g6pd/assets/js/_*.js'
  ];

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'docroot/content/themes/g6pd/assets/js/*.js',
        '!docroot/content/themes/g6pd/assets/js/scripts.js',
        '!docroot/content/themes/g6pd/assets/**/*.min.*'
      ]
    },
    less: {
      dev: {
        files: {
          'docroot/content/themes/g6pd/assets/css/main.css': [
            'docroot/content/themes/g6pd/assets/less/main.less'
          ]
        },
        options: {
          compress: false,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: 'docroot/content/themes/g6pd/assets/css/main.css.map',
          sourceMapRootpath: '/app/themes/g6pd/'
        }
      },
      build: {
        files: {
          'docroot/content/themes/g6pd/assets/css/main.min.css': [
            'docroot/content/themes/g6pd/assets/less/main.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [jsFileList],
        dest: 'docroot/content/themes/g6pd/assets/js/scripts.js',
      },
    },
    uglify: {
      dist: {
        files: {
          'docroot/content/themes/g6pd/assets/js/scripts.min.js': [jsFileList]
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev: {
        options: {
          map: {
            prev: 'docroot/content/themes/g6pd/assets/css/'
          }
        },
        src: 'docroot/content/themes/g6pd/assets/css/main.css'
      },
      build: {
        src: 'docroot/content/themes/g6pd/assets/css/main.min.css'
      }
    },
    modernizr: {
      build: {
        devFile: 'docroot/content/themes/g6pd/assets/vendor/modernizr/modernizr.js',
        outputFile: 'docroot/content/themes/g6pd/assets/js/vendor/modernizr.min.js',
        files: {
          'src': [
            ['docroot/content/themes/g6pd/assets/js/scripts.min.js'],
            ['docroot/content/themes/g6pd/assets/css/main.min.css']
          ]
        },
        extra: {
          shiv: false
        },
        uglify: true,
        parseFiles: true
      }
    },
    version: {
      default: {
        options: {
          format: true,
          length: 32,
          manifest: 'docroot/content/themes/g6pd/assets/manifest.json',
          querystring: {
            style: 'g6pd_css',
            script: 'g6pd_js'
          }
        },
        files: {
          'docroot/content/themes/g6pd/lib/scripts.php': 'docroot/content/themes/g6pd/assets/{css,js}/{main,scripts}.min.{css,js}'
        }
      }
    },
    watch: {
      less: {
        files: [
          'docroot/content/themes/g6pd/assets/less/*.less',
          'docroot/content/themes/g6pd/assets/less/**/*.less'
        ],
        tasks: ['less:dev', 'autoprefixer:dev']
      },
      js: {
        files: [
          jsFileList,
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'concat']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'docroot/content/themes/g6pd/assets/css/main.css',
          'docroot/content/themes/g6pd/assets/js/scripts.js',
          'templates/*.php',
          '*.php'
        ]
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'jshint',
    'less:dev',
    'autoprefixer:dev',
    'concat'
  ]);
  grunt.registerTask('build', [
    'jshint',
    'less:build',
    'autoprefixer:build',
    'uglify',
    'modernizr',
    'version'
  ]);
};
