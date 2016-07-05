'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yeomanExtended = require('../../utils');

module.exports =  yeomanExtended.extend({
  prompting: function() {

    var prompts = [{
      type: 'input',
      name: 'cameraName',
      message: 'what\'s your camera name?'
    }, {
      type: 'list',
      name: 'cameraType',
      message: 'Wich kind of camera do you whant to create?',
      choices: [{
        name: 'FreeCamera',
        value: 0
      }, {
        name: 'ArcRotateCamera',
        value: 1
      }, {
        name: 'TouchCamera',
        value: 2
      }, {
        name: 'GamepadCamera',
        value: 3
      }, {
        name: 'DeviceOrientationCamera',
        value: 4
      }, {
        name: 'FollowCamera',
        value: 5
      }, {
        name: 'VirtualJoysticksCamera',
        value: 6
      },{
        name: 'AnaglyphArcRotateCamera',
        value: 7
      },{
        name: 'AnaglyphFreeCamera',
        value: 8
      },{
        name: 'VRDeviceOrientationFreeCamera',
        value: 9
      },{
        name: 'WebVRFreeCamera',
        value: 10
      }],
      default: 0
    }, {
      type: 'input',
      name: 'cameraX',
      message: 'Ok, nice... Now give me a X coord'
    }, {
      type: 'input',
      name: 'cameraY',
      message: 'Y coord'
    }, {
      type: 'input',
      name: 'cameraZ',
      message: 'a Z coord'
    }];

    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('_camera.js'),
      this.destinationPath('app/scripts/3d/cameras/'+this.props.cameraName+'.js'), {
        cameraName: this.props.cameraName,
        cameraType: this.props.cameraType,
        cameraX: this.props.cameraX,
        cameraY: this.props.cameraY,
        cameraZ: this.props.cameraZ
      }
    );
  }
});
