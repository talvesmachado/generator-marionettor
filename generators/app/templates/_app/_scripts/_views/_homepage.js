define(['utils/communicator','hbars!templates/home','3d/world'],
function(Communicator, Tpl, World){
    'use strict';
	return Marionette.LayoutView.extend({
		template: Tpl,
		initialize: function() {
			console.log('initialize a Homepage View');
      Communicator.mediator.trigger('APP:starter:homepage')
		},
		onShow: function(){
			World.createScene()
		}
	});
});
