define(['utils/communicator', 'babylonjs'],
  function(Communicator) {
    'use strict';
    var World = Marionette.Object.extend({
      scene: null,
      initialize: function(options) {
        console.log('WORLD')
      },
      createScene: function(){

        var canvas = document.getElementById('renderCanvas');
        var engine = new BABYLON.Engine(canvas, true);
        this.scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene);
        camera.setTarget(BABYLON.Vector3.Zero());

         // This attaches the camera to the canvas
         camera.attachControl(canvas, true);

         // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
         var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this.scene);

         // Default intensity is 1. Let's dim the light a small amount
         light.intensity = 0.7;

         // Our built-in 'sphere' shape. Params: name, subdivs, size, this.scene
         var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, this.scene);

         // Move the sphere upward 1/2 its height
         sphere.position.y = 1;

         // Our built-in 'ground' shape. Params: name, width, depth, subdivs, this.scene
         var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, this.scene);


         engine.runRenderLoop(function() {
            this.scene.render();
        }.bind(this));
      }
    });
    return new World();
  });
