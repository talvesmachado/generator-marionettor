define(['utils/communicator', 'hbars!templates/home' <% if (is3d) { %>, '3d/world'<% } %>
  ],
  function(Communicator, Tpl <% if (is3d) { %>, World <% } %>) {
    'use strict';
    return Marionette.LayoutView.extend({
      template: Tpl,
      className: 'homepage',
      initialize: function() {
        console.log('initialize a Homepage View');
        Communicator.mediator.trigger('APP:starter:homepage')
      },
      onShow: function() {
        <% if (is3d) { %>
        World.createScene()
        <% } %>
      }
    });
  });
