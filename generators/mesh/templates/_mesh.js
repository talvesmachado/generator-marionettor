define(['utils/communicator', 'babylonjs'],
function(Communicator, Tpl){
    'use strict';
	return Marionette.Object.extend({
		className: 'mesh',
		object: null,
		scene: null,
		initialize: function() {
			console.log('initialize a <%= meshName %> Mesh');
      Communicator.mediator.trigger('MESH:initialize:<%= meshName %>')
			this.scene = this.options.scene;

			<% if (meshType == 0) { %>this.object = BABYLON.Mesh.CreateBox("box", 6.0, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
				<% } else if (meshType == 1) { %>this.object = BABYLON.Mesh.CreateSphere("sphere", 10.0, 10.0, this.scene, false,  BABYLON.Mesh.DEFAULTSIDE);
				<% } else if (meshType == 2) { %>this.object =BABYLON.Mesh.CreatePlane("plane", 10.0, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
				<% } else if (meshType == 3) { %>this.object = BABYLON.Mesh.CreateDisc("disc", 5, 30, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
				<% } else if (meshType == 4) { %>this.object = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
				<% } else if (meshType == 5) { %>this.object = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
				<% } else if (meshType == 6) { %>this.object = BABYLON.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
				<% } else if (meshType == 7) { %>this.object =BABYLON.Mesh.CreateLines("lines", [
					    new BABYLON.Vector3(-10, 0, 0),
					    new BABYLON.Vector3(10, 0, 0),
					    new BABYLON.Vector3(0, 0, -10),
					    new BABYLON.Vector3(0, 0, 10)
					], this.scene); <% } %>


		}
	});
});
