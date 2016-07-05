(function() {
	'use strict';

	var root = this;

	root.define([
		'views/homepage'
		],
		function( homepage ) {

			describe('homepage', function () {

				it('should be an instance of Screen Model', function () {
					var screen = new homepage();
					expect( screen ).to.be.an.instanceof( homepage );
				});

				it('should have more test written', function(){
					expect( false ).to.be.false;
				});
			});

		});

}).call( this );
