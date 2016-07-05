define(['utils/communicator'],
    function(Communicator) {
        'use strict';

        return Backbone.Router.extend({
            initialize: function(options) {
                console.log("Initialize The ROUTER");
                Communicator.mediator.on("NAVIGATION:CLICK", _.bind( function(screenName) {
                    this.navigate(screenName, {
                        trigger: true
                    });
                }, this));
            },
            /* Backbone routes hash */
            routes: {
                "": "homepage",
                "*other": "homepage"
            },
            homepage: function() {
                Communicator.mediator.trigger("APP:NAVIGATE", 'homepage');
            }
        });
    });
