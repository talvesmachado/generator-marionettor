(function() {
	'use strict';

	var root = this;

	root.define([
		'views/homepage'
		],
		function( homepage ) {

			describe('homepage views', function () {

				it('should be an instance of homepage views', function () {
					var homepage = new homepage();
					expect( homepage ).to.be.an.instanceof( homepage );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
