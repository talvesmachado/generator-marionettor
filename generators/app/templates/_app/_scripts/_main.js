/*global require*/
'use strict';
require.config({
  baseUrl: '/scripts',
  deps: ['app'],
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
      ]    },
    app: {
      deps: [
        'backbone.marionette'
      ]
    }
  },
  paths: {
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
    tmpl: 'templates'
    <% if (is3d) { %>,
    babylonjs: '../../bower_components/babylonjs/dist/babylon.2.4'
    <% } %>
  }
});
