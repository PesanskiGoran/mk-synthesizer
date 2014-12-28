/**
 * This file/module contains all configuration for the build process.
 */
/* jshint camelcase: false */
module.exports = {

  // This is only required for the less source maps during development.
  server: 'http://localhost:9000',

  dir: {
    src: 'src',
    tmp: 'target/tmp',
    staging: 'target/staging',
    dist: 'target/dist',
    components: 'components',
    coverage: 'target/coverage',
    report: 'target/surefire-reports',
    html2js: 'target/tmp/html2js'
  },

  common: {
    dir: 'src/common',
    assets: '<%= common.dir %>/assets',
    tmp: '<%= dir.tmp %>/common',
    scripts: [
      // generated by html2js during the build
      '<%= dir.html2js %>/<%= common.html2js_file %>',

      'src/common/**/*-module.js',
      'src/common/**/*.js',
      '!src/common/**/*.spec.js'
    ],
    less: [
      // MANUAL IMPORT OF ALL BOOTSTRAP LESS FILES
      /*// Based on Twitter Bootstrap 3.1.1
      // Core variables and mixins
      'src/common/styles/bootstrap/variables.less',
      'src/common/styles/bootstrap/mixins.less',
      // Bootstrap Reset
      'src/common/styles/bootstrap/normalize.less',
      'src/common/styles/bootstrap/print.less',
      'src/common/styles/bootstrap/glyphicons.less',
      // Core Bootstrap CSS
      'src/common/styles/bootstrap/scaffolding.less',
      'src/common/styles/bootstrap/type.less',
      'src/common/styles/bootstrap/code.less',
      'src/common/styles/bootstrap/grid.less',
      'src/common/styles/bootstrap/tables.less',
      'src/common/styles/bootstrap/forms.less',
      'src/common/styles/bootstrap/buttons.less',
      'src/common/styles/bootstrap/theme.less',
      // Components
      'src/common/styles/bootstrap/component-animations.less',
      'src/common/styles/bootstrap/dropdowns.less',
      'src/common/styles/bootstrap/button-groups.less',
      'src/common/styles/bootstrap/input-groups.less',
      'src/common/styles/bootstrap/navs.less',
      'src/common/styles/bootstrap/navbar.less',
      'src/common/styles/bootstrap/breadcrumbs.less',
      'src/common/styles/bootstrap/pagination.less',
      'src/common/styles/bootstrap/pager.less',
      'src/common/styles/bootstrap/labels.less',
      'src/common/styles/bootstrap/badges.less',
      'src/common/styles/bootstrap/jumbotron.less',
      'src/common/styles/bootstrap/thumbnails.less',
      'src/common/styles/bootstrap/alerts.less',
      'src/common/styles/bootstrap/progress-bars.less',
      'src/common/styles/bootstrap/media.less',
      'src/common/styles/bootstrap/list-group.less',
      'src/common/styles/bootstrap/panels.less',
      'src/common/styles/bootstrap/responsive-embed.less',
      'src/common/styles/bootstrap/wells.less',
      'src/common/styles/bootstrap/close.less',
      // Components w/ JavaScript
      'src/common/styles/bootstrap/modals.less',
      'src/common/styles/bootstrap/tooltip.less',
      'src/common/styles/bootstrap/popovers.less',
      'src/common/styles/bootstrap/carousel.less',
      // Utility classes
      'src/common/styles/bootstrap/utilities.less',
      'src/common/styles/bootstrap/responsive-utilities.less',*/

      // IMPORTS EVERY BOOTSTRAP LESS FILE
      'src/common/styles/bootstrap/bootstrap.less',

      // mk-synthesizer less
      'src/common/styles/common.less',
      'src/common/**/*.less'
    ],
    html: ['src/common/**/*.tpl.html'],
    html2js_file: 'common-tpl.js'
  },

  mkSynthesizer: {
    dir: 'src/mkSynthesizer',
    assets: '<%= mkSynthesizer.dir %>/assets',
    tmp: '<%= dir.tmp %>/mkSynthesizer',
    staging: '<%= dir.staging %>/mkSynthesizer',
    dist: '<%= dir.dist %>/mkSynthesizer',
    index: '<%= mkSynthesizer.dir %>/index.html',

    // JAVA SCRIPT
    vendor: [
      '<%= dir.components %>/jquery/dist/jquery.js',
      '<%= dir.components %>/angular/angular.js',
      '<%= dir.components %>/angular-cookies/angular-cookies.js',
      '<%= dir.components %>/angular-ui-router/release/angular-ui-router.js',
      '<%= dir.components %>/lodash/dist/lodash.js',
      '<%= dir.components %>/underscore.string/lib/underscore.string.js',
      '<%= dir.components %>/angular-translate/angular-translate.js',
      '<%= dir.components %>/angular-translate-loader-url/angular-translate-loader-url.js',
      '<%= dir.components %>/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      '<%= dir.components %>/angular-deferred-bootstrap/angular-deferred-bootstrap.js',
      '<%= dir.components %>/bootstrap/dist/js/bootstrap.js'
    ],
    vendor_min: [
      '<%= dir.components %>/jquery/dist/jquery.min.js',
      '<%= dir.components %>/angular/angular.min.js',
      '<%= dir.components %>/angular-cookies/angular-cookies.min.js',
      '<%= dir.components %>/angular-ui-router/release/angular-ui-router.min.js',
      '<%= dir.components %>/lodash/dist/lodash.min.js',
      '<%= dir.components %>/underscore.string/dist/underscore.string.min.js',
      '<%= dir.components %>/angular-translate/angular-translate.min.js',
      '<%= dir.components %>/angular-translate-loader-url/angular-translate-loader-url.min.js',
      '<%= dir.components %>/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
      '<%= dir.components %>/angular-deferred-bootstrap/angular-deferred-bootstrap.min.js',
      '<%= dir.components %>/bootstrap/dist/js/bootstrap.min.js'
    ],
    scripts: [
      '<%= common.scripts %>',
      // generated by html2js during the build
      '<%= dir.html2js %>/<%= mkSynthesizer.html2js_file %>',

      'src/mkSynthesizer/**/*-module.js',
      'src/mkSynthesizer/**/*.js',
      '!src/mkSynthesizer/**/*.spec.js'
    ],

    all_scripts: [ '<%= mkSynthesizer.vendor %>', '<%= mkSynthesizer.scripts %>' ],

    // LESS
    less: [
      '<%= mkSynthesizer.dir %>/mkSynthesizer.less',
      '<%= mkSynthesizer.dir %>/**/*.less'
    ],
    less_compiled: '<%= dir.tmp %>/mkSynthesizer/mkSynthesizer.css',
    all_less: ['<%= common.less %>', '<%= mkSynthesizer.less %>'],

    // HTML
    html: ['<%= mkSynthesizer.dir %>/**/*.tpl.html'],
    html2js_file: 'mkSynthesizer-tpl.js',
    all_html: ['<%= common.html %>', '<%= mkSynthesizer.html %>']

  }

};