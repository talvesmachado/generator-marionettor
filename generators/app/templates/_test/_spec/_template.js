(function() {
	'use strict';

	var root = this;

	root.define([
		'<%=testDirectory%>/<%=name%>'
		],
		function( <%= camelCaseName %> ) {

			describe('<%= camelCaseName %> <%= camelCaseSpecType %>', function () {

				it('should be an instance of <%= camelCaseName %> <%= camelCaseSpecType %>', function () {
					var <%=name%> = new <%= camelCaseName %>();
					expect( <%=name%> ).to.be.an.instanceof( <%= camelCaseName %> );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
