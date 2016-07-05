'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yeomanExtended = require('../../utils');

module.exports =  yeomanExtended.extend({
  prompting: function() {

    var prompts = [{
      type: 'input',
      name: 'meshName',
      message: 'what\'s your mesh name?'
    }, {
      type: 'list',
      name: 'meshType',
      message: 'Wich kind of mesh do you whant to create?',
      choices: [{
        name: 'Box',
        value: 0
      }, {
        name: 'Sphere',
        value: 1
      }, {
        name: 'Plane',
        value: 2
      }, {
        name: 'Disc',
        value: 3
      }, {
        name: 'Cylinder',
        value: 4
      }, {
        name: 'Torus',
        value: 5
      }, {
        name: 'Knot',
        value: 6
      },{
        name: 'line',
        value: 7
      }],
      default: 0
    }];

    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('_mesh.js'),
      this.destinationPath('app/scripts/3d/meshes/'+this.props.meshName+'.js'), {
        meshName: this.props.meshName,
        meshType: this.props.meshType
      }
    );
  }
});
