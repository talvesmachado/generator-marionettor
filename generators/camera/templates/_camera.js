define(['utils/communicator', 'babylonjs'],
  function(Communicator, Tpl) {
    'use strict';
    return Marionette.Object.extend({
      className: 'mesh',
      object: null,
      scene: null,
      initialize: function() {pe
        console.log('initialize a <%= cameraName %> View');
        Communicator.mediator.trigger('CAMERA:initialize:<%= cameraName %>');
        this.scene = this.options.scene;
        <% if (cameraType == 0) { %>
        this.object = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), this.scene);
        <% } else if (cameraType == 1) { %>
        this.object = new BABYLON.ArcRotateCamera("ArcRotateCamera", <%= cameraX %>, <%= cameraY %>, <%= cameraZ %>, new BABYLON.Vector3(<%= cameraX %>+1<%= 0 %>, <%= cameraY %>+10, cameraZ+10), this.scene);
        <% } else if (cameraType == 2) { %>
        this.object = new BABYLON.TouchCamera("TouchCamera", new BABYLON.Vector3(<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), this.scene);
        <% } else if (cameraType == 3) { %>
        this.object = new BABYLON.GamepadCamera("Camera", new BABYLON.Vector3(<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), this.scene);
        <% } else if (cameraType == 4) { %>
        this.object = new BABYLON.DeviceOrientationCamera("DevOr_camera", new BABYLON.Vector3(<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), this.scene);
        <% } else if (cameraType == 5) { %>
        this.object = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), this.scene);
        <% } else if (cameraType == 6) { %>
        this.object = new BABYLON.VirtualJoysticksCamera("VJ_camera", new BABYLON.Vector3(<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), this.scene);
        <% } else if (cameraType == 7) { %>
        this.object = new BABYLON.AnaglyphArcRotateCamera("aar_cam", -Math.PI/2, Math.PI/4, 20, new BABYLON.Vector3.Zero(), 0.033, this.scene);
        <% } else if (cameraType == 8) { %>
        this.object = new BABYLON.AnaglyphFreeCamera("af_cam", new BABYLON.Vector3(<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), 0.033, this.scene);
        <% } else if (cameraType == 9) { %>
        this.object = new BABYLON.VRDeviceOrientationFreeCamera ("Camera", new BABYLON.Vector3 (<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), this.scene, 0);
        <% } else if (cameraType == 10) { %>
        this.object = new BABYLON.WebVRFreeCamera("WVR", new BABYLON.Vector3(<%= cameraX %>, <%= cameraY %>, <%= cameraZ %>), this.scene);
        <% } %>
      }
    });
  });
