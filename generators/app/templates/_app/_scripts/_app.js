require(['utils/communicator', 'utils/regionManager', 'views/homepage'], function(Communicator, RegionManager, Homepage) {
  'use strict';
  /*
   █████  ██████  ██████      ██   ██ ██  ██████ ██   ██     ███████ ████████  █████  ██████  ████████
  ██   ██ ██   ██ ██   ██     ██  ██  ██ ██      ██  ██      ██         ██    ██   ██ ██   ██    ██
  ███████ ██████  ██████      █████   ██ ██      █████       ███████    ██    ███████ ██████     ██
  ██   ██ ██      ██          ██  ██  ██ ██      ██  ██           ██    ██    ██   ██ ██   ██    ██
  ██   ██ ██      ██          ██   ██ ██  ██████ ██   ██     ███████    ██    ██   ██ ██   ██    ██
  */
  var App = new Marionette.Application();
  App.on('start', function() {
    Backbone.history.start();


    var region =     Communicator.reqres.request("RM:addRegion", 'main', '#main' );

    region.show(new Homepage({
      model: new Backbone.Model({
        myVar: 'df'
      })
    }));

  });
  App.start();
});
