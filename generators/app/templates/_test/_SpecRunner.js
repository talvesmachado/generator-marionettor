require.config({
  baseUrl: '../app/scripts',
  urlArgs: 'cb=' + Math.random(),

  deps: ['backbone.marionette'],
  shim: {
    backbone: {
      deps: [
        'jquery',
        'underscore'
      ],
      exports: 'Backbone'
    },
    'backbone.marionette': {
      deps: [
        'backbone'
      ]
    }
  },
  paths: {
    spec: '../../test/spec', // lives in the test directory

    jquery: '../../bower_components/jquery/dist/jquery',
    backbone: '../../bower_components/backbone/backbone',
    underscore: '../../bower_components/lodash/dist/lodash',
    /* alias all marionette libs */
    'backbone.marionette': '../../bower_components/backbone.marionette/lib/backbone.marionette',
    'backbone.wreqr': '../../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../../bower_components/backbone.babysitter/lib/backbone.babysitter',
    /*handelbars templating */
    Handlebars: '../../bower_components/handlebars/handlebars',
    hbars: '../../bower_components/require-handlebars/hbars',
    text: '../../bower_components/requirejs-text/text',
    tmpl: 'templates'<% if (is3d) { %>,
    babylonjs: '../../bower_components/babylonjs/dist/babylon.2.3'
    <% } %>
  }
});

/* require test suite */
require([
    'jquery',
    'spec/testSuite'
  ],
  function($, testSuite) {

    'use strict';
    /* on dom ready require all specs and run */
    $(function() {
      require(testSuite.specs, function() {

        if (window.mochaPhantomJS) {
          console.log('phantom')
          mochaPhantomJS.run();
        } else {
          console.log('mocha')
          mocha.run();
        }

        window.takeScreenshot = function() {
          if (window.callPhantom) {
            var date = new Date()
            var filename = "screenshots/" + date.getTime()
            console.log("Taking screenshot " + filename)
            callPhantom({
              'screenshot': filename
            })
          }
        }
      });
    });
  });
