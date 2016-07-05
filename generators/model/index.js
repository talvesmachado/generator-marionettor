'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yeomanExtended = require('../../utils');



module.exports = yeomanExtended.extend({
  prompting: function() {

    var prompts = [{
      type: 'input',
      name: 'viewModelName',
      message: 'what\'s your Model name?'
    }];

    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('_model.js'),
      this.destinationPath('app/scripts/models/'+this.props.viewModelName+'.js'), {
        viewModelName: this.props.viewModelName
      }
    );
    this._generateTest(this.props.viewModelName, 'models');
  }

});
