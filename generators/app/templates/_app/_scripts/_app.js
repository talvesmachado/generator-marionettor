require(['utils/communicator','utils/regionManager', 'routers/router', 'views/homepage'], function(Communicator, regionManager, router, Homepage) {
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

        // SET Main REGION
        var mainRegion = Communicator.reqres.request("RM:addRegion", 'main', '#main');
        console.log(mainRegion);
        //Start ROUTER
        App.router = new router();
        Backbone.history.start({
            pushState: false
        });
        // LISTEN TO SET THE GOOD VIEW
        Communicator.mediator.on("APP:NAVIGATE", _.bind(function(screenName) {
            switch (screenName) {
                case 'homepage':
                    mainRegion.show(new Homepage());
                    break;
                default:
                    mainRegion.show(new Homepage());
            }
        }, this));
        mainRegion.show(new Homepage());
    });
    // START THE APPLICATION
    App.start();
});
