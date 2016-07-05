define(['utils/communicator','hbars!templates/<%= viewTemplateName %>'],
function(Communicator, Tpl){
    'use strict';
	return <% if (viewType == 0) { %>Marionette.View.extend
		<% } else if (viewType == 1) { %>Marionette.ItemView.extend
		<% } else if (viewType == 2) { %>Marionette.CollectionView.extend
		<% } else if (viewType == 3) { %>Marionette.CompositeView.extend
		<% } else if (viewType == 4) { %>Marionette.LayoutView.extend<% } %>({
		template: Tpl,
		className: 'view',
		initialize: function() {
			console.log('initialize a <% viewName %> View');
      Communicator.mediator.trigger('VIEW:initialize:<%= viewName %>')
		}
	});
});
