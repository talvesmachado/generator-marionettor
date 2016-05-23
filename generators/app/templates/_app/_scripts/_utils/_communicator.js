define([],
  function() {
    'use strict';

    var Communicator = Marionette.Object.extend({
      initialize: function(options){
        this.mediator = new Backbone.Wreqr.EventAggregator();
        //create a req/res
        this.reqres = new Backbone.Wreqr.RequestResponse();
        // create commands
        this.command = new Backbone.Wreqr.Commands();
      }
    });

    return new Communicator();
  }
);
