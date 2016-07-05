'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yeomanExtended = require('../../utils');


module.exports = yeoman.Base.extend({
  prompting: function() {

    var prompts = [{
      type: 'input',
      name: 'viewCollectionName',
      message: 'what\'s your Collection name?'
    }];

    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('_collection.js'),
      this.destinationPath('app/scripts/collections/'+this.props.viewCollectionName+'.js'), {
        viewCollectionName: this.props.viewCollectionName
      }
    );
    this._generateTest(this.props.viewCollectionName, 'collections');

  }
});
